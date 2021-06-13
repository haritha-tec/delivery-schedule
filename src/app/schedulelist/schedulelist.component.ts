import { Component, OnInit,PLATFORM_ID,Inject } from '@angular/core';
import{BehaviorSubject} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';
import{LocalstorageService} from '../localstorage/localstorage.service'
import { Schedule } from '../datamodel/Schedule';

@Component({
  selector: 'app-schedulelist',
  templateUrl: './schedulelist.component.html',
  styleUrls: ['./schedulelist.component.css']
})
export class SchedulelistComponent implements OnInit {

  static isBrowser = new BehaviorSubject<boolean>(null);
  myInfo$ = this.localStoreService.myData$;
  eachSchedues:Schedule[]=[];  
 
  constructor(@Inject(PLATFORM_ID) private platformId: any,
  private localStoreService : LocalstorageService) { 
    SchedulelistComponent.isBrowser.next(isPlatformBrowser(platformId));
    this.localStoreService=localStoreService;
  }

  ngOnInit(): void {
  
  //  this.myInfo$.subscribe((item:Schedule)=>{
  //   this.eachSchedues=item;
  //   this.allSchedules.push(this.eachSchedues);

    Object.keys(localStorage).forEach(data => 
      {
        
        let item = localStorage.getItem(data);
        this.eachSchedues=JSON.parse(item);       
        
      });

  // })
   
  }

 

}
