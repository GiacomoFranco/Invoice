import { Component, computed, signal } from '@angular/core';
import { PaymentOptionComponent } from '../../../shared/payment-option/payment-option.component';
import { PaymentMethodService } from '../../../services/payment-method.service';

@Component({
  selector: 'app-payment-options',
  standalone: true,
  imports: [PaymentOptionComponent],
  templateUrl: './payment-options.component.html',
  styleUrl: './payment-options.component.scss',
})
export class PaymentOptionsComponent {
  constructor(private paymentMethodService: PaymentMethodService) {}

  paymentOptions = computed(() => this.paymentMethodService.paymentOptions());


  toggleActive(index: number | any) {
   this.paymentMethodService.choosePaymentOption(index);
  }
}
