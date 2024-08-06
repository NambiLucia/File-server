const express = require("express");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const app = express();

const PASSWORD = "admin123";
const PORT = 4000;

//middleware setup
app.use(morgan("dev")); //logs https request details
app.use(express.urlencoded({ extended: true })); 
app.use(
  session({
    secret: "admin123",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(express.static(path.join(__dirname, "public"))); // serve static files

//middleware to protect node
app.use("/node-course", (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Server</h1>");
});

//serve login and node static pages
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});
app.get("/node-course", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "node-course.html"));
});

//route handler for login
app.post("/login", (req, res) => {
  const { password } = req.body;
  if (password === PASSWORD) {
    //session variable to indicate user is logged in

    req.session.loggedIn = true;
    res.redirect(`/node-course`);
  } else {
    res.status(401).send("Wrong password. Please try again");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
