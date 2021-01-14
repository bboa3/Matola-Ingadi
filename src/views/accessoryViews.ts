import { Photos } from '@prisma/client';

interface Accessory {
  paths: string[]
  category: string
}

export default {
  render(accessory: Photos) {

    const photos = accessory.Accessories as unknown;

    const images = photos as Accessory

    return {
      id: accessory.id,
      accessory: {
        paths: images.paths.map(path => {
          return `http://localhost:${process.env.HTTP_PORT}/uploads/images/${path}`
        }),
        category: images.category
      }
    };
  },

  renderMany(accessories: Photos[]) {
    return accessories.map(accessory => this.render(accessory));
  }
}