import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaishonComponent } from './faishon.component';

describe('FaishonComponent', () => {
  let component: FaishonComponent;
  let fixture: ComponentFixture<FaishonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaishonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaishonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
