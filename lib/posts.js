import { images } from "@/lib/images";

// Content format (the admin form will produce the same format later):
// - paragraphs are separated by a blank line
// - a line starting with "## " is a sub-heading
// - a line like ![alt text](https://image-url) is an inline image
export const posts = [
  {
    slug: "how-to-plan-a-wedding-menu",
    title: "How to Plan a Wedding Menu Your Guests Will Remember",
    excerpt:
      "A simple step-by-step guide to choosing starters, mains and desserts for a Delhi wedding without the stress.",
    category: "Wedding Tips",
    date: "2026-10-12",
    readTime: "4 min read",
    cover: images.wedding,
    content: `A wedding menu is more than a list of dishes. It sets the mood for the whole celebration, and guests often remember the food long after the music has stopped.

## Start with your guests, not the dishes

Before you pick anything, think about who is coming. A mix of elders, children and out-of-town guests means you need a spread with familiar favourites as well as a few special items. Note any dietary needs early, such as vegetarian, Jain or no-onion-no-garlic requests.

## Build the menu in courses

Plan it in the order guests will eat it: welcome drinks, starters, main course, breads and rice, then desserts. Choose a few dishes you are sure about in each course rather than too many options. A focused menu is easier to serve well, especially for a large crowd.

## Add one or two live counters

A live chaat or tandoor counter gives guests something to gather around and keeps lines moving. It also adds freshness that a buffet alone cannot match.

## Talk to your caterer early

Share your date, venue, guest count and budget as soon as you can. A good caterer will suggest a menu that fits your venue's kitchen space and your timeline, and will tell you honestly what works and what does not.`,
  },
  {
    slug: "corporate-catering-tips",
    title: "5 Tips for Stress-Free Corporate Catering",
    excerpt:
      "From meeting lunches to conference buffets, here is how to keep office events smooth, on time and tasty.",
    category: "Corporate Events",
    date: "2026-09-28",
    readTime: "3 min read",
    cover: images.corporate,
    content: `Good food keeps people focused and happy at work events. These five habits make corporate catering easier for everyone involved.

## 1. Confirm numbers a day before

Headcounts change. Ask for a final count the day before so the food is neither short nor wasted.

## 2. Offer a mix of dietary options

Always include vegetarian choices, and ask about allergies or restrictions in the invitation. It saves awkward moments on the day.

## 3. Choose food that is easy to eat

For meetings, pick items that can be eaten with one hand or a fork, without a mess. Boxed meals and finger food work well when people are busy.

## 4. Plan timing carefully

Agree on a delivery and setup time that leaves a buffer before the event starts. Hot food should arrive hot, and cold items should stay cold.

## 5. Keep the setup clean and simple

Clearly labelled dishes, enough serving spoons and a tidy counter make a big difference. Ask your caterer to handle cleanup too, so your team can get back to work.`,
  },
  {
    slug: "birthday-party-food-ideas",
    title: "Birthday Party Food Ideas for Kids and Adults",
    excerpt:
      "Crowd-pleasing snacks, mains and desserts that keep every age group happy at a birthday party.",
    category: "Party Ideas",
    date: "2026-09-10",
    readTime: "3 min read",
    cover: images.birthday,
    content: `A birthday party works best when there is something for everyone, from the youngest guest to the grandparents.

## Snacks that start the party

Finger foods like paneer tikka, cutlets, mini samosas and sandwiches are easy to pass around and keep hungry guests happy while they wait for the cake.

## Mains that suit all ages

Offer one familiar option, such as pasta or fried rice, next to a classic North Indian meal of dal, paneer, rice and fresh bread. This way kids and adults both find something they like.

## Fun counters

A chaat counter, a mocktail station or a small dessert table adds a festive feel without much extra effort.

## Do not forget the sweets

Alongside the cake, a few traditional sweets or ice cream make the end of the meal feel complete.

Tell your caterer the age range and guest count, and they can scale the menu to match.`,
  },
];

export async function getAllPosts() {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}