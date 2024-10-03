import express from 'express';
import { engine } from 'express-handlebars';
import Database from 'better-sqlite3';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', engine({defaultLayout: 'main', extname: '.handlebars'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const db = new Database('../db.sqlite', { verbose: console.log });

app.get('/', function (req, res, next) {
  res.render('home', { test: 15 });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

process.on('SIGINT', () => {
  console.log('Shutting down gracefully...');
  db.close();
  process.exit(0);
});
