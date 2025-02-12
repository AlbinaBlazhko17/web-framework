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
}
