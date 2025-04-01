import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      Post: true,
    },
  });

  console.log(result);
};

relationalQueries();
