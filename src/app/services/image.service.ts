import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(public http: HttpClient) { 

    this.http = http;
  }

  saveImage(uploadImageData: FormData): Observable<any>
  {
    return this.http.post('http://localhost:8090/auction/images/upload', uploadImageData);
  }
}
