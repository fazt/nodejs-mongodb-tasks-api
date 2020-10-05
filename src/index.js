import app from "./app";
import "./database";

app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${app.get("port")}`);
});
