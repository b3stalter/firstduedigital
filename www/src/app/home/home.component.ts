import { Component } from '@angular/core';
import { PoemComponent } from "../poem/poem.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PoemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
