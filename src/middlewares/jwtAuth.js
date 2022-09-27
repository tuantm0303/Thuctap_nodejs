import passport from "passport";
import createHttpError from "http-errors";

/**
 * Description: JWT Auth middleware
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

// Submit form đăng nhập thì gọi chứng thực bằng authenticate
const jwtAuth = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (error, user, info) => {
    if (error) {
      return res.json(error);
    }
    if (!user) {
      return next(createHttpError(403, "Forbidden"));
    }
    if (info) {
      return res.json(info);
    }
    return next();
  })(req, res, next);
};

export default jwtAuth;
