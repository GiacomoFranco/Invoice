import { Component, input } from '@angular/core';
import { TStatus } from '../../models/types/states.type';
import { FormsModule } from '@angular/forms';
import { TQuotationField } from '../../models/types/quotation-fields.type';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-table-items',
  standalone: true,
  imports: [],
  templateUrl: './table-items.component.html',
  styleUrl: './table-items.component.scss',
})
export class TableItemsComponent {
  constructor(private invoiceService: InvoiceService) {}

  tableType = input<TQuotationField>('materials');
  items = input<any[]>();
  status = input<TStatus>('Unpaid');

  addRow(): void {
    this.tableType() === 'materials'
      ? this.invoiceService.materials.update((items: any) => [
          ...items,
          { name: '---', price: 0, quantity: 0, total: 0 },
        ])
      : this.invoiceService.labors.update((items: any) => [
          ...items,
          { name: '---', price: 0, quantity: 0, total: 0 },
        ]);
  }

  updateValue(target: any, index: any, key: string): void {
    this.tableType() === 'materials'
      ? this.invoiceService.materials.update((items) => items.map((item: any, i: any) => (i === index ? { ...item, [key]: target.value } : item)))
      : this.invoiceService.labors.update((items) => items.map((item: any, i: any) => (i === index ? { ...item, [key]: target.value } : item)));
  }

  deleteRow(index: any): void {
    this.tableType() === 'materials'
      ? this.invoiceService.materials.update((items) =>
          items.filter((_: any, indexArr: any) => indexArr !== index)
        )
      : this.invoiceService.labors.update((items) =>
          items.filter((_: any, indexArr: any) => indexArr !== index)
        );
  }

  totalSumatory(item: any) {
    let sumatory = item.price * item.quantity;
    return sumatory % 1 === 0 ? Math.round(sumatory) : sumatory.toFixed(2);
  }
}
