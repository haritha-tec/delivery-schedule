import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdestinationComponent } from './newdestination.component';

describe('NewdestinationComponent', () => {
  let component: NewdestinationComponent;
  let fixture: ComponentFixture<NewdestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
