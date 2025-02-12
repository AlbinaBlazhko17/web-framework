import type { IUserProps } from '@libs/types';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { BASE_URL } from '@libs/constants';
import { Attributes } from './Attributes';
import { Model } from './Model';
import { Collection } from './Collection';

export class User extends Model<IUserProps> {
  static buildUser = (attrs: IUserProps): User => {
    return new User(new Attributes<IUserProps>(attrs), new Eventing(), new ApiSync<IUserProps>(BASE_URL, '/users'));
  };

  static buildUserCollection = (): Collection<User, IUserProps> => {
    return new Collection<User, IUserProps>(BASE_URL, '/users', User.buildUser);
  };
}
