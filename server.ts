import next from "next";
import express  from "express";
import {launchEditorMiddleware} from "react-dev-inspector/plugins/webpack";

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(launchEditorMiddleware);

  server.all("*", (req, res) => {
    return handle(req, res as any);
  });

  server.listen(port, (...err) => {
    if (err.length) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
