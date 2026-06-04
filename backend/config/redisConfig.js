import { createClient } from "redis";


// yaha par aap redis ko locally aur server dono par run kar sakte ho 



let isDocker = process.env.DOCKER === "true";

let redisUrl = process.env.REDIS_URL || 
  (isDocker
    ? `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
    : "redis://127.0.0.1:6379");

let client = createClient({
  url: redisUrl,
});

client.on("error", (err) => {
  // console.error(" Redis Error:", err);
});

client.on("connect", () => {
  // console.log(" Redis connecting...");
});

client.on("ready", () => {
  // console.log(" Redis connected successfully");
});

let connectRedis = async () => {
  try {
    if (!client.isOpen) {
      await client.connect();
    }
  } catch (err) {
    // console.error(" Redis Connection Failed:", err);
  }
};

export { connectRedis };
export default client;