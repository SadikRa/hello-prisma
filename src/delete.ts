import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const deleteData = async () => {
  //   const deleteOne = await prisma.post.delete({
  //     where: {
  //       id: 6,
  //     },
  //   });
  //   console.log(deleteOne);

  const deleteMany = await prisma.post.deleteMany({
    where: {
      published: false,
    },
  });
  console.log(deleteMany);
};

deleteData();
