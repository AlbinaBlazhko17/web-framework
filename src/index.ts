import { User } from '@models/User';

const user = new User({ name: 'New user', age: 0 });

user.sync.fetch(1).then((response) => {
  console.log(response.data);
});
