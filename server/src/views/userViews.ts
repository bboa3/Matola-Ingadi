import { Users } from '@prisma/client';
import { createAccessToken } from './auth/auth';

export default {
  render(user: Users) {
    return {
      accessToken: createAccessToken(user),
      name: user.name,
      phone: user.phone,
      email: user.email,
    };
  },

  renderMany(users: Users[]) {
    return users.map(user => this.render(user));
  }
}