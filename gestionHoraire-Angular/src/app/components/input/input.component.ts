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

  hintColor: string = '';

  inputValue: any;

  onInputChange() {
    //validate the password
    if(this.type === 'password') {
      this.hintColor = 'red';
    if(this.inputValue.length === 0) {
      this.hint = this.label + ' is required';
    } else if(this.inputValue.length > 0 && this.inputValue.length < 8) {
      this.hint = 'at least 8 characters are required';
    } else {
      this.hintColor = 'green';
      this.hint = 'good to go!';
    }
  }
  this.ValueChange.emit(this.inputValue);
  }


}
