import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/product';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css'],
})
export class BidComponent implements OnInit {

  public products: Product[];

  
  editProduct: Product;
  deleteProduct: Product;

  public product: Product = new Product();
  
  // product: Product;


  id: number;




  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  img: any;
  hero$: any;
  product$: any;

  constructor(private router: Router, 
    private service: RegistrationService,
    private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params
    .subscribe((params: Params) =>
    {
      this.id = +params['id'];
      console.log(this.id)
      
    }
    )
    
    this.getProduct(this.id);
  }

  
  public getProducts(): void
  {
    this.service.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

    public getProduct(id: number): void
    {
      this.service.getProduct(this.id)
      .subscribe(data => 
      {
      console.log(data)
      this.product = data;
      },
      error => console.log(error)
      );
    }

   public goBackToAuction()
   {
    this.router.navigate(['/auction']);
   }

   gotToAddNewBid()
   {
    // this.router.navigate(['/bidder/bid/', this.product.id ,'/addBid/', this.product.id]);
    this.router.navigate(['/bidder/addBid/', this.product.id]);
   }

}
