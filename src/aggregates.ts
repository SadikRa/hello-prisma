import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const aggregates = async () => {
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  console.log(avgAge);
};

aggregates();
