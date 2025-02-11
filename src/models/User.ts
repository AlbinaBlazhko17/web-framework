import type { Callback, UserProps } from '@libs/types';
import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '@libs/constants';

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

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback) => {
      callback();
    });
  }

  fetch(): void {
    axios.get(`${BASE_URL}/users/${this.get('id')}`).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`${BASE_URL}/users/${id}`, this.data);
    } else {
      axios.post(`${BASE_URL}/users`, this.data);
    }
  }
}
