import { Component, computed, input } from '@angular/core';
import { TStatusSlug } from '../../../models/types/states.type';
import { IState } from '../../../models/interfaces/state.interface';
import { States } from '../../../constants/states.constant';

@Component({
  selector: 'app-invoice-status',
  standalone: true,
  imports: [],
  templateUrl: './invoice-status.component.html',
  styleUrl: './invoice-status.component.scss',
})
export class InvoiceStatusComponent {
  statusType = input<TStatusSlug>('unpaid');

  status = computed<IState>(() => States[this.statusType()]);
}
