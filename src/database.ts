import Database from "better-sqlite3";
import crypto from "crypto";

const db = new Database("../db.sqlite", { verbose: console.log });
makeUserTable();
makeFoodsTable();
makeLocationsTable();

export function close(): void {
  db.close();
}

function generateSalt(): string {
  return crypto.randomBytes(16).toString("hex");
}

function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
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
      name TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);
}

function makeFoodsTable(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS foods (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      name TEXT,
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

export function makeUser(username: string, password: string): number {
  const salt = generateSalt();
  const passwordHash = hashPassword(password, salt);

  const stmt = db.prepare(`
    INSERT INTO users (username, password_hash, salt)
    VALUES (?, ?, ?)
  `);

  const result = stmt.run(username, passwordHash, salt);
  return result.lastInsertRowid as number;
}

export function getUsername(userID: number): string | null {
  const stmt = db.prepare("SELECT username FROM users WHERE id = ?");
  const result = stmt.get(userID) as { username: string } | undefined;
  return result ? result.username : null;
}

export function tryLogin(username: string, password: string): number | null {
  const stmt = db.prepare(
    "SELECT id, password_hash, salt FROM users WHERE username = ?",
  );
  const user = stmt.get(username) as
    | { id: number; password_hash: string; salt: string }
    | undefined;

  if (!user) return null;

  const attemptedHash = hashPassword(password, user.salt);
  return attemptedHash === user.password_hash ? user.id : null;
}


export function makeLocation(userID: number, name: string): boolean {
  const stmt = db.prepare(`
    INSERT INTO locations (user_id, name)
    VALUES (?, ?)
  `);

  try {
    const result = stmt.run(userID, name);
    return result.changes > 0;
  } catch (error) {
    console.error("Error creating location:", error);
    return false;
  }
}

export function editLocation(userID: number, locationID: number, name: string): boolean {
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

export function deleteLocation(userID: number, locationID: number): boolean {
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

export function makeFood(
  userID: number,
  locationID: number,
  name: string,
  category: string,
  quantity: number,
  wantedQuantity: number
): boolean {
  const stmt = db.prepare(`
    INSERT INTO foods (user_id, location_id, name, category, quantity, wanted_quantity)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  try {
    const result = stmt.run(userID, locationID, name, category, quantity, wantedQuantity);
    return result.changes > 0;
  } catch (error) {
    console.error("Error creating food:", error);
    return false;
  }
}

export function editFood(
  userID: number,
  foodID: number,
  locationID: number,
  name: string,
  category: string,
  quantity: number,
  wantedQuantity: number
): boolean {
  const stmt = db.prepare(`
    UPDATE foods
    SET location_id = ?, name = ?, category = ?, quantity = ?, wanted_quantity = ?
    WHERE id = ? AND user_id = ?
  `);

  try {
    const result = stmt.run(locationID, name, category, quantity, wantedQuantity, foodID, userID);
    return result.changes > 0;
  } catch (error) {
    console.error("Error editing food:", error);
    return false;
  }
}

export function deleteFood(userID: number, foodID: number): boolean {
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
