import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { ResturentDetails } from 'src/app/models/Resturent';


interface Category {
  name: string
}


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  displayRestoDialog: boolean;
  displayMenu:boolean;
  restoForm: FormGroup;
  categories: Category[]; 
  forFormField: ResturentDetails[]=[];
  localItem: any;

  constructor(private fb: FormBuilder, private confirmationService: ConfirmationService, private router: Router) {
    this.categories = [
      { name: 'Vegeterian' },
      { name: 'Non-Vegeterian' },
      { name: 'Both' }
    ]
  }

  ngOnInit(): void {

    if(localStorage.getItem('forFormField')) {
      this.forFormField = JSON.parse(localStorage.getItem('forFormField') || '{}')
    }

    this.restoForm = this.fb.group({
      'name': new FormControl('',[Validators.required]),
      'address': new FormControl('',[Validators.required]),
      'categories': new FormControl('',[Validators.required]),
      'material': new  FormControl('',[Validators.required]),
      'price': new FormControl('',[Validators.required])
    })
  }

  showDialog() {
    this.displayRestoDialog = true;
  }
  formSubmition() {
    this.forFormField.push(this.restoForm.value);
    this.restoForm.reset();
    console.log(this.forFormField);
    localStorage.setItem("forFormField",JSON.stringify(this.forFormField));
  }
  logoutUser() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to Logout?',
      acceptLabel: "Yes",
      rejectLabel: "No",
      accept: () => {
        this.router.navigateByUrl('');
      }
    })
  }
  showmaterial(){
    this.displayMenu=true;

  }
  
}
