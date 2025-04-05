import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const aggregates = async () => {
  // find avg age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  // find sum of age
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  // find count
  const countAge = await prisma.post.aggregate({
    _count: {
      title: true,
    },
    where: {
      published: true,
    },
  });

  // console.log(countAge);

  const countData = await prisma.user.count();

  //find max age
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  //find min age
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  console.log(minAge);
};

aggregates();
