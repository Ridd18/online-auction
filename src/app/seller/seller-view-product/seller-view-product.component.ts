import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Bid } from 'src/app/bid';
import { Buyer } from 'src/app/buyer';
import { Product } from 'src/app/product';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-seller-view-product',
  templateUrl: './seller-view-product.component.html',
  styleUrls: ['./seller-view-product.component.css'],
})
export class SellerViewProductComponent implements OnInit {
  public products: Product[];

  public bid: Bid;

  public maxBid: Bid;

  bidProductName: string;

  public bids: Bid[];

  editProduct: Product;
  deleteProduct: Product;

  public product: Product = new Product();

  id: number;

  public buyers: Buyer[];

  public buyer: Buyer = new Buyer();

  email: string;

  selectedEmail: string;

  bidder$: any;

  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  img: any;
  hero$: any;
  product$: any;

  constructor(
    private router: Router,
    private service: RegistrationService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.getProduct(this.id);
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

  public getProduct(id: number) {
    this.service.getProduct(this.id).subscribe(
      (data) => {
        console.log(data);
        this.product = data;
      },
      (error) => {
        // this.getMaxBid(id);
        // this.goToPayment(this.id);

        console.log(error);
      }
    );
  }

  public goBackToAuction() {
    this.router.navigate(['/seller/viewAuction']);
  }

  gotToAddBid() {
    this.router.navigate(['/bidder/bid/', this.product.id]);
  }

  // goToPayment(id: number) {
  //   this.router.navigate(['/bidder/payment/', id]);
  // }
}
