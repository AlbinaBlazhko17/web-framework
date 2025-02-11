import type { UserProps } from '@libs/types';

export class User {
  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
