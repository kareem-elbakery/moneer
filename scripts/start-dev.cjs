const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const appRoot = path.resolve(__dirname, "..");
const logPath = path.join(appRoot, "vite-dev.log");
const log = fs.openSync(logPath, "a");
const command = process.execPath;
const args = [
  path.join(appRoot, "node_modules", "vite", "bin", "vite.js"),
  "--host",
  "127.0.0.1",
  "--port",
  "5173",
];

const child = spawn(command, args, {
  cwd: appRoot,
  detached: true,
  stdio: ["ignore", log, log],
  windowsHide: true,
});

child.unref();
console.log(child.pid);
