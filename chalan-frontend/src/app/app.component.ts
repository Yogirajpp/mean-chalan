import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeliveryChalanComponent } from './chalanComponent/delivery-chalan.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , DeliveryChalanComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chalan-frontend';
}
