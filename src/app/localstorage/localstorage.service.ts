import { Injectable } from '@angular/core';
import{LocalstorageRefService} from '../localstorage-ref/localstorage-ref.service'
import{BehaviorSubject}from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private _localStorage: Storage;

  constructor(private _localStorageRefService: LocalstorageRefService) {
     this._localStorage = _localStorageRefService.localStorage

  }

  private _myData$ = new BehaviorSubject<any>(null)
   public myData$ = this._myData$.asObservable()

   setInfo(data: any,key:string) {
    const jsonData = JSON.stringify(data)
    this._localStorage.setItem(key, jsonData)
    this._myData$.next(data);
    
 }

 loadInfo() {
    const data = JSON.parse(this._localStorage.getItem('myData'))
    this._myData$.next(data)
 }

 clearInfo() {
    this._localStorage.removeItem('myData')
    this._myData$.next(null)
 }

 clearAllLocalStorage() {
    this._localStorage.clear()
    this._myData$.next(null)
 }
}
