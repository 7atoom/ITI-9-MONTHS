import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,

  NODE_ENV: process.env.NODE_ENV || "development",

  MONGODB_URI:
    process.env.MONGODB_URI || "mongodb://localhost:27017/express-crud-db",

  ACCESS_TOKEN: {
    secret: (process.env.ACESS_TOKEN_SECRET || "default-access-secret-change-in-production") as string,
    lifetime: (process.env.ACESS_TOKEN_LIFETIME || "15m") as string,
  },

  REFRESH_TOKEN: {
    secret: (process.env.REFRESH_TOKEN_SECRET || "default-refresh-secret-change-in-production") as string,
    lifetime: (process.env.REFRESH_TOKEN_LIFETIME || "7d") as string,
  },
};
