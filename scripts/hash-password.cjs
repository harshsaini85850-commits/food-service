const bcrypt = require("bcryptjs");

const password = process.argv[2];
if (!password) {
  console.log("Usage: node scripts/hash-password.cjs 'YourStrongPassword'");
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 10);

// "\$" stops Next.js from treating $ as a variable inside .env files
console.log("\nPaste this line into .env.local:\n");
console.log("ADMIN_PASSWORD_HASH=" + hash.replace(/\$/g, "\\$"));