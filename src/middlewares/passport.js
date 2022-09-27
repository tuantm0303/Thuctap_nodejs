import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import secret from "./secrets";
import { User } from "../app/models";

// Khi chứng thực thành công truyền giá trị cho cookie
passport.serializeUser((user, done) => {
  done(null, user.username);
});

// Lưu vào để lấy liên kết cho lần sau
passport.deserializeUser(async (email, done) => {
  const user = await User.findOne({ email });
  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
});

// Passport Local
passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user)
          return done(null, false, { message: "Không tồn tại email này!" });
        const checkPass = await user.isValidPassword(password);
        if (!checkPass) return done(null, false, { message: "Sai mật khẩu!" });
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

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

/**
 * 1. User login
 * 2. Passport.authenticate('local')
 * 3. Passport.use(new LocalStrategy ...)
 * 4. Passport.serializeUser()
 * 5. Ghi cookie vào trình duyệt
 * 6. Lấy user bằng Passport.deserializeUser()
 */
