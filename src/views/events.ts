import { eventHistory } from "./eventsHistories";
import eventsHistoriesViews from './eventsHistories';

interface Events {
  type: string
  event_histories: eventHistory[]
}

export default {
  render(event: Events) {
    return {
      eventHistories: eventsHistoriesViews.renderMany(event.event_histories)
    };
  },

  renderMany(events: Events[]) {
    return events.map(event => this.render(event));
  }
}
