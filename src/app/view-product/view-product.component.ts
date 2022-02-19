import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Buyer } from '../buyer';
import { Product } from '../product';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  public products: Product[];

  
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

    public  getProduct(id: number)
    {
      this.service.getProduct(this.id)
      .subscribe(data => 
      {
      console.log(data)
      this.product = data;  
      },
      error =>
      {
         
        this.goToPayment();
      
        console.log(error)
      } 
      );
    }

   public goBackToAuction()
   {
    this.router.navigate(['/auction']);
   }

   gotToAddBid()
   {
    this.router.navigate(['/bidder/bid/' , this.product.id ]);
   }

   goToPayment()
   {
    this.router.navigate(['/bidder/payment']);
   }

}
