import type { AxiosPromise } from 'axios';

export type SyncData = {
  id?: number;
};

export interface IApiSync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}
