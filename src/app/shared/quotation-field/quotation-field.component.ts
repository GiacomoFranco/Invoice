import { Component, input } from '@angular/core';
import { TableItemsComponent } from "../table-items/table-items.component";
import { TQuotationField } from '../../models/types/quotation-fields.type';

@Component({
  selector: 'app-quotation-field',
  standalone: true,
  imports: [TableItemsComponent],
  templateUrl: './quotation-field.component.html',
  styleUrl: './quotation-field.component.scss',
})
export class QuotationFieldComponent {
  quotationType = input<TQuotationField>('materials');
  title = '';
  items = input<any[]>([]);

  ngOnInit(): void {
    this.title = this.quotationType() === 'labors' ? 'Labor' : 'Materials';
  }
}
