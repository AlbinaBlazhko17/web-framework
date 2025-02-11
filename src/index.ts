import { User } from '@models/User';

const user = new User({ name: 'John Doe', age: 30 });

user.set({ name: 'New name', age: 12 });
console.log(user.get('name')); // New name
