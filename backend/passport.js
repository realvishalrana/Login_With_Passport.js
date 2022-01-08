const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "149080409089-vrpeks2t9gu3n0tqnpt5lfadefsf5nqg.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "b70951dc9933f9402c5d";
GITHUB_CLIENT_SECRET = "e9b05dd454b028be6bc721d710b43b779be97815";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
