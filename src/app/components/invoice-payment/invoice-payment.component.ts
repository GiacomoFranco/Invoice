import { Component } from '@angular/core';
import { PaymentOptionsComponent } from "./payment-options/payment-options.component";
import { PaymentSummaryComponent } from "./payment-summary/payment-summary.component";

@Component({
  selector: 'app-invoice-payment',
  standalone: true,
  imports: [PaymentOptionsComponent, PaymentSummaryComponent],
  templateUrl: './invoice-payment.component.html',
  styleUrl: './invoice-payment.component.scss'
})
export class InvoicePaymentComponent {

}
