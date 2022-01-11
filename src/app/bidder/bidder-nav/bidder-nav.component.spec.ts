import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderNavComponent } from './bidder-nav.component';

describe('BidderNavComponent', () => {
  let component: BidderNavComponent;
  let fixture: ComponentFixture<BidderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
