import { regMember, FirstComponent } from './../first/first.component';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Validation from './Validation';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-dialog',
  templateUrl: './member-dialog.component.html',
  styleUrls: ['./member-dialog.component.scss']
})
export class MemberDialogComponent implements OnInit {

  form: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<MemberDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _formBuilder: FormBuilder
    , private memberservice: MemberService
  ) {
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      fullName:['',Validators.required],
      userName:['',
                    [
                      Validators.required,
                      Validators.minLength(6),
                      Validators.maxLength(20)
                    ]
                ],
      email:['',[Validators.required, Validators.email]],
      password:['',
                    [
                      Validators.required,
                      Validators.minLength(6),
                      Validators.maxLength(40)
                    ]
               ],
      confirmPassword:['', Validators.required],
    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  getErrorMessage(fName:string) {
    if(fName =="fullName"){
      //fullname
      if (this.form.controls[fName].hasError('required')) {
        return 'Full name is required';
      }
    }else if(fName =="userName"){

      //username
      if (this.form.controls[fName].hasError('required')) {
        return 'Username is required';
      }

      if (this.form.controls[fName].hasError('minlength')) {
        return 'Username must be at least 6 characters';
      }

      if (this.form.controls[fName].hasError('maxlength')) {
        return 'Username must not exceed 20 characters';
      }

    }else if(fName =="email"){
      //email
      if (this.form.controls[fName].hasError('required')) {
        return 'Email is required';
      }
      if(this.form.controls[fName].hasError('email') && this.form.controls['email'].touched){
        return 'Email is invalid'
      }
    }else if(fName =="password"){
      //password
      if (this.form.controls[fName].hasError('required')) {
        return 'Password is required';
      }

      if (this.form.controls[fName].hasError('minlength')) {
        return 'Password must be at least 6 characters';
      }

      if (this.form.controls[fName].hasError('maxlength')) {
        return 'Password must not exceed 40 characters';
      }

    }else if(fName =="confirmPassword"){
      //confirmPassword
      if (this.form.controls[fName].hasError('required')) {
        return 'Confirm Password is required';
      }

      if (this.form.controls[fName].hasError('matching')) {
        return 'Confirm Password does not match';
      }
    }


    return this.form.controls ? 'Invalid ' : '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log('onSubmit')
    // this.submitted = true;
    console.log(this.form.invalid)
    if (this.form.invalid) {
      return;
    }

    this.memberservice.createMember(new regMember(this.form.value)).subscribe(data =>{
      console.log(data.fullName)
      console.log(data.userName)
      console.log(data.email)
      console.log(data.password)
    });

  }

}
