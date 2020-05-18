const log = require("why-is-node-running");
const Catbox = require("@hapi/catbox");
const CatboxMemory = require("@hapi/catbox-memory");

cacheClient = new Catbox.Client(CatboxMemory);

const policy = new Catbox.Policy(
  {
    expiresIn: 5000,
    staleIn: 100,
    staleTimeout: 5,
    generateTimeout: 100,
    generateFunc: () => "5",
  },
  cacheClient,
  "segment"
);

runPolicy();
async function runPolicy() {
  await cacheClient.start();

  await policy.set("id", 5, 500);

  await new Promise((resolve) => setTimeout(resolve, 50));
  log();

  await cacheClient.stop();
  console.log("--------- After stoped cache ----------");
  log();

  await new Promise((resolve) => setTimeout(resolve, 50));
  console.log("--------- After another wait ----------");
  log();
}
