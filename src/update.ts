import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 6,
  //     },
  //     data: {
  //       title: "title 4",
  //       content: "Content 4",
  //       author: "Author 4",
  //     },
  //   });
  //   console.log(singleUpdate);

  const updateMany = await prisma.post.updateMany({
    where: {
      title: "title 3",
    },
    data: {
      published: true,
    },
  });

  console.log(updateMany);
};

updates();
