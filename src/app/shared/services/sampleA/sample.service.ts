import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { idataSample } from './sample-store.service';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) {}

  getData(){

    const url = `https://jsonplaceholder.typicode.com/posts`;

    return this.http
        .get<idataSample>(url)
        // .catch(this.handleError);
  }


}
