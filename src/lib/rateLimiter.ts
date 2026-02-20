import { redis } from "./redis";

interface Bucket {
  tokens: number;
  lastRefill: number;
}

const CAPACITY = 60;
const REFILL_RATE = 1; // tokens per second

export async function tokenBucket(identifier: string) {
  const key = `bucket:${identifier}`;

  const now = Date.now();

  let bucket = await redis.get<Bucket>(key);

  if (!bucket) {
    bucket = {
      tokens: CAPACITY,
      lastRefill: now,
    };
  }

  const elapsed = (now - bucket.lastRefill) / 1000;

  const refill = Math.floor(elapsed * REFILL_RATE);

  bucket.tokens = Math.min(
    CAPACITY,
    bucket.tokens + refill
  );

  bucket.lastRefill = now;

  if (bucket.tokens <= 0) {
    await redis.set(key, bucket);
    return false;
  }

  bucket.tokens -= 1;

  await redis.set(key, bucket);

  return true;
}
