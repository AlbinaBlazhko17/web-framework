import type { Callback, Events } from '@libs/types';

export class Eventing {
  eventList: Events = {};

  on = (eventName: string, callback: Callback) => {
    this.eventList[eventName] = [...(this.eventList[eventName] || []), callback];
  };

  trigger = (eventName: string): void => {
    const handlers = this.eventList[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback) => {
      callback();
    });
  };
}
