import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogSiteService } from '../../services/blog-site.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit  {


  constructor(private blogsite_service:BlogSiteService) {
    
    this.name=blogsite_service.usernameauthenticated
    this.imageUrl=blogsite_service.imageauthenticated

  }
  ngOnInit(): void {
    
    this.blogsite_service.updatedservice.subscribe(updated_service=>{
      this.name=updated_service.usernameauthenticated
      this.imageUrl=updated_service.imageauthenticated
      
    })
  }
   name:string ="";
   imageUrl:string ="";

  selectedMenuItem:string=""

 

  selectMenuItem(event:any){
    this.blogsite_service.selectMenuItem(event.target.innerText.toLowerCase());
  }


}
