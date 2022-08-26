import { Prisma } from '@prisma/client';

export interface GetUsers {
  skip?: number;
  take?: number;
  cursor?: Prisma.UserWhereUniqueInput;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithRelationInput;
}

export interface UpdateUser {
  where: Prisma.UserWhereUniqueInput;
  data: Prisma.UserUpdateInput;
}
