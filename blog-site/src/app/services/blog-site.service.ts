import { EventEmitter, Injectable, Output } from '@angular/core';

export interface Blogs {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  isReadMore:boolean;
  createdby:string

}

@Injectable({
  providedIn: 'root'
})

export class BlogSiteService {

  constructor() { }




  blogs_data=[{
    "title":"Choose to be me...",
    "author":"Will Smith",
    "description": "Damn! I lost a trollbead I had just purchased this afternoon(special shopping sunday in my town today).I didnt put the head on my bracelet right away,but just put the small paperbag with the trollbead into my bag.And somewhere along the way home in one of the other shops where I took my wallet out of my bag the paperbag must have fallen out,because it wasnt in my bag,when I got home.I will check the stores tomorrow afternoon,but I dont have musch hope that will get back the paperbag.It might also have fallen out when I took out some letters I posted at the mail box.Damn!"
    ,
    "imageUrl":"blog1.PNG",
    "isReadMore":true,
    "createdby":"test1@test.com"
  },
  {
    "title":"Introducing… Smiley Candy Cups!",
    "author":"Natalie Baker",
    "description": "Our family wanted to create something that could be a way for people to love on others! We’ve been getting crafty around here working on something FUN!\n Introducing…Smiley Candy Cups!\n It’s a new label under our @Shopathomewithnatalie!\n Smiley Candy Cups is Drinkware for Gifting Occasions and Everyday FUN!\n You pick a cup, have the option to choose a candy mix, we packaged it up cute and send some fun mail out to make someone smile!",
    "imageUrl":"blog2.PNG",
    "isReadMore":true,
    "createdby":"test2@test.com"
  },
  {
    "title":"Safety Locks in our New Home",
    "author":"Emma Raduccanu",
    "description": "In our last house we used The Door Guardian on our front door. Hunter was a runner!! They worked great there so I knew we had to install them in our new house. Locks can sometimes be so dang complicated to install or a pain to use in the day to day. (Don’t even get me going on the price points!) But now that we’ve tried The Door Guardian I can never use anything else! They are up in our new home and give me such peace of mind.\n Our boys have some best buddies across the street and my worst fear is that Hunter would run over without me. "
    ,
    "imageUrl":"blog3.PNG",
    "isReadMore":true,
    "createdby":"test2@test.com"
  },
  {
    "title":"Fried Cheese Recipe",
    "author":"Mariam Ali",
    "description": "You need this recipe in your life. You can whip these up for the perfect salty cheesy side, appetizer OR make it the main dish and have it with a yummy salad!\n We’ve been making this recipe for years. It’s one of those recipes that gets everyone cheering when they see the fresh mozzarella in the fridge!\n You’ll never want to have the boxed freezer mozzarella sticks again… trust me- instant family favorite! First things first..this is the cheese you want to get! Whatever brand you want..but the pre sliced fresh mozzarella that is in a loaf shape"
    ,
    "imageUrl":"blog4.PNG",
    "isReadMore":true,
    "createdby":"test1@test.com"
  },
  {
    "title":"Sophia’s 13th Birthday – 90’s Theme!",
    "author":"Jack Tuner",
    "description": "We officially have a teenager over here! Sophia’s 90’s Themed Birthday Party post is well overdue.. finally made it happen! Ben and I were pretty pleased with her theme choice. haha. Time to relive our glory days! ;) Sophia had some fun ideas that she had pinned from Pinterest and just a few requests- sweets + and photo backdrop set up. I can do that! To throw a 90’s themed party you pretty much have to just grab all the classic processed food you can find haha. The kids were loving it. This theme was fun and easy to throw together! Let’s dive into the party sources, including the awesome $10 backdrop I found on Amazon!"
    ,
    "imageUrl":"blog5.PNG",
    "isReadMore":true,
    "createdby":"test2@test.com"
  }
]
  

  usernameauthenticated:string=""
  imageauthenticated:string=""
  selectedmenuitem:string=""
  createdby:string=""
  editindex:number=0
  signup_activated:boolean=false
  authenticated:boolean=false;
  blockedusers=new Map();

  @Output() updatedservice= new EventEmitter<any>();



  
  users = [
    {
      email: "test1@test.com",
      password: "abcd@1234",
      name:"Ali",
      image:"avatar.png",
      designation:"Doctor"
    },
    {
      email: "test2@test.com",
      password: "abcd@1234",
      name:"Kamran",
      image:"avatar.png",
      designation:"Engineer"
    }
   ]

   flipSignUpUser(){
     this.signup_activated=!this.signup_activated
     this.updatedservice.emit(this)
   }

   authenticateUser(email:string,password:string){

    for (let user of this.users) {
      if(user.email==email && user.password==password){   //if user is authenticated

        this.usernameauthenticated=user.name
        this.imageauthenticated=user.image
        this.createdby=user.email
        this.authenticated=true
        this.updatedservice.emit(this)

       
        
        return true;
      }
    }

    return false
    //this.authenticated=false;

   }
   addBlockedUser(email:string){
    this.blockedusers.set(email, (this.blockedusers.get(email) ?? 1) + 1)
    this.updatedservice.emit(this)
   }

   selectMenuItem(selectedmenuitem:string){   
      this.selectedmenuitem=selectedmenuitem
      if(this.selectedmenuitem=="logout"){
        this.authenticated=false
      }
      this.updatedservice.emit(this)
   }
   addBlogObject(blogobject:any){
     this.blogs_data.push(blogobject)
     this.updatedservice.emit(this)
   }
  setBlogObject(blog_object:any){
    blog_object.createdby=this.createdby
    this.blogs_data.push(blog_object)
    this.updatedservice.emit(this)
  }
  EditBlog(editedBlog:any){
    this.blogs_data[this.editindex]=editedBlog
    this.updatedservice.emit(this)
  }
  deleteBlog(index:number){
    console.log(index)
    let deleteelement=this.blogs_data[index]
    this.blogs_data=this.blogs_data.filter(blog=>{
      return blog!==deleteelement
    })
    //console.log(this.blogs_data)
    this.updatedservice.emit(this)
  }

  setEditIndex(index:number){
    this.editindex=index
    this.updatedservice.emit(this)

  }
  getEditObject(){
    return this.blogs_data[this.editindex]
  }
  registerUser(userObject:any){
   
    this.users.push(userObject)
    console.log(this.users)
    this.usernameauthenticated=userObject.name
    this.imageauthenticated=userObject.image
    this.createdby=userObject.email
    
    //authenticate user so login screen is displayed
    this.authenticated=true;
    this.signup_activated=false;
    this.updatedservice.emit(this)
  }


}
