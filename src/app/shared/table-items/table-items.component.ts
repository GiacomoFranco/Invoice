import { Component, input, signal } from '@angular/core';
import { TStatus } from '../../models/types/states.type';

@Component({
  selector: 'app-table-items',
  standalone: true,
  imports: [],
  templateUrl: './table-items.component.html',
  styleUrl: './table-items.component.scss',
})
export class TableItemsComponent {
  items = signal<any[]>([{ test: 1 }, { test: 1 }]);
  status = input<TStatus>('Unpaid');

  addRow(): void {
    this.items.update((items) => [...items, items.length + 1]);
  }

  deleteRow(index: any): void {
    console.log(index);

    this.items.update((items) => items.filter((item, indexArr) => indexArr !== index));
  }
}
