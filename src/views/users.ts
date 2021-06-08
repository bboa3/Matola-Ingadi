import { users, user_events } from '@prisma/client';


export default {
  render(user: users, events: user_events[]) {
    return {
      name: user.name,
      phoneNumber: user.phone_number,
      email: user.email,
      events: events
    };
  }
}