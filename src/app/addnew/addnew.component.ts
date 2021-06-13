import {Component, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import{IntermediateComponent} from '../intermediate/intermediate.component'
import{IntermediateService} from '../intermediate.service';
import{Schedule}from '../datamodel/Schedule'
import { ScheduleDetails } from '../datamodel/ScheduleDetails';
import {LocalstorageService} from '../localstorage/localstorage.service'

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})

export class AddnewComponent implements OnInit {   
  
   
  
    public newIntermediateScheduleList:ScheduleDetails[]=[];
    newSchedule:Schedule=new Schedule();
    newScheduleList:any[]=[];
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
   
    })

  }
 
 
openDialog():void{
  const dialogRef = this.dialog.open(IntermediateComponent, {  
    width: '1000px',
    height:'500px'

  });

  }
 
  save(){  
    if(this.newSchedule && this.newSchedule!=null){     
      this.count++;
      this.newSchedule.scheduleID="sch" + this.count;
    }
    
    this.newScheduleList.push(this.newSchedule);
    this.newScheduleList[0]["Intermediate"].push(this.newIntermediateScheduleList);    
    
    // Save to local
   
    this.localStorageService.setInfo(this.newScheduleList,this.newSchedule.scheduleID);
    this.resetAfterSave();

    if(this.newSchedule && this.newSchedule!=null){
      this.showAlert=true;
    }  
  }
  resetAfterSave(){

    this.newIntermediateScheduleList=[];
    this.newSchedule.destDate=null;
    this.newSchedule.destPlace='';
    this.newSchedule.destTime=null;
    this.newSchedule.scheduleID='';
    this.newSchedule.startPlace='';
    this.newSchedule.startTime=null;
    this.newSchedule.startdate=null;
  }

}
  
  
  


