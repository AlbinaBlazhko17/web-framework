import { UserForm } from './views';
import { User } from './models';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ name: 'NAME', age: 20 });

const userEdit = new UserEdit(document.getElementById('root') as Element, user);

userEdit.render();
