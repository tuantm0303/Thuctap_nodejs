import passport from "passport";

/**
 * Description: JWT Auth middleware
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

// Submit form đăng nhập thì gọi chứng thực bằng authenticate
const jwtAuth = (req, res, next) => {
  console.log("authenticate");
  passport.authenticate("jwt", { session: false }, (error, user, info) => {
    if (error) {
      console.log(error);
      return;
    }
    return next();
  })(req, res, next);
};

export default jwtAuth;
