import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { ResturentDetails } from 'src/app/models/Resturent';

interface Category {
  name: string
}

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  categories: Category[];
  orderBox:boolean;
  forFormField: ResturentDetails[]=[];
  menuItem: ResturentDetails[]=[];
  totalPrice:number = 0;
  displayMenu:boolean;
  checked: boolean = false;

  constructor(private confirmationService: ConfirmationService,private router: Router,private messageService: MessageService,private primengConfig: PrimeNGConfig) { 
    this.categories = [
      { name: 'Vegeterian' },
      { name: 'Non-Vegeterian' },
      { name: 'Both' }
    ]
  }

  ngOnInit(): void {
    // if(localStorage.getItem('forFormField')) {
    //   this.forFormField = JSON.parse(localStorage.getItem('forFormField') || '{}')
    // }
    this.primengConfig.ripple = true;
  }
  logOutCustomer() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to Logout?',
      acceptLabel: "Yes",
      rejectLabel: "No",
      accept: () => {
        this.router.navigateByUrl('');
        console.log(this.forFormField)
      }
    })
  }
  showDialog(){
    this.orderBox=true;
  }
  showmaterial(){
    this.displayMenu=true;
  }

  onChange(val:any){
    this.forFormField = [];
    var length  =  JSON.parse(localStorage.getItem('forFormField') || '{}').length;
    for (let index = 0; index < length; index++) {      
      const element = JSON.parse(localStorage.getItem('forFormField') || '{}')[index];
      if(element.categories === val.value.name) {
        console.log("Line63", element);
        this.forFormField.push(element);
      }
    }
    console.log("Line69",this.forFormField);
  }

  appendOrder(index: number){
    if(this.forFormField[index].isOrder) {
      this.totalPrice = this.totalPrice + this.forFormField[index].price;
      this.menuItem.push(this.forFormField[index]);
    }
    console.log(this.forFormField[index]);
    console.log(index);
  }
  confirm(){
    this.confirmationService.confirm({
      message: "Are you sure that you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "Order Successfully Accepted"
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "Ordered Rejected"
        });
      }
    });
  }

  addToCart() {

  }
}
