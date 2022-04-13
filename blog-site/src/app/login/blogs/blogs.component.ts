import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogSiteService } from '../../services/blog-site.service'


export interface Blogs {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  isReadMore:boolean;
  createdby:string

}

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(public dialog: MatDialog,private blogsite_service:BlogSiteService) { 
    this.loggedinusername=blogsite_service.createdby
    this.blogs=blogsite_service.blogs_data
    this.filteredblogs=blogsite_service.blogs_data
  }

  ngOnInit(): void {
  
      this.blogsite_service.updatedservice.subscribe(updated_service=>{
      this.loggedinusername=updated_service.createdby      
      this.blogs=updated_service.blogs_data
      this.filteredblogs= this.blogs; 
    })

  }

  
  loggedinusername:string=""

  blogs:Blogs[]= []
  filteredblogs:Blogs[]= [];
  

  dialogRef:any;
  searchTitle:string=""
  
  filterBlogs(){
    // setTimeout(()=>{  //because of bug of ngModelChange
    //   this.filteredblogs = this.blogs.filter((val) => val.title.toLowerCase().includes(this.searchTitle));
    // },200)
  }
  openDialog(index:number) {
    this.blogsite_service.setEditIndex(index)
    const dialogRef = this.dialog.open(BlogEditComponent
    );

    dialogRef.afterClosed().subscribe(result => {
      //this.blogsite_service.EditBlog(result,index)
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteBlog(index:number) {
    console.log("delete pressed")
    this.blogsite_service.deleteBlog(index);
  }
  
  
 

  showText(i:number) {
    this.blogs[i].isReadMore=!this.blogs[i].isReadMore
  //  this.isReadMore = !this.isReadMore
 }

 

}
