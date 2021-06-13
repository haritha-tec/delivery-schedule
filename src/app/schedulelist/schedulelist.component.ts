import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Schedule } from '../datamodel/Schedule';
import { LocalstorageService } from '../localstorage/localstorage.service';

@Component({
  selector: 'app-schedulelist',
  templateUrl: './schedulelist.component.html',
  styleUrls: ['./schedulelist.component.css']
})

export class SchedulelistComponent implements OnInit {

  static isBrowser = new BehaviorSubject<boolean>(null);
  myInfo$ = this.localStoreService.myData$;
  schedules:Schedule[]=[];  
 
  constructor(@Inject(PLATFORM_ID) private platformId: any,
  private localStoreService : LocalstorageService) { 
    SchedulelistComponent.isBrowser.next(isPlatformBrowser(platformId));
    this.localStoreService=localStoreService;
  }

  ngOnInit(): void {
    Object.keys(localStorage).forEach(data => 
      { 
        let item = localStorage.getItem(data);
        this.schedules.push(JSON.parse(item));
      });
  }

}
