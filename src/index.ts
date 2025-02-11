import { User } from '@models/User';

const user = new User({ name: 'New user', age: 0 });

user.events.on('change', () => {
  console.log('Change event #1');
});

user.events.on('change', () => {
  console.log('Change event #2');
});

user.events.on('save', () => {
  console.log('Save event');
});

console.log(user);
