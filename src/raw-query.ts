import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const rawQuery = async () => {
  //   const posts = await prisma.$queryRaw`SELECT * FROM "posts"`;
  //   console.log(posts);

  await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`;
};

rawQuery();
