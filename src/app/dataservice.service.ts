import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpClient: HttpClient) { }

  public getAllPost(): Observable<Post[]> {
	  return this.httpClient.get<Post[]>('http://localhost:8080/plaidoirie/post/all')
}

}

