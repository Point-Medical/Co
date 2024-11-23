import app from "./app";
import config from "./config";
import http from "http";

let server: any;
try {
  server = http.createServer(app);
  server.listen(config.port, () => {
    console.log(`Nodemailer App listening on port=> ${config.port}`);
  });

} catch (err) {
  console.error(err);
}

process.on("unhandledRejection", (error) => {
  // eslint-disable-next-line no-console
  console.log(
    "Unhandled Rejection is detected ,we are closing our server"
  );
  if (server) {
    server.close(() => {
      console.error(error);
      process.exit(1);
    });
  } else {
    console.log(error);
    process.exit(1);
  }
});