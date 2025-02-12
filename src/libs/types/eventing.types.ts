import type { Callback } from './callback.type';

export type Events = { [key: string]: Callback[] };

export interface IEventing {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}
