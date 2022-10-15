import express from "express";

const app = express();
const port= 3010;

app.get("/",(req,res)=>{
    res.send("Index Sayfasi22");
});

app.listen(port, () => {
    console.log('Application running on port:  ');
    console.log(port);
})