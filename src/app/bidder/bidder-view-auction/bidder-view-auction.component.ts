import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/product';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-bidder-view-auction',
  templateUrl: './bidder-view-auction.component.html',
  styleUrls: ['./bidder-view-auction.component.css'],
})
export class BidderViewAuctionComponent implements OnInit {
  public products: Product[];

  selectedId: number;

  product$: any;

  id: number;

  constructor(
    private router: Router,
    private service: RegistrationService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProducts();

    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = Number(params.get('id'));
        console.log(this.selectedId);
        return this.service.getProducts();
      })
    );
  }

  public getProducts(): void {
    this.service.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchProducts(key: string): void {
    console.log(key);
    const results: Product[] = [];
    for (const product of this.products) {
      if (
        product.productName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        product.categoryName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(product);
      }
    }
    this.products = results;
    if (results.length === 0 || !key) {
      this.getProducts();
    }
  }

  getAllProducts() {
    this.getProducts();
  }
}
