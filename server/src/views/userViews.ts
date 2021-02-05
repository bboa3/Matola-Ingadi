import { Users } from '@prisma/client';

export default {
  render(user: Users) {
    return {
      name: user.name,
      phone: user.phone_number,
      email: user.email,
    };
  },

  renderMany(users: Users[]) {
    return users.map(user => this.render(user));
  }
}