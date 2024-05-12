import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  constructor() {

   }
  ngOnInit(): void {
    if(this.type === 'password') {
      this.hintColor = 'red';
    }
  }
  @Output()
  ValueChange = new EventEmitter<string>();

  @Input()
  label!: string;
  @Input()
  placeholder!: string;
  @Input()
  hint!: string;
  @Input()
  type!: string;
  @Input()
  matIconTitle!: string;
  @Input()
  matIconStyle!: string;

  hintColor: string = '';

  @Input()
  inputValue: any;

  onInputChange() {
    this.ValueChange.emit(this.inputValue);
  }


}
