import { Component, input } from '@angular/core';
import { InvoiceStatusComponent } from "../invoice-status/invoice-status.component";

@Component({
  selector: 'app-summary-header',
  standalone: true,
  imports: [InvoiceStatusComponent],
  templateUrl: './summary-header.component.html',
  styleUrl: './summary-header.component.scss'
})
export class SummaryHeaderComponent {
  invoiceID = input<number>(3213123);
  issuedDate = input<string>('24.08.2024');
}
