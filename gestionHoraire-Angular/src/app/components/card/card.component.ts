import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(public MonDialog: MatDialog) {}
  @Input() title!: string;
  @Input() subtitles!: string[];
  @Input() pElementsContent!: string[];
  @Input() wantButtons: boolean = true;
  @Input() imageSrc: string = 'assets/images/intervention.png';

  @Output() deleteConfirmed = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();

  onError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/images/intervention.png';
  }
  onEdit(): void {
    this.edit.emit();
  }

  openDialog(): void {
    const dialogRef = this.MonDialog.open(DialogComponent, {
      autoFocus: false,
      width: '550px',
      data: {
        title: 'Confirmer la suppression',
        dialogContents: [
          {
            h3: 'Êtes-vous sûr de vouloir supprimer cet intervention ?',
            paragraphs: []
          }
        ],
        mainButtonText: 'Supprimer'
      }
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('The dialog was closed');
      if (result) {
        this.deleteConfirmed.emit();
        console.log('delete confirmed');
      }
    });
  }
}
