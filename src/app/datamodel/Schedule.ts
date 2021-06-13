import { Time } from "@angular/common";
import{ScheduleDetails}from '../datamodel/ScheduleDetails'

export class Schedule{
public scheduleID:string;
 public startdate:Date;
 public startPlace:string;
 public startTime:Time;
 public destPlace:string;
 public destDate:Date;
 public destTime:Time;
 public Intermediate:ScheduleDetails[]=[]; 
 
 
}
