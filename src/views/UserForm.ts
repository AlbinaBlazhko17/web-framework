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

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User Name:${this.model.get('name')}</div>
        <div>User Age:${this.model.get('age')}</div>
        <input />
        <button class="set-name">Change name</button>
        <button class='set-age'>Set random age</button>
      </div>
    `;
  }
}
