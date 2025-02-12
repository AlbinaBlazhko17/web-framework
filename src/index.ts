import { BASE_URL } from '@libs/constants';
import { Collection } from '@models/Collection';

const collection = new Collection(BASE_URL, '/users');

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
