import { images } from "@/lib/images";

/* ---------- Homepage: services grid ---------- */
export const services = [
  {
    id: "wedding",
    title: "Wedding Catering",
    text: "Make your big day memorable with beautifully presented dishes, festive menus and catering tailored to your wedding celebration.",
    image: images.wedding,
  },
  {
    id: "corporate",
    title: "Corporate Catering",
    text: "Professional food service for business meetings, conferences, office lunches, client events and corporate gatherings.",
    image: images.corporate,
  },
  {
    id: "birthday",
    title: "Birthday Party Catering",
    text: "Celebrate birthdays with delicious menus, crowd-pleasing favourites, snacks, desserts and food stations.",
    image: images.birthday,
  },
  {
    id: "private",
    title: "Private Parties & Family Gatherings",
    text: "Bring family and friends together with customised catering for anniversaries, kitty parties, reunions and celebrations.",
    image: images.private,
  },
  {
    id: "live",
    title: "Live Food Counters",
    text: "Add excitement to your event with live food stations and freshly prepared favourites, subject to menu availability.",
    image: images.live,
  },
  {
    id: "custom",
    title: "Custom Catering Packages",
    text: "Choose a menu suited to your event, guest count, food preferences and budget.",
    image: images.custom,
  },
];

/* ---------- Homepage: signature menu ---------- */
export const menuCategories = [
  { icon: "🍤", label: "Starters & Appetisers" },
  { icon: "🥗", label: "Main Course" },
  { icon: "🍚", label: "Rice & Biryani" },
  { icon: "🫓", label: "Breads" },
  { icon: "🍨", label: "Desserts & Sweets" },
  { icon: "🍲", label: "Soups" },
];

export const menuHighlights = [
  {
    no: "01",
    title: "Starters & Appetisers",
    text: "Crisp, flavourful bites to begin the celebration.",
    image: images.starters,
  },
  {
    no: "02",
    title: "Punjabi Specialities",
    text: "Rich, traditional North Indian favourites.",
    image: images.punjabi,
  },
  {
    no: "03",
    title: "Rice & Biryani",
    text: "Fragrant rice dishes, served in generous portions.",
    image: images.biryani,
  },
  {
    no: "04",
    title: "Desserts & Sweets",
    text: "A sweet finish for every guest.",
    image: images.desserts,
  },
];

/* ---------- Homepage: why us + how it works ---------- */
export const whyUs = [
  {
    icon: "📋",
    title: "Thoughtfully Planned Menus",
    text: "Catering options tailored to the occasion and guest preferences.",
  },
  {
    icon: "👨‍🍳",
    title: "Quality-Focused Preparation",
    text: "An emphasis on ingredients, flavour and presentation.",
  },
  {
    icon: "🤝",
    title: "Professional Event Coordination",
    text: "Organised service planning to help your event run smoothly.",
  },
  {
    icon: "🎛️",
    title: "Flexible Catering Options",
    text: "Menu and package choices based on event requirements.",
  },
];

export const steps = [
  {
    no: "01",
    title: "Tell Us About Your Event",
    text: "Share the occasion, event date, location and estimated number of guests.",
  },
  {
    no: "02",
    title: "Choose Your Menu",
    text: "Discuss food preferences, menu options and any special requirements.",
  },
  {
    no: "03",
    title: "Finalise Your Catering Plan",
    text: "Review the proposed menu, service details and pricing before confirming.",
  },
  {
    no: "04",
    title: "Celebrate with Confidence",
    text: "Let the agreed catering team and arrangements support your special occasion.",
  },
];

/* ---------- Our Services page ---------- */
// "image" here is a KEY from lib/images.js, not a URL
export const serviceDetails = [
  {
    id: "wedding",
    title: "Wedding Catering",
    image: "wedding",
    text: "From the engagement to the reception, we plan menus that suit your rituals, guests and venue, and serve them with care.",
    points: [
      "Multi-cuisine menus with strong Punjabi and North Indian options",
      "Welcome drinks, starters, main course and dessert counters",
      "Veg and non-veg arrangements, kept separate",
      "Trained serving staff for large guest lists",
    ],
  },
  {
    id: "corporate",
    title: "Corporate Catering",
    image: "corporate",
    text: "Reliable, on-time food service for offices, meetings, conferences and client events.",
    points: [
      "Working lunches, snack boxes and tea-coffee service",
      "Buffet or packed-meal options",
      "Punctual delivery and clean setup",
      "Menus that suit mixed dietary needs",
    ],
  },
  {
    id: "birthday",
    title: "Birthday Party Catering",
    image: "birthday",
    text: "Fun, crowd-pleasing food for kids' parties, milestone birthdays and surprise celebrations.",
    points: [
      "Snacks, mains and desserts for all ages",
      "Chaat, pasta and fast-food style counters",
      "Cake-time sweets and beverages",
      "Menus scaled to your guest count",
    ],
  },
  {
    id: "private",
    title: "Private Parties & Family Gatherings",
    image: "private",
    text: "Relaxed, homely catering for kitty parties, reunions, poojas and get-togethers at home or a hall.",
    points: [
      "Small and mid-size gatherings",
      "Satvik and pooja-friendly menus on request",
      "Home delivery and on-site service",
      "Simple, flexible pricing by plate",
    ],
  },
  {
    id: "live",
    title: "Live Food Counters",
    image: "live",
    text: "Fresh food made in front of your guests, which adds energy and flavour to any event.",
    points: [
      "Live tandoor, chaat and tikki stations",
      "Freshly made breads and snacks",
      "Dessert counters with hot jalebi and more",
      "Options depend on menu and event size",
    ],
  },
  {
    id: "custom",
    title: "Custom Catering Packages",
    image: "custom",
    text: "Tell us your budget, guest count and tastes, and we will build a package around them.",
    points: [
      "Menus designed from scratch",
      "Package options for different budgets",
      "Dietary and special-requirement planning",
      "Clear pricing before you confirm",
    ],
  },
  {
    id: "mehndi",
    title: "Mehndi Function Catering",
    image: "mehndi",
    text: "Light, colourful and festive food that keeps guests happy through a long mehndi evening.",
    points: [
      "Snacks, chaat and finger food",
      "Refreshing drinks and mocktails",
      "Easy self-serve counters",
      "Evening-friendly menus",
    ],
  },
  {
    id: "festival",
    title: "Festival Catering",
    image: "festival",
    text: "Seasonal menus for Diwali, Lohri, Holi and other festivals, for homes, offices and communities.",
    points: [
      "Traditional festive dishes and sweets",
      "Bulk orders for communities and offices",
      "Special-day menu planning",
      "Timely delivery",
    ],
  },
  {
    id: "anniversary",
    title: "Anniversary Catering",
    image: "anniversary",
    text: "Warm, elegant meals for couples, families and friends marking a special year.",
    points: [
      "Intimate and large celebration menus",
      "Plated or buffet service",
      "Dessert and cake-time arrangements",
      "Personalised menu planning",
    ],
  },
];

/* ---------- About page ---------- */
export const aboutStats = [
  { value: "25+", label: "Years of Experience" },
  { value: "9", label: "Catering Services" },
  { value: "2 hrs", label: "Quote Response Time" },
  { value: "Delhi NCR", label: "Service Area" },
];

export const values = [
  {
    icon: "🍛",
    title: "Authentic Flavours",
    text: "Rich Punjabi and North Indian cooking, prepared the way families have enjoyed it for generations.",
  },
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    text: "We focus on quality ingredients and careful preparation so every plate tastes the way it should.",
  },
  {
    icon: "🎨",
    title: "Beautiful Presentation",
    text: "Neat counters, clean setups and thoughtful plating that make your event look as good as it tastes.",
  },
  {
    icon: "💬",
    title: "Honest Communication",
    text: "Clear menus, clear pricing and quick replies, so there are no surprises on your big day.",
  },
];

/* ---------- Contact page FAQ ---------- */
export const faqs = [
  {
    q: "How early should I book my catering?",
    a: "As early as you can, especially for weddings and festival dates. Share your event date and we will confirm availability.",
  },
  {
    q: "Do you cater outside Delhi?",
    a: "We serve Delhi NCR. For events further away, send us the location and we will let you know if we can take it.",
  },
  {
    q: "Can I customise the menu?",
    a: "Yes. Tell us your guest count, food preferences and budget, and we will build a menu around them.",
  },
  {
    q: "Do you offer both veg and non-veg menus?",
    a: "Yes, and we can keep the two arrangements separate. Mention any dietary needs when you request a quote.",
  },
  {
    q: "How quickly will I get a quote?",
    a: "We aim to reply within 2 hours. For faster help, call or WhatsApp us directly.",
  },
];