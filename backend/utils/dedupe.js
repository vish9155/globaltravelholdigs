// yeah function karega kya ki 1000 user agar ek hi route ka data ke liye same api hit kar raha hai to yeah 1 baar api ko call karega aur cahe data dega

let pending = new Map();

export let dedupe = async (key, fn) => {
  if (pending.has(key)) {
    return pending.get(key);
  }
  let promise = fn();
  
  pending.set(key, promise);

  let result = await promise;
  pending.delete(key);

  return result;
};