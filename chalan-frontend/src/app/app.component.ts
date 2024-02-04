import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChalanComponent } from './chalanComponent/chalan.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ChalanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chalan-frontend';
}
