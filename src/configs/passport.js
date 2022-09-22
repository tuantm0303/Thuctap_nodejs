import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import secret from "./secrets";
import { User } from "../app/models";

// config Passport
passport.serializeUser((user, done) => {
  return done(null, { id: user.id });
});

passport.deserializeUser(async (user, done) => {
  try {
    const getUserResult = await User.findOne(user.id);
    if (!getUserResult.status) {
      return done(null, false);
    }
    const userResult = getUserResult.resultObj;
    if (userResult) {
      userResult.password = undefined;
    }
    return done(null, userResult);
  } catch (error) {
    return done(error);
  }
});

// Passport JWT
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("Authorization"),
      secretOrKey: secret.JWT_SECRENT,
    },
    async (payload, done) => {
      try {
        const user = await User.findOne(payload.id);
        if (!user) return done(null, false);
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
