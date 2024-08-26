import { Component, computed, input } from '@angular/core';
import { InvoiceStatusComponent } from "../invoice-status/invoice-status.component";
import { InvoiceService } from '../../../services/invoice.service';

@Component({
  selector: 'app-summary-header',
  standalone: true,
  imports: [InvoiceStatusComponent],
  templateUrl: './summary-header.component.html',
  styleUrl: './summary-header.component.scss'
})
export class SummaryHeaderComponent {
  constructor(private invoiceService: InvoiceService) {}
  invoiceID = input<number>(3213123);
  issuedDate = input<string>('24.08.2024');
  statusType = computed(() => this.invoiceService.invoiceStatus());
}
