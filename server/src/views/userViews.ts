import { users } from '@prisma/client';

export default {
  render(user: users) {
    return {
      name: user.name,
      phone: user.phone_number,
      email: user.email,
    };
  },

  renderMany(users: users[]) {
    return users.map(user => this.render(user));
  }
}