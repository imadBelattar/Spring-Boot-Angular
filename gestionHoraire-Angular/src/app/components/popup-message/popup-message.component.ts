import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-popup-message',
  standalone: true,
  imports: [MatIconModule],
  template: `
  @if (visible) {
    <div class="popup-message" [style.background-color]="backgroundColor">
        <mat-icon> {{ iconName }} </mat-icon>
        {{ message }}
    </div>
  }`,
  styleUrl: './popup-message.component.css'
})
export class PopupMessageComponent implements OnInit {
  @Input() message: string = '';
  visible: boolean = false;
  @Input() backgroundColor: string = 'gray';
  @Input() time: number = 2500;
  @Input() iconName: string = 'info';

  ngOnInit() {
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
    }, this.time);
  }
}







