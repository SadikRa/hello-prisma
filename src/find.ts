import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  const getAllFromDB = await prisma.post.findMany();

  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  //find unique and find first or throw
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 21,
    },
    select: {
      title: true,
      content: true,
      author: true
    }
  });

  console.log({ findUnique });
};

main();
