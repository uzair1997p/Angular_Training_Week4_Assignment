import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
import { BlogSiteService } from '../../services/blog-site.service'




@Component({
  selector: 'app-createblogs',
  templateUrl: './createblogs.component.html',
  styleUrls: ['./createblogs.component.css']
})
export class CreateblogsComponent implements OnInit {

  constructor(private blogsite_service:BlogSiteService) {   
    
 
  }

   blog_object:any={
    title:"",
    author:"",
    description:"",
    imageUrl:"",
    isReadMore:true
  }

 
  
  handleFileInput(event:any) {
    this.blog_object.imageUrl = event.target.files[0].name;

  }
  handleForm(){
    console.log(this.blog_object)
    this.blogsite_service.setBlogObject(this.blog_object)
    this.blog_object={}
  }

  ngOnInit(): void {
  }

}
