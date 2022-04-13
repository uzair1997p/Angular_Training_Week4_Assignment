import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BlogSiteService } from '../../services/blog-site.service'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private blogsite_service:BlogSiteService,private toastr: ToastrService) { 
  }

  
  confirmPassword:string=""
  userObject:any={
      email: "",
      password: "",
      name:"",
      image:"avatar.png",
      designation:""
  }
  ngOnInit(): void {
  }
  routeLogin(){
    this.blogsite_service.flipSignUpUser();
  }
  registerUser(){
    if(this.userObject.password!=this.confirmPassword){
      this.toastr.error("Passwords donot match") 
    }
    else{
      this.blogsite_service.registerUser(this.userObject)
    }
  }


}
