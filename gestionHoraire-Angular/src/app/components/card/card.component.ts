import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor() { 
    this.title = 'Title: Card Title';
    this.subtitles = [
      'Subtitle 1: subtitle content',
      'Subtitle 2: subtitle content',
      'Subtitle 3: subtitle content'
    ];
    this.pElementsContent = [
      'This is a card component',
      'It is used to display information in a card format',
      'It has a title, subtitles and a list of paragraphs'
    
    ];
    this.wantButtons = true;
  }
  @Input() title: string;
  @Input() subtitles: string[]; 
  @Input() pElementsContent: string[];
  @Input() wantButtons: boolean;

}
