import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { BlogSiteService } from '../../../services/blog-site.service'



@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  

  constructor(
    public dialogRef: MatDialogRef<BlogEditComponent>,
      private blogsite_service:BlogSiteService) {
      this.blog_object=this.blogsite_service.getEditObject()

     }
  
  ngOnInit(): void {
    this.blogsite_service.updatedservice.subscribe(updated_service=>{
    this.blog_object=updated_service.getEditObject()
  })
  }

  blog_object:any={
    title:"",
    author:"",
    description:"",
    imageUrl:"",
    isReadMore:true
  }
  onNoClick(): void {

   // this.blogsite_service.EditBlog(this.blog_object)

    this.dialogRef.close();
  }

  formtoedit=true
  handleFileInput(event:any) {
    this.blog_object.imageUrl = '../../../../../assets/'+event.target.files[0].name;
  }
  handleFormEdit(){
    this.formtoedit=false
    this.blog_object={}
  }
  
  

}
