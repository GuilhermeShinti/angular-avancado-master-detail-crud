import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-error-messages',
  templateUrl: './server-error-messages.component.html',
  styleUrls: ['./server-error-messages.component.sass']
})
export class ServerErrorMessagesComponent implements OnInit {

  @Input('server-error-message') serverErrorMessages: string[] = null;

  constructor() { }

  ngOnInit() {
  }

}
