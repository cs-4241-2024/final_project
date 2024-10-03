//import http from 'http';
import express from 'express';
const port = 3000;
const app = express()

app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});