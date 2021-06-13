import { Time } from "@angular/common";


export class ScheduleDetails{
  
    public Place:string;
    public Date:Date;
    public Time:Time;
    constructor(){
        this.Place="";
        this.Date=null;
        this.Time=null;
    }
}
    