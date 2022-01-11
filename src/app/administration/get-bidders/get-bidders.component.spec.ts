import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBiddersComponent } from './get-bidders.component';

describe('GetBiddersComponent', () => {
  let component: GetBiddersComponent;
  let fixture: ComponentFixture<GetBiddersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBiddersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBiddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
