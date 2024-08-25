import { Component } from '@angular/core';
import { PartyInvolvedComponent } from "./party-involved/party-involved.component";

@Component({
  selector: 'app-parties-involved',
  standalone: true,
  imports: [PartyInvolvedComponent],
  templateUrl: './parties-involved.component.html',
  styleUrl: './parties-involved.component.scss'
})
export class PartiesInvolvedComponent {

}
