import { Injectable } from '@angular/core';

import { Message } from '../Model/Message';

@Injectable()

export class MessageService {

  messages: Message[] = [];

  Add(text: string, classe: string) {
    const mess = new Message();
    mess.message = text;
    mess.class = classe;

    this.messages.push(mess);
  }

  clear(): void {
    this.messages = [];
  }

  constructor() { }

}
