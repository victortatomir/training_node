import passport from "passport";
import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import { accesTokenSecret } from "./accesTokenForServer";
import User from "../models/user";

const usePassport = passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: accesTokenSecret,
    },
    async (payload, done) => {
      try {
        const user = await User.find({
          username: payload.username,
          role: payload.role,
        });

        if (!user) {
          return done(null, false);
        }

        done(null, user);
      } catch (err) {
        done(err, false);
      }
    }
  )
);


export default usePassport;