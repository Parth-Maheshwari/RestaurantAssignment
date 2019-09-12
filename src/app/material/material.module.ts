import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSelectModule, MatDatepicker} from '@angular/material'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  // MatDatepicker
];

@NgModule({
  // declarations: [],
  imports: [
    // MatButtonModule
    MaterialComponents
  ],
  exports: [
    // MatButtonModule,
    MaterialComponents
  ]
})
export class MaterialModule { };
