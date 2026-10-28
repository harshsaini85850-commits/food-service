import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error(
    "MONGODB_URI missing. Run: node --env-file=.env.local scripts/seed-posts.mjs"
  );
  process.exit(1);
}

// Optional: paste the same Pexels wedding photo URL you used before
const COVER = "";

const post = {
  slug: "how-to-plan-a-wedding-menu",
  title: "How to Plan a Wedding Menu Your Guests Will Remember",
  excerpt:
    "A simple step-by-step guide to choosing starters, mains and desserts for a Delhi wedding without the stress.",
  category: "Wedding Tips",
  cover: COVER,
  content: `A wedding menu is more than a list of dishes. It sets the mood for the whole celebration, and guests often remember the food long after the music has stopped.

## Start with your guests, not the dishes

Before you pick anything, think about who is coming. A mix of elders, children and out-of-town guests means you need a spread with familiar favourites as well as a few special items. Note any dietary needs early, such as vegetarian, Jain or no-onion-no-garlic requests.

## Build the menu in courses

Plan it in the order guests will eat it: welcome drinks, starters, main course, breads and rice, then desserts. Choose a few dishes you are sure about in each course rather than too many options. A focused menu is easier to serve well, especially for a large crowd.

## Add one or two live counters

A live chaat or tandoor counter gives guests something to gather around and keeps lines moving. It also adds freshness that a buffet alone cannot match.

## Talk to your caterer early

Share your date, venue, guest count and budget as soon as you can. A good caterer will suggest a menu that fits your venue's kitchen space and your timeline, and will tell you honestly what works and what does not.`,
};

await mongoose.connect(uri);

const now = new Date();
const result = await mongoose.connection.collection("posts").updateOne(
  { slug: post.slug },
  {
    $setOnInsert: {
      ...post,
      status: "published",
      publishedAt: now,
      createdAt: now,
      updatedAt: now,
    },
  },
  { upsert: true }
);

console.log(
  result.upsertedCount
    ? "✅ Starter post added."
    : "ℹ️ Starter post already exists, nothing changed."
);

await mongoose.disconnect();