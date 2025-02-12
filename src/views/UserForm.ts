import type { User } from '@/models';

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'click:.set-age': this.onSetAgeClick,
    };
  }

  onButtonClick(): void {
    console.log('Hi there!');
  }

  onSetAgeClick = (): void => {
    console.log('Set random age');
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User Name:${this.model.get('name')}</div>
        <div>User Age:${this.model.get('age')}</div>
        <input />
        <button>Click Me</button>
        <button class='set-age'>Set random age</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
