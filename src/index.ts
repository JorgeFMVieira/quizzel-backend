import express from 'express';

const app = express();

app.get("/", (req) => {
    console.log("Hello World");
});

app.listen(3001, () => {
    console.log("started");
});

