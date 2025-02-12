import type { IUserProps } from '@libs/types';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { BASE_URL } from '@libs/constants';
import { Attributes } from './Attributes';
import { Model } from './Model';

export class User extends Model<IUserProps> {
  static buildUser = (attrs: IUserProps): User => {
    return new User(new Attributes<IUserProps>(attrs), new Eventing(), new ApiSync<IUserProps>(BASE_URL, '/users'));
  };
}
