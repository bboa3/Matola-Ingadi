import { event_histories, events_photos } from '@prisma/client';

type Photos = string[]

export default {
  render(event: event_histories) {
    return {};
  },

  renderMany(events: event_histories[]) {
    return events.map(event => this.render(event));
  }
}

const accessoriesPhotos = (photos: events_photos[]) => {
  const paths =  photos.map(photo => {
    return `${process.env.URL}/uploads/images/${photo.path}`
  })

  return paths
}