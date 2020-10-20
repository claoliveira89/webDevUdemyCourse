const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    let campgrounds = [
        { name: "Salmon Creek", image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&h=350" },
        { name: "Granite Hill", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350" },
        { name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350" }
    ]
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.listen(8080, function () {
    console.log("The YelpCamp Server Has Started!");
});