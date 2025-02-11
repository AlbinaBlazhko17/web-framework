import { BASE_URL } from '@libs/constants';
import type { UserProps } from '@libs/types';
import axios, { type AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class User {
  constructor(private data: UserProps, public events: Eventing = new Eventing()) {}

  get(propName: keyof UserProps): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
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
