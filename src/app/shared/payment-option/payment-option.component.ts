import { Component, input } from '@angular/core';

@Component({
  selector: 'app-payment-option',
  standalone: true,
  imports: [],
  templateUrl: './payment-option.component.html',
  styleUrl: './payment-option.component.scss'
})
export class PaymentOptionComponent {
  isSelected = input<boolean>(false);
  option = input<string>('');
  name = input<string | undefined>(undefined);
  logo = input<string>('');
}
