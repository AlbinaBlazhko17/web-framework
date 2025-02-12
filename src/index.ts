import { User } from '@models/User';

const user = User.buildUser({ name: 'Name', age: 0 });

user.on('change', () => {
  console.log('User was changed');
});

user.set({ id: 1, name: 'Updated user', age: 1 });

user.fetch();

console.log(user);
