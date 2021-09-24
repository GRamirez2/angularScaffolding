import { SampleService } from './sample.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface idataSample {
      userId: number;
      id: number;
      title: string;
      body: string;
}

@Injectable({
  providedIn: 'root'
})
export class SampleStoreService {

  constructor(
    private sampleService: SampleService
  ) { }


  private dataSample = new BehaviorSubject({});
  dataSample$ = this.dataSample.asObservable();

  reset(){
    this.dataSample.next({});
  }

  private getValue() {
    return this.dataSample.getValue();
  }

  loadPosts(){
    this.sampleService.getData()
    .subscribe((posts: idataSample) => this.dataSample.next(posts));
    console.log('done')
  }

}
