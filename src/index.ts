import { UserForm } from './views';
import { User } from './models';

const user = User.buildUser({ name: 'NAME', age: 20 });

const userForm = new UserForm(document.getElementById('root') as Element, user);

userForm.render();
