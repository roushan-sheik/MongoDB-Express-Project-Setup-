/* eslint-disable no-console */
import { app } from "./app";
import config from "./config";

config
  .connectDB()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`\n App is running on port: http://localhost:${config.port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection FAILED!", error.message);
  });
