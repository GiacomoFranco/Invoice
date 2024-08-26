import { Component, input } from '@angular/core';


@Component({
  selector: 'app-party-involved',
  standalone: true,
  imports: [],
  templateUrl: './party-involved.component.html',
  styleUrl: './party-involved.component.scss',
})
export class PartyInvolvedComponent {
  isTo = input<boolean>(false);
}
