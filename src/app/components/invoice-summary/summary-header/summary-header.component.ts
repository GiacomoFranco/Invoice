import { Component, computed, input } from '@angular/core';
import { InvoiceStatusComponent } from "../invoice-status/invoice-status.component";
import { InvoiceService } from '../../../services/invoice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-summary-header',
  standalone: true,
  imports: [InvoiceStatusComponent, FormsModule],
  templateUrl: './summary-header.component.html',
  styleUrl: './summary-header.component.scss'
})
export class SummaryHeaderComponent {
  constructor(private invoiceService: InvoiceService) {}
  invoiceID = input<number>(3213123);
  issuedDate = input<string>(new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date()));
  statusType = computed(() => this.invoiceService.invoiceStatus());
}
