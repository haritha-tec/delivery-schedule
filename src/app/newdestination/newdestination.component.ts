import { Time } from '@angular/common';
import { Component, DoCheck, Input } from '@angular/core';
import { from } from 'rxjs';
import {IntermediateComponent} from '../intermediate/intermediate.component';
import{ScheduleDetails} from '../datamodel/ScheduleDetails';
@Component({
  selector: 'app-newdestination',
  templateUrl: './newdestination.component.html',
  styleUrls: ['./newdestination.component.css']
})
export class NewdestinationComponent {
public place:string;
public date:string;
public time:string;

@Input() intermediatePlace: string;

@Input() intermediateDate: string;
@Input() intermediateTime: string;
@Input() schedules:ScheduleDetails;


  constructor() { 
    console.log(this.schedules)
    this.place=this.schedules.Place;


    }
  

  
 
}
