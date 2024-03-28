import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app=express();
const port=3000;


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/search", (req, res) => {
    res.render("index.ejs");
});

app.post("/search", async (req, res) => {
    try {
      const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=New delhi&appid=be8e826c6a5436c312c9f5f85ccd455a");
      const result = response.data;
      console.log(result);
      res.render("index.ejs");
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: "No activities that match your criteria.",
      });
    }
  });

app.listen(port,()=>{
    console.log(`server running on port: ${port}`);
});