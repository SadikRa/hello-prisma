import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: { contains: "title" },
        },
        {
          published: true,
        },
      ],
    },
  });

  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: { contains: "title" },
        },
        {
          published: true,
        },
      ],
    },
  });

  // console.log(orFiltering);

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
      ],
    },
  });

  const startWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "u",
        // endsWith: "ph.com"
      },
    },
  });

  ///find using by array

  const userNameArray = ["user1", "user2", "user3"];
  const userNamesByArray = await prisma.user.findMany({
    where: {
      userName: {
        in: userNameArray,
      },
    },
  });

  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      Post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(inDepthData, { depth: Infinity });
};

filtering();
