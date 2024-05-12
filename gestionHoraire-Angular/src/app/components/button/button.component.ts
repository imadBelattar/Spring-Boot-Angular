import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
    @Input()
    label!: string;
    @Input()
    buttonType!: string;
    @Input()
    color!: string;
    @Input()
    matIconTitle!: string;
}
