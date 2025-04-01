import { PrismaClient, UserRole } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // create user

  // const createUser = await prisma.user.create({
  //   data: {
  //     userName: "user1",
  //     email: "user1@ph.com",
  //     role: UserRole.user

  //   }
  // })

  // console.log(createUser);

  /// create profile

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is bio",
  //     userId: 1
  //   }
  // })
  // console.log(createProfile);

  // create category

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "soft ware engineering"
  //   }
  // })
  // console.log(createCategory);

  // create post

  const createPost = await prisma.post.create({
    data: {
      title: "this is title",
      content: "this is content of the post",
      authorId: 1,
      postCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 6,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};

main();
