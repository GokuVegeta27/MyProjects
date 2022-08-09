import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookinginfoService {

  constructor(private https:HttpClient) { }

  postData():Observable<any>{
    return this.https.post(' http://localhost:4600/Passengers',Object)
  }

}
