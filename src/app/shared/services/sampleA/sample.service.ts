import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { idataSample } from './sample-store.service';
import { take } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) {}

  getData():Observable<idataSample[]> {

    const url = `https://jsonplaceholder.typicode.com/posts`;

    return this.http
        .get<idataSample[]>(url)
        .pipe(
          take(1)
        )
        // .catch(this.handleError);
  }

}


