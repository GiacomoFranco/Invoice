import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor() {}

  dialogOpen = signal<boolean>(false);

  openDialog() {
    this.dialogOpen.set(true);
    console.log('opened');
  }

  closeDialog() {
    this.dialogOpen.set(false);
    console.log('closed');

  }
}
