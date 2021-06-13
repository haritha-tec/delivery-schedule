import { Component, Inject, Output } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as EventEmitter from 'events';
import { from } from 'rxjs';
import{IntermediateService} from '../intermediate.service';
import{Schedule}from '../datamodel/Schedule'
import { ScheduleDetails } from '../datamodel/ScheduleDetails';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-intermediate',
  templateUrl: './intermediate.component.html',
  styleUrls: ['./intermediate.component.css']
})
export class IntermediateComponent  {
  public place:string;
  public date:string;
  public time:string;
  public newSchedule:ScheduleDetails;

  entity:ScheduleDetails=new ScheduleDetails();
 
  constructor(public dialogRef: MatDialogRef<IntermediateComponent>,public service: IntermediateService) { 
    this.service=service;
    
    //this.newIntermediate=new array<ScheduleDetails?;
  }
  showAlert:boolean=false;

  validate():boolean{
    if(this.entity.Place=='' || this.entity.Date==null ){
      return false
    }
    else{
      return true
    }

  }
  addDestination(event):void{   
     
    if(this.validate()){
      this.service.emitData(this.entity);
    this.dialogRef.close();
    this.showAlert=false
    }
    else{
      this.showAlert=true
    }   
    
  }
  close(){
    this.dialogRef.close();
  }
}
