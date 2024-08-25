import { Component } from '@angular/core';
import { TableItemsComponent } from "../table-items/table-items.component";

@Component({
  selector: 'app-quotation-field',
  standalone: true,
  imports: [TableItemsComponent],
  templateUrl: './quotation-field.component.html',
  styleUrl: './quotation-field.component.scss'
})
export class QuotationFieldComponent {

}
