import * as dotenv from "dotenv";
dotenv.config();


const accesTokenSecret = process.env.SECRET_TOKEN
const refreshTokenSecret =process.env.REFRESH_TOKEN;

export { accesTokenSecret };
export { refreshTokenSecret };
