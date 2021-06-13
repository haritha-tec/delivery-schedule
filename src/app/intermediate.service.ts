import {ComponentFactoryResolver,Injectable} from '@angular/core'
import{NewdestinationComponent} from './newdestination/newdestination.component'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IntermediateService {
  observer = new Subject();
  public subscriber$ = this.observer.asObservable();

  emitData(data:any) {
    this.observer.next(data);
  }

  rootViewContainer:any;
  constructor(private factoryResolver: ComponentFactoryResolver) { }

  public setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  public addDynamicComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(NewdestinationComponent)
    const component = factory.create(this.rootViewContainer.parentInjector)
    
    this.rootViewContainer.insert(component.hostView)
  }

}
