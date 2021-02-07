import { accessories, accessories_photos } from '@prisma/client';
import photos from '../config/photos';

export default {
  render(accessories: accessories, photos: accessories_photos[]) {
    return {
      id: accessories.id,
      type: accessories.type,
      description: accessories.description,
      photos: accessoriesPhotos(photos),
      created_at: accessories.created_at,
      updated_at: accessories.updated_at,
    };
  },

  // renderMany(accessories: accessories[], photos: accessories_photos[]) {
  //   return accessories.map(accessory => this.render(accessory, photos));
  // }
}

const accessoriesPhotos = (photos: accessories_photos[]) => {
  const paths =  photos.map(photo => {
    return `${process.env.URL}/uploads/images/${photo.path}`
  })

  return paths
}