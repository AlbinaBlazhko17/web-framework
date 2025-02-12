import type { IUserProps } from '@libs/types';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { BASE_URL } from '@libs/constants';
import { Attributes } from './Attributes';

export class User {
  public sync: Sync<IUserProps> = new Sync<IUserProps>(BASE_URL, '/users');
  public attributes: Attributes<IUserProps>;

  constructor(attributes: IUserProps, public events: Eventing = new Eventing()) {
    this.attributes = new Attributes<IUserProps>(attributes);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: IUserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response) => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then(() => {
        this.events.trigger('save');
      })
      .catch(() => {
        this.events.trigger('error');
      });
  }
}
