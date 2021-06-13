import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ScheduleDetails } from '../datamodel/ScheduleDetails';
import { IntermediateService } from '../intermediate.service';

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
