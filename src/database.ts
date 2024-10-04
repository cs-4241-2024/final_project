import Database from "better-sqlite3";
import crypto from "crypto";
import { promisify } from 'util';
import { Food, Location } from "./types";

const pbkdf2 = promisify(crypto.pbkdf2);

const db = new Database("db.sqlite", { verbose: console.log });
makeUserTable();
makeFoodsTable();
makeLocationsTable();

export function close(): void {
  db.close();
}

function generateSalt(): string {
  return crypto.randomBytes(16).toString("hex");
}

async function hashPassword(password: string, salt: string): Promise<string> {
  const buffer = await pbkdf2(password, salt, 1000, 64, 'sha512');
  return buffer.toString('hex');
}

function makeUserTable(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      salt TEXT NOT NULL,
      created DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

function makeLocationsTable(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS locations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      name TEXT NOT NULL UNIQUE,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);
}

function makeFoodsTable(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS foods (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      name TEXT NOT NULL UNIQUE,
      category TEXT,
      quantity INTEGER,
      wanted_quantity INTEGER,
      location_id INTEGER,
      unit_price DECIMAL(10, 2),
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (location_id) REFERENCES locations(id)
    );
  `);
}

/** returns userID if successful, else null */
export async function makeUser(username: string, password: string): Promise<number | null> {
  const salt = generateSalt();
  const passwordHash = await hashPassword(password, salt);

  const stmt = db.prepare(`
    INSERT INTO users (username, password_hash, salt)
    VALUES (?, ?, ?)
  `);

  try {
    const result = stmt.run(username, passwordHash, salt);
    return result.lastInsertRowid as number;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
}

export async function getUsername(userID: number): Promise<string | null> {
  const stmt = db.prepare("SELECT username FROM users WHERE id = ?");
  const result = stmt.get(userID) as { username: string } | undefined;
  return result ? result.username : null;
}

/** returns userID if successful, else null */
export async function tryLogin(username: string, password: string): Promise<number | null> {
  const stmt = db.prepare(
    "SELECT id, password_hash, salt FROM users WHERE username = ?",
  );
  const user = stmt.get(username) as
    | { id: number; password_hash: string; salt: string }
    | undefined;

  if (!user) return null;

  const attemptedHash = await hashPassword(password, user.salt);
  return attemptedHash === user.password_hash ? user.id : null;
}

export async function makeLocation(userID: number, name: string): Promise<number | null> {
  const stmt = db.prepare(`
    INSERT INTO locations (user_id, name)
    VALUES (?, ?)
  `);

  try {
    const result = stmt.run(userID, name);
    return result.lastInsertRowid as number;
  } catch (error) {
    console.error("Error creating location:", error);
    return null;
  }
}

export async function editLocation(
  userID: number,
  locationID: number,
  name: string,
): Promise<boolean> {
  const stmt = db.prepare(`
    UPDATE locations
    SET name = ?
    WHERE id = ? AND user_id = ?
  `);

  try {
    const result = stmt.run(name, locationID, userID);
    return result.changes > 0;
  } catch (error) {
    console.error("Error editing location:", error);
    return false;
  }
}

export async function deleteLocation(userID: number, locationID: number): Promise<boolean> {
  const stmt = db.prepare(`
    DELETE FROM locations
    WHERE id = ? AND user_id = ?
  `);

  try {
    const result = stmt.run(locationID, userID);
    return result.changes > 0;
  } catch (error) {
    console.error("Error deleting location:", error);
    return false;
  }
}

export async function makeFood(
  userID: number,
  food: Food
): Promise<boolean> {
  const stmt = db.prepare(`
    INSERT INTO foods (user_id, location_id, name, category, quantity, wanted_quantity, unit_price)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  try {
    const result = stmt.run(
      userID,
      food.locationID,
      food.name,
      food.category,
      food.quantity,
      food.wantedQuantity,
      food.unitPrice,
    );
    return result.changes > 0;
  } catch (error) {
    console.error("Error creating food:", error);
    return false;
  }
}

export async function editFood(
  userID: number,
  food: Food,
): Promise<boolean> {
  const stmt = db.prepare(`
    UPDATE foods
    SET location_id = ?, name = ?, category = ?, quantity = ?, wanted_quantity = ?, unit_price = ?
    WHERE id = ? AND user_id = ?
  `);

  try {
    const result = stmt.run(
      food.locationID,
      food.name,
      food.category,
      food.quantity,
      food.wantedQuantity,
      food.unitPrice,
      food.id,
      userID,
    );
    return result.changes > 0;
  } catch (error) {
    console.error("Error editing food:", error);
    return false;
  }
}

export async function deleteFood(userID: number, foodID: number): Promise<boolean> {
  const stmt = db.prepare(`
    DELETE FROM foods
    WHERE id = ? AND user_id = ?
  `);

  try {
    const result = stmt.run(foodID, userID);
    return result.changes > 0;
  } catch (error) {
    console.error("Error deleting food:", error);
    return false;
  }
}

export async function getFoods(userID: number, locationID: number): Promise<Food[]> {
  const stmt = db.prepare(`
    SELECT id, name, category, quantity, wanted_quantity as wantedQuantity, location_id as locationID, unit_price as unitPrice
    FROM foods
    WHERE user_id = ? AND location_id = ?
  `);

  try {
    const foods = stmt.all(userID, locationID) as Food[];
    return foods;
  } catch (error) {
    console.error("Error fetching foods:", error);
    return [];
  }
}

export async function getFood(userID: number, locationID: number, foodID: number): Promise<Food | null> {
  const stmt = db.prepare(`
    SELECT id, name, category, quantity, wanted_quantity as wantedQuantity, location_id as locationID, unit_price as unitPrice
    FROM foods
    WHERE user_id = ? AND location_id = ? AND id = ?
  `);

  try {
    const food = stmt.get(userID, locationID, foodID) as Food;
    return food;
  } catch (error) {
    console.error("Error fetching food:", error);
    return null
  }
}

export async function getLocations(userID: number): Promise<Location[]> {
  const stmt = db.prepare(`
    SELECT id, name
    FROM locations
    WHERE user_id = ?
  `);

  try {
    const locations = stmt.all(userID) as { id: number; name: string }[];
    return locations.map((location) => ({
      id: location.id,
      name: location.name
    } as Location));
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
}

export async function getLocation(userID: number, locationID: number): Promise<Location | null> {
  const stmt = db.prepare(`
    SELECT id, name
    FROM locations
    WHERE user_id = ? AND id = ?
  `);

  try {
    const location = stmt.get(userID, locationID) as { id: number; name: string } | undefined;

    if (location) {
      return {
        id: location.id,
        name: location.name
      } as Location;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
}
