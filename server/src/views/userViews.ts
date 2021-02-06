import { users, user_events } from '@prisma/client';

export default {
  render(user: users, events: user_events[]) {
    return {
      name: user.name,
      phoneNumber: user.phone_number,
      email: user.email,
      events: events,
      created_at: user.created_at,
      updated_at: user.updated_at
    };
  },

  // renderMany(users: users[]) {
  //   return users.map(user => this.render(user));
  // }
}