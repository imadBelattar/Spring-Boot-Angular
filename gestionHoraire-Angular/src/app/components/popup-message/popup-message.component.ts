import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-message',
  standalone: true,
  imports: [],
  template: `
  @if (visible) {
    <div id="popup-message-id" class="popup-message">{{ message }}</div>
  }`,
  styleUrl: './popup-message.component.css'
})
export class PopupMessageComponent implements OnInit {
  @Input() message: string = '';
  visible: boolean = false;

  ngOnInit() {
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
    }, 2500);
  }
}







