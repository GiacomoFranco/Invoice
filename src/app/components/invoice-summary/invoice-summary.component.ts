import { Component } from '@angular/core';
import { SummaryHeaderComponent } from "./summary-header/summary-header.component";
import { PartiesInvolvedComponent } from "../../shared/parties-involved/parties-involved.component";
import { QuotationFieldComponent } from "../../shared/quotation-field/quotation-field.component";

@Component({
  selector: 'app-invoice-summary',
  standalone: true,
  imports: [SummaryHeaderComponent, PartiesInvolvedComponent, QuotationFieldComponent],
  templateUrl: './invoice-summary.component.html',
  styleUrl: './invoice-summary.component.scss'
})
export class InvoiceSummaryComponent {

}
