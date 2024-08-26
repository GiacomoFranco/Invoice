import { Component, input } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  constructor(private dialogService: DialogService) {}
  errorCode = input<string | number | undefined | any>();
  payment = input<boolean>(false);


  closeDialog() {
    this.dialogService.closeDialog();
  }
}
