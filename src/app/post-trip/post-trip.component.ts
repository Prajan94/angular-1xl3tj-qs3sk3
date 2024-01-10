import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-post-trip',
  templateUrl: './post-trip.component.html',
  styleUrls: ['./post-trip.component.css']
})

export class PostTripComponent implements OnInit {
  public stepOneForm: FormGroup;
  public stepTwoForm: FormGroup;
  previewDeatils: any;
  confirmationStep: any;
  previewDeatilsEnabled = false;
  confirmation = false;
  createNewTrip = false;
  mandErrMsg : string = "";
  mandErrFlag : boolean = false;

  constructor(private fb: FormBuilder) {
    this.stepOneForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      age: this.fb.control('', Validators.required),
      gender: this.fb.control('', Validators.required),
      phoneNumber: this.fb.control('', Validators.required),
      companyName: this.fb.control('', Validators.required),
    });
    this.stepTwoForm = this.fb.group({
      place: this.fb.control('', Validators.required),
      vehicle: this.fb.control('', Validators.required),
      seats: this.fb.control('', Validators.required),
      dateOfTrip: this.fb.control('', Validators.required),
      sharingPrice: this.fb.control('', Validators.required),
      instructions: this.fb.control('', Validators.required),
    });
  }

  ngOnInit() {
  }

  execPreview() {
    this.previewDeatilsEnabled = true;
  }

  submitTrip() {
    this.confirmation = true;
  }
  postNewTrip() {
    this.previewDeatilsEnabled = false;
    this.confirmation = false;
  }
  submitSteponeForm() {
    // this.mandErrMsg = "";
    // this.mandErrFlag = false;
    // if (!this.stepOneForm.controls['firstName'].value) {
    //     this.mandErrFlag = true;
    //     this.mandErrMsg = "First Name is required";
    // }
  }

  
}