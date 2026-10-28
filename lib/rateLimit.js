const buckets = new Map();

// Returns true when "key" has used up its allowance in the time window
export function tooMany(key, max, windowMs) {
  const now = Date.now();
  const rec = buckets.get(key);

  if (!rec || now - rec.first > windowMs) {
    buckets.set(key, { count: 1, first: now });
    return false;
  }

  rec.count += 1;
  return rec.count > max;
}