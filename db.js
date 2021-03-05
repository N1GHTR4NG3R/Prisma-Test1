import Prisma from "@prisma/client";
const { PrismaClient } = Prisma;
const db = new PrismaClient();

if (db) {
  console.log("Connected to Database!");
}

let user = {
  user: "Testing123",
};

const accLogin = await db.accounts.findFirst({
  where: { userName: user.username },
  select: {
    ID: true,
    userName: true,
    password: true,
    email: true,
    characters: true,
    characterLimit: true,
    permissions: true,
    IPs: true,
    HWID: true,
  },
});

console.log(accLogin);

await db.$disconnect();
