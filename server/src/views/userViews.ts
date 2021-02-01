import { Users } from '@prisma/client';
import { sign } from 'jsonwebtoken';

export default {
  render(user: Users) {
    return {
      accessToken: sign({id: user.id}, process.env.SECRET_STRING, {expiresIn: '24h'}),
      name: user.name,
      phone: user.phone,
      email: user.email,
    };
  },

  renderMany(users: Users[]) {
    return users.map(user => this.render(user));
  }
}