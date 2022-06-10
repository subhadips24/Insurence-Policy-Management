import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplypolicieComponent } from './applypolicie.component';

describe('ApplypolicieComponent', () => {
  let component: ApplypolicieComponent;
  let fixture: ComponentFixture<ApplypolicieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplypolicieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplypolicieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
