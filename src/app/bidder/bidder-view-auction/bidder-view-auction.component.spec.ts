import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderViewAuctionComponent } from './bidder-view-auction.component';

describe('BidderViewAuctionComponent', () => {
  let component: BidderViewAuctionComponent;
  let fixture: ComponentFixture<BidderViewAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderViewAuctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderViewAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
