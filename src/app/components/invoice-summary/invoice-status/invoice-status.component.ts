import { Component, input } from '@angular/core';
import { TStatus } from '../../../models/types/states.type';

@Component({
  selector: 'app-invoice-status',
  standalone: true,
  imports: [],
  templateUrl: './invoice-status.component.html',
  styleUrl: './invoice-status.component.scss'
})
export class InvoiceStatusComponent {
  status = input<TStatus>('Unpaid');
}
