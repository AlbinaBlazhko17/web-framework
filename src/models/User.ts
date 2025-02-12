import type { IUserProps } from '@libs/types';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { BASE_URL } from '@libs/constants';

export class User {
  public sync: Sync<IUserProps> = new Sync<IUserProps>(BASE_URL, '/users');

  constructor(private data: IUserProps, public events: Eventing = new Eventing()) {}

  get(propName: keyof IUserProps): string | number | undefined {
    return this.data[propName];
  }

  set(update: IUserProps): void {
    Object.assign(this.data, update);
  }
}
