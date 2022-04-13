import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { NgpImagePickerModule } from 'ngp-image-picker';
import {MatDialogModule} from '@angular/material/dialog';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './login/header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './login/footer/footer.component';
import { HomeComponent } from './login/home/home.component';
import { BlogsComponent } from './login/blogs/blogs.component';
import { AboutComponent } from './login/about/about.component';
import { ContactComponent } from './login/contact/contact.component';
import { CreateblogsComponent } from './login/createblogs/createblogs.component';
import { BlogEditComponent } from './login/blogs/blog-edit/blog-edit.component';
import { SearchFilterPipe } from './login/blogs/search-filter.pipe';
import { SignUpComponent } from './login/sign-up/sign-up.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogsComponent,
    AboutComponent,
    ContactComponent,
    CreateblogsComponent,
    BlogEditComponent,
    SearchFilterPipe,
    SignUpComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    FontAwesomeModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatCardModule,
    NgpImagePickerModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
