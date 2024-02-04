import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChalanService {
  private apiUrl = 'http://65.1.188.60:2121/api/delivery_chalan_details';

  constructor() {}

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

  getChalanForms(): Observable<any> {
    return new Observable((observer) => {
      fetch(`${this.apiUrl}`)
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
}
