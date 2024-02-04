import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ChalanService } from './chalan.service'; // Adjust the path based on your project structure
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-chalan',
  templateUrl: './chalan.component.html',
  styleUrls: ['./chalan.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class ChalanComponent implements OnInit {
    chalanForm: FormGroup = this.fb.group({
      delivery_challan_id: [null, Validators.required],
      parts: this.fb.array([]),
    });
    chalanData: any[] = [];
  
    constructor(private fb: FormBuilder, private chalanService: ChalanService) {}
  
    ngOnInit(): void {
      this.chalanForm = this.fb.group({
        delivery_challan_id: [null, Validators.required],
        parts: this.fb.array([]),
      });
  
      for (let i = 0; i < 4; i++) {
        this.addPart();
      }
  
      this.fetchChalanData();
    }
  
    get parts(): FormArray {
      return this.chalanForm.get('parts') as FormArray;
    }
  
    addPart(): void {
      this.parts.push(
        this.fb.group({
          part_id: [null, Validators.required],
          serial_no: [null, Validators.required],
          qty: [null, [Validators.required, Validators.min(1)]],
          unit: [null, Validators.required],
        })
      );
    }
  
    removePart(index: number): void {
      this.parts.removeAt(index);
    }
  
    onSubmit(): void {
      if (this.chalanForm.valid) {
        const payload = this.chalanForm.value;
        this.chalanService.addChalanForm(payload).subscribe(
          (data) => {
            console.log('Form submitted successfully:', data);
            this.fetchChalanData(); // Refresh the data after submission
          },
          (error) => {
            console.error('Error submitting form:', error);
          }
        );
      }
    }
  
    fetchChalanData(): void {
      this.chalanService.getChalanForms().subscribe(
        (data) => {
          this.chalanData = data;
        },
        (error) => {
          console.error('Error fetching chalan data:', error);
        }
      );
    }
  }