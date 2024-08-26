import { Component, computed, effect, signal } from '@angular/core';
import { InvoiceService } from '../../../services/invoice.service';
import { DialogComponent } from "../../dialog/dialog.component";
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-payment-summary',
  standalone: true,
  imports: [DialogComponent],
  templateUrl: './payment-summary.component.html',
  styleUrl: './payment-summary.component.scss',
})
export class PaymentSummaryComponent {
  constructor(
    private invoiceService: InvoiceService,
    private dialogService: DialogService
  ) {
    effect(() => {
      console.log(this.dialogState());

    })
  }

  totalSumatory = computed(() => {
    let sumatory = this.invoiceService.totalSumatory();
    return sumatory % 1 === 0 ? Math.round(sumatory) : sumatory.toFixed(2);
  });

  discout = computed(() => this.invoiceService.discount());
  total = computed(() =>
    this.discout()
      ? this.totalSumatory() - (this.totalSumatory() * this.discout()) / 100
      : this.totalSumatory()
  );
  invoiceStatus = computed(() => this.invoiceService.invoiceStatus());

  dialogState = computed(() => this.dialogService.dialogOpen());
  errorReponse = signal<string | number | undefined | any>('');


  payAction() {
    this.dialogService.openDialog();
    this.invoiceService.invoiceStatus.set('paid');
    setTimeout(() => {
      this.dialogService.closeDialog();
    }, 5000);
  }
}
