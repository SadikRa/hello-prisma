import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      userName: "sadikRahmanTwin",
      email: "sadikrahmanTwin@gmail.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 3,
    },
    data: {
      age: 30,
    },
  });

  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log("created user:", userData);
  console.log("updated user:", updateData);
};

batchTransaction();
