import mongoose from "mongoose";
import { mongodbURL } from "./config.js";

(async () => {
  try {
    const db = await mongoose.connect(mongodbURL);
    console.log("Database Connected", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();
