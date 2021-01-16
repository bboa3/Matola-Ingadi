import { Accessories } from '@prisma/client';

interface Accessory {
  paths: string[]
  category: string
}

export default {
  render(accessories: Accessories) {

    const unknownPhotos = accessories.photos as unknown;

    const accessory = unknownPhotos as Accessory

    return {
      id: accessories.id,
      accessory: {
        paths: accessory.paths.map(path => {
          return `${process.env.URL}/uploads/images/${path}`
        }),
        category: accessory.category
      }
    };
  },

  renderMany(accessories: Accessories[]) {
    return accessories.map(accessory => this.render(accessory));
  }
}