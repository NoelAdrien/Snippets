import { Component, OnInit } from '@angular/core';

import { Message } from '../../Model/Message';
import { MessageService } from '../../Services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
