import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title",
  //       content: " this is content",
  //       author: "this is author",
  //     },
  //   });

  //   console.log(result);

  //create many
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "title 1",
        content: " content 1",
        author: "i am muhammad sadik rahman",
      },
      {
        title: "title 2",
        content: " content 2",
        author: "i am muhammad sadik rahman",
      },
      {
        title: "title 3",
        content: " content 3",
        author: "i am muhammad sadik rahman",
      },
    ],
  });
  console.log(createMany);
};

main();
