import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalshopComponent } from './localshop.component';

describe('LocalshopComponent', () => {
  let component: LocalshopComponent;
  let fixture: ComponentFixture<LocalshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
