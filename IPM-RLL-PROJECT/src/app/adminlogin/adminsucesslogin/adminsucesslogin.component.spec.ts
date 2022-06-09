import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsucessloginComponent } from './adminsucesslogin.component';

describe('AdminsucessloginComponent', () => {
  let component: AdminsucessloginComponent;
  let fixture: ComponentFixture<AdminsucessloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsucessloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsucessloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
