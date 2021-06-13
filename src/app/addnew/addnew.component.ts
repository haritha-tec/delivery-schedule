import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Schedule } from '../datamodel/Schedule';
import { ScheduleDetails } from '../datamodel/ScheduleDetails';
import { IntermediateService } from '../intermediate.service';
import { IntermediateComponent } from '../intermediate/intermediate.component';
import { LocalstorageService } from '../localstorage/localstorage.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})

export class AddnewComponent implements OnInit {   
   
    public newIntermediateScheduleList:ScheduleDetails[]=[];
    newSchedule:Schedule=new Schedule();
    count:number=0;
    
    showAlert:boolean=false;
  
    constructor(public dialog: MatDialog,
    public service: IntermediateService,
    private r: ComponentFactoryResolver,
    private localStorageService:LocalstorageService,
    ) {
    this.service=service;
    this.localStorageService=localStorageService;
   }

  ngOnInit() {
    this.service.subscriber$.subscribe((Intermediateschedule:ScheduleDetails)=>{    
    this.newIntermediateScheduleList.push(Intermediateschedule);  
    });
  }
 
openDialog():void{
  const dialogRef = this.dialog.open(IntermediateComponent, {  
    width: '1000px',
    height:'500px'
  });
  }
 
  save(){
    this.count++;
    this.newSchedule.scheduleID="Sch" + this.count;
    this.newSchedule['Intermediate'] = this.newIntermediateScheduleList;

    // Save to local
   if(this.validate()){
    this.localStorageService.setInfo(this.newSchedule,this.newSchedule.scheduleID);
    this.resetAfterSave();
    alert("The schedule has been saved!!"); 
   }
   else{
    this.showAlert=true;
   }
  }

  validate():boolean{
    if((this.newSchedule.startPlace !='' && this.newSchedule.startdate !=null) && 
        (this.newSchedule.destPlace!='' && this.newSchedule.destDate!=null)){
          return true;
    }
    else{
      return false;
    }
  }

  resetAfterSave(){
    this.newIntermediateScheduleList=[];
    this.newSchedule = new Schedule();
  }

}
  
  
  


