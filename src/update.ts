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

  // const updateMany = await prisma.post.updateMany({
  //   where: {
  //     title: "title 3",
  //   },
  //   data: {
  //     published: true,
  //   },
  // });

  // console.log(updateMany);

  const upsertData = await prisma.post.upsert({
    where: {
      id: 1,
    },
    update: {
      title: "updates title",
    },
    create: {
      author: "update author",
      title: "title 1",
      content: " content 1",
    },
  });

  console.log(upsertData);
};

updates();
