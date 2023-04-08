import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubShopsComponent } from './sub-shops.component';

describe('SubShopsComponent', () => {
  let component: SubShopsComponent;
  let fixture: ComponentFixture<SubShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubShopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
