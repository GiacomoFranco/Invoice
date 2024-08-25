import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceSummaryComponent } from "./components/invoice-summary/invoice-summary.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvoiceSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Invoice';
}
