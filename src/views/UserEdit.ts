import type { IUserProps } from '@/libs/types';
import { View } from './View';
import { User } from '@/models';
import { UserShow } from './UserShow';
import { UserForm } from './UserForm';

export class UserEdit extends View<User, IUserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  template(): string {
    return `
      <div class="user-card">
        <h1>User</h1>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
