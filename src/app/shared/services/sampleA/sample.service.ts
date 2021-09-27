import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { take } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { idataSample } from '../../models/data.model';

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


