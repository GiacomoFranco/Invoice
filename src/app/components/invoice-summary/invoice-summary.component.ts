import { Component } from '@angular/core';
import { SummaryHeaderComponent } from "./summary-header/summary-header.component";

@Component({
  selector: 'app-invoice-summary',
  standalone: true,
  imports: [SummaryHeaderComponent],
  templateUrl: './invoice-summary.component.html',
  styleUrl: './invoice-summary.component.scss'
})
export class InvoiceSummaryComponent {

}
