import client from "../config/redisConfig.js";

// Stale While Revalidate Cache
export let getCacheSWR = async (key, fetchFn, ttl = 60) => {
  let cached = await client.get(key);

  if (cached) {
    //  background update (user ko wait nahi karna padega)
    fetchFn()
      .then((data) => {
        client.setEx(key, ttl, JSON.stringify(data));
      })
      .catch((err) => {
        console.error("SWR background error:", err);
      });

    return JSON.parse(cached);
  }

  //  cache miss then  fresh API call
  let freshData = await fetchFn();

  await client.setEx(key, ttl, JSON.stringify(freshData));

  return freshData;
};

