import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DeliveryChalanComponent } from './chalanComponent/delivery-chalan.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , DeliveryChalanComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chalan-frontend';
}
