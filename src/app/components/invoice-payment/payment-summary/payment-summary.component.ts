import { Component, computed } from '@angular/core';
import { InvoiceService } from '../../../services/invoice.service';

@Component({
  selector: 'app-payment-summary',
  standalone: true,
  imports: [],
  templateUrl: './payment-summary.component.html',
  styleUrl: './payment-summary.component.scss'
})
export class PaymentSummaryComponent {
  constructor(private invoiceService: InvoiceService) {}

  totalSumatory = computed(() => {
    let sumatory = this.invoiceService.totalSumatory()
    return sumatory % 1 === 0 ? Math.round(sumatory) : sumatory.toFixed(2);
  });

  discout = computed(() => this.invoiceService.discount());

  total = computed(() => this.discout() ? this.totalSumatory() - (this.totalSumatory() * this.discout() / 100) : this.totalSumatory());
}
