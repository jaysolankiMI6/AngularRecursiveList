import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-nestedsingle',
  templateUrl: './nestedsingle.component.html',
  styleUrls: ['./nestedsingle.component.scss']
})
export class NestedsingleComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'FormArray Example in Angular Reactive forms';
  skillsForm: FormGroup;
 
  constructor(private fb:FormBuilder) {
 
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([this.fb.group({
        skill: 'jay',
        exp: 'demo',
      })]) ,
    });
  
  }
 
  get skills() : FormArray {
    console.log(this.skillsForm.get("skills") as FormArray);
    
    return this.skillsForm.get("skills") as FormArray
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }
 
  addSkills() {
    this.skills.push(this.newSkill());
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
 
  onSubmit() {
    console.log(this.skillsForm.value);
  }
 
}
 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  } 
}
