import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveinfoComponent } from './driveinfo.component';

describe('DriveinfoComponent', () => {
  let component: DriveinfoComponent;
  let fixture: ComponentFixture<DriveinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
