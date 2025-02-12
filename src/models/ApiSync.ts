import type { IdObject } from '@libs/types';
import axios, { type AxiosPromise } from 'axios';

export class ApiSync<T extends IdObject> {
  constructor(private baseUrl: string, private route: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.baseUrl}${this.route}/${id}`);
  }

  save(data: T): AxiosPromise {
    const id = data.id;

    if (id) {
      return axios.put(`${this.baseUrl}${this.route}/${id}`, data);
    } else {
      return axios.post(`${this.baseUrl}${this.route}`, data);
    }
  }
}
