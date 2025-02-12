import type { IUserProps } from '@/libs/types';
import { View } from './View';
import { User } from '@/models';

export class UserShow extends View<User, IUserProps> {
  constructor(public parent: Element, public model: User) {
    super(parent, model);
  }

  template(): string {
    return `
      <div>
        <h1>User Detail</h1>
        <div>User Name:${this.model.get('name')}</div>
        <div>User Age:${this.model.get('age')}</div>
      </div>
    `;
  }
}
