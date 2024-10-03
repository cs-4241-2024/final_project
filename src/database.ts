import Database from 'better-sqlite3';

const db = new Database('../db.sqlite', { verbose: console.log });



export function close() {
  db.close();
}
