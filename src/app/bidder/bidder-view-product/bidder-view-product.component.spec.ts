import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderViewProductComponent } from './bidder-view-product.component';

describe('BidderViewProductComponent', () => {
  let component: BidderViewProductComponent;
  let fixture: ComponentFixture<BidderViewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderViewProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
