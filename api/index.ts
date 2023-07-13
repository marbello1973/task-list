import "dotenv/config";
import conn from "./src/db";
import app from "./src/app";
const { PORT, DB_HOST } = process.env;

conn
  .sync({ force: true })
  .then(() => {
    console.log("Conected data base");
    app.listen(PORT, () => {
      console.log(`Server http://${DB_HOST}:${PORT}`);
    });
  })
  .catch(console.error);
