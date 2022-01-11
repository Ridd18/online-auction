import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSellersComponent } from './get-sellers.component';

describe('GetSellersComponent', () => {
  let component: GetSellersComponent;
  let fixture: ComponentFixture<GetSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
