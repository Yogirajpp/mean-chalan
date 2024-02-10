import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChalanService {
  private apiUrl = 'http://65.1.188.60:2121/api/delivery_chalan_details';
  // private apiUrldb = 'http://localhost:2121/api/forms/add';

  constructor() {}

  // private handleResponse(response: Response): Observable<any> {
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   return from(response.json());
  // }

  addChalanForm(formData: any): Observable<any> {
    return new Observable((observer) => {
      fetch(`${this.apiUrl}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  createChalan(formData: any) {
    return fetch('http://localhost:2121/api/forms/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      throw error;
    });
  }

  getAllChalanDetails(): Observable<any[]> {
    return new Observable((observer) => {
      fetch(`http://localhost:2121/api/forms/all`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
  
}
