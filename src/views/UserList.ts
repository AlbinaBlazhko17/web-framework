import type { User } from '@/models';
import { CollectionView } from './CollectionView';
import type { IUserProps } from '@/libs/types';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, IUserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
