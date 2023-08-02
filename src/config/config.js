import dotenv from "dotenv";

dotenv.config();

export default {
    PORT: process.env.port || 3000,
    MONGO_URL: process.env.MONGO,
    ADMIN_USER: process.env.ADMIN_USER,
    ADMIN_PASS: process.env.ADMIN_PASS,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET : process.env.GITHUB_CLIENT_SECRET,
    SESSION_SECRET: process.env.SESSION_SECRET,
}

const environment = "DEVELOPMENT"
dotenv.config({
    path:environment==="DEVELOPMENT"?'./env.developement' : './env.production'
});