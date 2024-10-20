import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})
export class ConfirmationDialogComponent 
{
  readonly dialogRef = inject(MatDialogRef<ConfirmationDialogComponent>);

  title: string = "Título";
  innerHtmlContent: string = "Este es el contenido"
}
