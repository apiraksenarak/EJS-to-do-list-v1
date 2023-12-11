//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // to use function in date.js

const app = express();

// can declare as *const* because we push data into the arrays => not change the array = another data;
const items = ["Eat something", "Sleep for a while"];
const workItems = []; 

app.set("view engine", "ejs"); // look into the views folder

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // to access the local file in our PC

app.get("/", function (req, res) {

    const day = date.getDate();
    //send var. to 'list.ejs' **must in form views folder name**
    res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", function (req, res) {
    const item = req.body.newItem;
    res.redirect("/work");
});

app.get("/about", function(req, res) {
    res.render("about");
})

app.listen(3001, function () {
    console.log("Server started on port 3001");
});
