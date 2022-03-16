import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerViewAuctionComponent } from './seller-view-auction.component';

describe('SellerViewAuctionComponent', () => {
  let component: SellerViewAuctionComponent;
  let fixture: ComponentFixture<SellerViewAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerViewAuctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerViewAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
