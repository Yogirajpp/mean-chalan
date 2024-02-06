import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-delivery-chalan',
  templateUrl: './delivery-chalan.component.html',
  styleUrls: ['./delivery-chalan.component.css'],
  imports: [CommonModule]
})
export class DeliveryChalanComponent implements OnInit {
  apiUrl = 'http://65.1.188.60:2121/api/delivery_chalan_details';
  deliveryData: any[] = [];
  payload = {
    "delivery_challan_id": 7,
    "parts":[ 
      {"part_id": 13, "serial_no":123, "qty": 2, "unit": "meter"},
      {"part_id": 13, "serial_no":123, "qty": 2, "unit": "meter"},
      {"part_id": 13, "serial_no":123, "qty": 2, "unit": "meter"},
      {"part_id": 13, "serial_no":123, "qty": 2, "unit": "meter"}
    ]
  };

  constructor() {}

  ngOnInit() {
    this.fetchDeliveryData();
  }

  fetchDeliveryData() {
    fetch(this.apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch delivery data');
        }
        return response.json();
      })
      .then(data => {
        this.deliveryData = data.data;
        console.log('Delivery data:', this.deliveryData);
      })
      .catch(error => {
        console.error('Error while fetching delivery data:', error.message);
      });
  }
  

  submitPayload() {
    fetch(this.apiUrl + '/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.payload)
    })
    .then(response => {
      console.log('Payload sent successfully with fetch', response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to send payload');
      }
    })
    .then(data => {
      console.log('Server response:', data);
      this.fetchDeliveryData(); // Fetch updated data after payload submission
    })
    .catch(error => {
      console.error('Error while sending payload with fetch', error);
    });
  }
}
