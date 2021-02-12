import { super_users } from '@prisma/client';
import { createAccessToken } from './auth/auth';

export default {
  render(user: super_users) {
    return {
      accessToken: createAccessToken(user),
      name: user.name
    };
  }
}