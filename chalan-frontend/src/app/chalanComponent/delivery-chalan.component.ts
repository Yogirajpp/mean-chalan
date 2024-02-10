import { CommonModule } from '@angular/common';
import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChalanService } from './chalan.service';

@Component({
  standalone: true,
  selector: 'app-delivery-chalan',
  templateUrl: './delivery-chalan.component.html',
  styleUrls: ['./delivery-chalan.component.css'],
  imports: [CommonModule , FormsModule],
  providers: [ChalanService]
})
export class DeliveryChalanComponent implements OnInit {
  apiUrl = 'http://65.1.188.60:2121/api/delivery_chalan_details';
  deliveryData: any[] = [];
  payload = {
    delivery_challan_id: null,
    parts: [{ part_id: null, serial_no: null, qty: null, unit: null }]
  };

  

  showNotification = false;
  notificationMessage!: string;


  constructor(private chalanService: ChalanService) {}

  ngOnInit(): void {
    this.fetchAllChalanDetails();
  }
  

  submitForm() {
    this.chalanService.createChalan(this.payload)
      .then(response => {
        console.log('Form submitted successfully:', response);
        // Reset form data after successful submission
        this.payload = {
          delivery_challan_id: null,
          parts: [{ part_id: null, serial_no: null, qty: null, unit: null }]
        };
        
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  }

  submitPayload() {
    this.chalanService.addChalanForm(this.payload)
      .subscribe(
        (response) => {
          console.log('Payload sent successfully', response);
          this.showSuccessNotification();
          // After payload submission, call submitForm
          this.submitForm();
        },
        (error) => {
          console.error('Error while sending payload', error);
        }
      );
  }

  fetchAllChalanDetails() {
    this.chalanService.getAllChalanDetails()
    .subscribe(
      (response) => {
        console.log('Payload get successfully', response);
        this.deliveryData = response; // Assign response data to deliveryData variable
        
      },
      (error) => {
        console.error('Error while getting payload', error);
      }
    );
  }
  
  showSuccessNotification() {
    this.notificationMessage = 'Payload submitted successfully.';
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }
}
