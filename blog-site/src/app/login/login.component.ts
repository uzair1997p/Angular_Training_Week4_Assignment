import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
import { BlogSiteService } from '../services/blog-site.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  blockedusers=new Map();
  signup_activated:boolean=false
   
  constructor(private toastr: ToastrService,
    private blogsite_service:BlogSiteService) {   
  }

  ngOnInit(): void {
    this.blogsite_service.updatedservice.subscribe((newservice)=>{
      this.blockedusers=newservice.blockedusers
      this.signup_activated=newservice.signup_activated
      this.selectedMenuItem=newservice.selectedmenuitem;
      this.authenticated=newservice.authenticated

      // if(this.selectedMenuItem=="logout"){
      //   this.authenticated=false
      // }
    })
  }
  signUpUser(){
    this.blogsite_service.flipSignUpUser()
  }

  authenticated=false;
  email="";
  password="";
  username:string=""   //email will be used as username which will be used to edit blogs   

  usernameauthenticated:string =""
  imageauthenticated:string =""
  selectedMenuItem:string =""
  addedBlogObject:any=null

  showToasterSuccess(){
    this.toastr.success("User Authenticated !",'',{positionClass: 'toast-center'}) 
  }
  showToasterFailiure(){
    this.toastr.error("User or password is incorrect") 
  }
  showToasterBlock(){
    this.toastr.error("User is blocked as user entered wrong password 3 or more times") 
  }
  authenticateUser(){

    let isauthenticated:boolean=this.blogsite_service.authenticateUser(this.email,this.password)

    if(isauthenticated){
      this.authenticated=true;
      this.showToasterSuccess()
      this.usernameauthenticated= this.blogsite_service.usernameauthenticated
       this.imageauthenticated=this.blogsite_service.imageauthenticated

      //setting email and password fields to empty
      this.username=this.email
      this.email=""
      this.password=""
      return true;      
    }

    this.authenticated=false;

    if(this.blogsite_service.blockedusers.get(this.email)==3){   //if three times wrong password is entered
      this.showToasterBlock();

      //setting email and password fields to empty
      this.email=""
      this.password=""
 
      return false;
    }
    else{
      this.blogsite_service.addBlockedUser(this.email)
    }

    this.showToasterFailiure()

    //setting email and password fields to empty
    this.email=""
    this.password=""

    return false;
  }
  fetchBlogItem(blogObject:object){
    this.blogsite_service.addBlogObject(blogObject)
  }

 

}
