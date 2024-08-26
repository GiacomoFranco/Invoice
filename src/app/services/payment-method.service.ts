import { Injectable, signal } from '@angular/core';
import { IPaymentMethod } from '../models/interfaces/payment-method.interface';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodService {

  paymentOptions = signal<IPaymentMethod[]>([
    {
      option: 'Visa',
      logo: '',
      name: 'Visa **** 4242 | Expires on 4/24',
      active: true,
    },
    {
      option: 'Mastercard',
      name: 'Mastercard **** 4242 | Expires on 4/24',
      logo: '',
      active: false,
    },
    { option: 'ApplePay', name: '', logo: '', active: false },
    { option: 'Paypal', name: '', logo: '', active: false },
  ]);


  choosePaymentOption(paymentOptionIndex: number) {
    this.paymentOptions.update((options :IPaymentMethod[] )=>
      options.map((option: IPaymentMethod, index: number) => ({
        ...option,
        active: index === paymentOptionIndex
      }))
    );
  }
}
