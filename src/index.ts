import { User } from '@/models';

const userCollection = User.buildUserCollection();

userCollection.on('change', () => {
  console.log(userCollection);
});

userCollection.fetch();
