import {prisma} from "../generated/prisma-client";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  };

const verifyUser = async (jwt_payload, done) => {
    try {
      const user = await prisma.user({ id: jwt_payload.id });
      if (user !== null) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
};

export const authenticateJWT = (req, res, next) =>
  passport.authenticate("jwt", { sessions: false }, (error, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);



passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize(); 