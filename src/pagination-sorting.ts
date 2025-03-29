import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  //   // offset pagination
  //   const offsetData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //   });
  // Cursor pagination
  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 22,
    },
  });

  //   console.log("offset pagination data", cursorData);

  const sortedData = await prisma.post.findMany({
    orderBy: {
      title: "asc",
    },
  });

  console.log(sortedData);
};

paginationSorting();
