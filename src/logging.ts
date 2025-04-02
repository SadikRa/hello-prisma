import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

const main = async() => {
    const getAllFromDB = await prisma.post.findMany()
    console.log(getAllFromDB);
}

main()