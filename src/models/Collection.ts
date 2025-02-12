import axios from 'axios';
import { User } from './User';
import { Eventing } from './Eventing';
import type { IUserProps } from '@libs/types';

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public baseUrl: string, public route: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(`${this.baseUrl}${this.route}`).then((response) => {
      response.data.forEach((value: IUserProps) => {
        const user = User.buildUser(value);
        this.models.push(user);
      });

      this.trigger('change');
    });
  }
}
