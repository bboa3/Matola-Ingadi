import { accessories_photos } from '@prisma/client';

interface Accessories {
  type: string
  description: string
  accessories_photos: accessories_photos[]
}

export default {
  render(accessories: Accessories) {
    return {
      accessoriesType: accessories.type,
      description: accessories.description,
      photos: accessoriesPhotos(accessories.accessories_photos)
    };
  },

  renderMany(accessories: Accessories[]) {
    return accessories.map(accessories => this.render(accessories));
  }
}

const accessoriesPhotos = (photos: accessories_photos[]) => {
  const paths =  photos.map(photo => {
    return {
      id: photo.id,
      path: `${process.env.URL}/uploads/images/${photo.path}`
    }
  })

  return paths
}