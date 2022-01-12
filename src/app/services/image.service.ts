import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(public http: HttpClient) { 

    this.http = http;
  }

  saveImage(uploadImageData: FormData): Observable<any>
  {
    return this.http.post(`${this.apiServerUrl}auction/images/upload`, uploadImageData);
  }
}
