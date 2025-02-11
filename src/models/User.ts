import type { Callback, UserProps } from '@libs/types';

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {
    this.events[eventName] = [...(this.events[eventName] || []), callback];
  }
}
