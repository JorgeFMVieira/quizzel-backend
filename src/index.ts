import express from 'express';

const app = express();

app.get("/", (req: any) => {
    console.log("Hello World");
});

app.listen(3001, () => {
    console.log("server listening on port");
});

