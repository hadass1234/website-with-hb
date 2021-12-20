// SETUP - DON'T DELETE ///////////
const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("./public"));
////////////////////////////////////

app.get("/", (req, res) => {
  res.render("index", {title: "Hadass Sternberg"});
});

app.get("/info", (req, res) => {
  res.render("info", {title: "Info - Hadass Sternberg"});
});

app.get("/projects/futura", (req, res) => {
  res.render("project-futura"), {title: "Futura - Hadass Sternberg"};
});

app.get("/projects/greek-theater", (req, res) => {
  res.render("project-greek-theater", {title: "Greek Theater - Hadass Sternberg"});
});

app.get("/projects/infographics", (req, res) => {
  res.render("project-infographics", {title: "Infographics - Hadass Sternberg"});
});

app.get("/projects/judaikit", (req, res) => {
  res.render("project-judaikit", {title: "Judaikit - Hadass Sternberg"});
});

app.get("/projects/jumper92", (req, res) => {
  res.render("project-jumper92", {title: "Jumper 92 - Hadass Sternberg"});
});

app.get("/projects/luminaire", (req, res) => {
  res.render("project-luminaire", {title: "Luminaire - Hadass Sternberg"});
});

app.get("/projects/metoo", (req, res) => {
  res.render("project-metoo", {title: "Metoo - Hadass Sternberg"});
});

app.get("/projects/myposterboom", (req, res) => {
  res.render("project-myposterboom" , {title: "Myposterboom - Hadass Sternberg"});
});

app.get("/projects/softcrab", (req, res) => {
  res.render("project-softcrab", {title: "Softcrab - Hadass Sternberg"});
});

app.get("/projects/stephenwilks", (req, res) => {
  res.render("project-stephenwilks", {title: "Stephen Wilks - Hadass Sternberg"});
});

app.get("/projects/xyz", (req, res) => {
  res.render("project-xyz", {title: "XYZ - Hadass Sternberg"});
});

app.get("*", (req, res) => {
  res.redirect("/");
});

// SETUP - DON'T DELETE ///////////
if (require.main == module) {
  app.listen(process.env.PORT || 8080, () =>
    console.log("server running on 8080")
  );
}
////////////////////////////////////
