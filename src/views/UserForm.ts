import type { User } from '@/models';
import { View } from './View';
import type { Callback, IUserProps } from '@/libs/types';

export class UserForm extends View<User, IUserProps> {
  constructor(public parent: Element, public model: User) {
    super(parent, model);
  }

  eventsMap(): { [key: string]: Callback } {
    return {
      'click:.set-name': this.onSetNameClick,
      'click:.set-age': this.onSetAgeClick,
      'click:.save-user': this.onSaveUserClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (!input) return;

    const newName = input.value;

    if (!newName) return;

    this.model.set({ name: newName });
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSaveUserClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
        <h2>Form</h2>
        <input type="text" placeholder='${this.model.get('name')}' id="nameInput" />
        <button class="set-name">Change name</button>
        <button class='set-age'>Set random age</button>
        <button class='save-user'>Save user</button>
    `;
  }
}
