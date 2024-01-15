import { faker } from "@faker-js/faker";

export type TUser = {
  userId: string;
  username: string;
  email: string;
  avatar: string;
};

export function createRandomUser(): TUser {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
}

export const USERS: TUser[] = faker.helpers.multiple(createRandomUser, {
  count: 50,
});
