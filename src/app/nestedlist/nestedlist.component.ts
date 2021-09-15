import { Component, OnInit } from '@angular/core';
import { IMenu } from '../models/imenu';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nestedlist',
  templateUrl: './nestedlist.component.html',
  styleUrls: ['./nestedlist.component.scss']
})
export class NestedlistComponent implements OnInit {

  data = {
    cities: [
      {
        city: "",
        addressLines: [
          {
            addressLine: "",
          }
        ]
      }
    ]
  }

  myForm: FormGroup;

  ngOnInit() {

  }

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [''],
      cities: this.fb.array([this.fb.group({
        city: [''],
        addressLines: this.fb.array([])
      })])
    })

    this.setCities();
  }

  onSubmit(form: any) {
    alert(this.myForm.value);
  }

  addNewCity() {
    let control = <FormArray>this.myForm.controls.cities;
    control.push(
      this.fb.group({
        city: [''],
        addressLines: this.fb.array([])
      })
    )
  }

  deleteCity(index: any) {
    let control = <FormArray>this.myForm.controls.cities;
    control.removeAt(index)
  }

  // get userDetails(){
  //   return (this.myForm.controls.userDetails as FormGroup).controls;
  // }

  get myFormGroups() {
    return this.myForm.get('addressLines') as FormArray
  }

  get cities(): FormArray {
    return this.myForm.get("cities") as FormArray
  }

  get addressLines(): FormArray {
    return this.myForm.get("addressLines") as FormArray
  }

  get myFormData() {
    return this.myForm.get('cities') || {controls:[]};
  }

  addNewAddressLine(control: any) {
    control.push(
      this.fb.group({
        addressLine: ['']
      }))
  }

  deleteAddressLine(control: any, index: any) {
    control.removeAt(index)
  }

  setCities() {
    let control = <FormArray>this.myForm.controls.cities;
    this.data.cities.forEach(x => {
      control.push(this.fb.group({
        city: x.city,
        addressLines: this.setAddressLines(x)
      }))
    })
  }

  setAddressLines(x: any) {
    let arr = new FormArray([])
    x.addressLines.forEach((y: any) => {
      arr.push(this.fb.group({
        addressLine: y.addressLine
      }))
    })
    return arr;
  }
}


