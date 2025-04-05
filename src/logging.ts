import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
    console.log("duration", e.duration);
    console.log("timestamp" ,e.timestamp);
    console.log("Query" ,e.query);
})

const main = async () => {
  const getAllFromDB = await prisma.post.findMany();
//   console.log(getAllFromDB);
};

main();
