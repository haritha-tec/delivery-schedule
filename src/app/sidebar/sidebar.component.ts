import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Router}from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private _router: Router) { }
  addNewItem(){
    this._router.navigate(['addnew']);
  }
  
}
