import { User } from './user';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  users: User[] = [];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  submit(e:any){
    console.log(this.firstFormGroup.value.firstCtrl)
    console.log(this.secondFormGroup.value.secondCtrl)
    console.log(this.firstFormGroup.value)
    console.log(this.secondFormGroup.value)
    this.users.push({
                      name:this.firstFormGroup.value.firstCtrl
                    , email:this.secondFormGroup.value.secondCtrl}
                    );
    console.log(this.users)
    console.log(this.users[0].name)
    console.log(this.users[0].email)
    
  }

}
