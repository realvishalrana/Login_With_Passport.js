const express = require("express");
const cors = require("cors");
const passport = require("passport");
const app = express();
const cookieSessions = require("cookie-session");

app.use(
  cookieSessions({ name: "session", keys: ["vi"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    method: "GET,POST,PUT,DELETE",
    credential: true,
  })
);

app.listen("5000", () => {
  console.log("server is running");
});
