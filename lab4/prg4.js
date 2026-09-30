import { products } from "./data.js";
import express from 'express'


const app = express();
app.get("/", (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <a href="/api/products">Browse Products</a>
    `);
});

app.get("/api/products", (req, res) => {
    res.json(products);
});



app.use((req, res) => {
    res.status(404).send("Page Not Found");
});
app.listen(3333, () => {console.log("prg4 is running...")});