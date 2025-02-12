import type { IUserProps } from '@/libs/types';
import { View } from './View';
import { User } from '@/models';

export class UserShow extends View<User, IUserProps> {
  constructor(public parent: Element, public model: User) {
    super(parent, model);
  }

  template(): string {
    return `
        <h2>Details</h2>
        <div class="user-data"> User Name: <span id="userName">${this.model.get('name')}</span></div>
        <div class="user-data">User Age: <span id="userAge">${this.model.get('age')}</span></div>
    `;
  }
}
