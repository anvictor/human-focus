import {Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'human-focus';
  names:any=["Tom", "Jerry"];
  imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5XHDrHXrAPSEa_cnLLns-NQT_ohb2LxRW5oxSpKnJwWjNYTN';
  sideNav = [
    {sPath: "e-Folder_Home",
      sTitle: 'e-Folder Home',
      sIcon: 'dashboard',
      sClass: 'active'
    },
    {sPath: "Dashboard",
      sTitle: 'Dashboard',
      sIcon: 'dashboard',
      sClass: 'passive'
    },
    {sPath: "Dashboard-2",
      sTitle: 'Dashboard-2',
      sIcon: 'library_books',
      sClass: 'passive'
    },
    {sPath: "User_Profile",
      sTitle: 'User Profile',
      sIcon: 'person',
      sClass: 'passive'
    }]
}
