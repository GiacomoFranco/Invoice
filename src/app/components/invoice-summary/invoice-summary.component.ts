import { Component, computed, input } from '@angular/core';
import { SummaryHeaderComponent } from './summary-header/summary-header.component';
import { PartiesInvolvedComponent } from '../../shared/parties-involved/parties-involved.component';
import { QuotationFieldComponent } from '../../shared/quotation-field/quotation-field.component';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-summary',
  standalone: true,
  imports: [
    SummaryHeaderComponent,
    PartiesInvolvedComponent,
    QuotationFieldComponent,
  ],
  templateUrl: './invoice-summary.component.html',
  styleUrl: './invoice-summary.component.scss',
})
export class InvoiceSummaryComponent {
  constructor(private invoiceService: InvoiceService) {}

  labors = computed<any[]>(() => this.invoiceService.labors());
  materials = computed<any[]>(() => this.invoiceService.materials());
}
