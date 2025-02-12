import { User } from '@models/User';

const user = new User({ id: 1, name: 'New user', age: 0 });

user.on('change', () => {
  console.log('User was changed');
});

user.set({ name: 'Updated user', age: 1 });

user.fetch();

console.log(user);
