import { User } from '@models/User';

const user = new User({ name: 'John Doe', age: 30 });

user.on('change', () => {
  console.log('Change #1');
});

user.on('update', () => {
  console.log('Update #1');
});

user.on('change', () => {
  console.log('Change #2');
});

console.log(user);
