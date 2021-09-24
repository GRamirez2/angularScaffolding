import { SampleService } from './sample.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

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

  starterData: idataSample[] = [{
    userId: 0,
    id: 0,
    title: '',
    body: ''
}]


  private dataSample = new Subject();
  dataSample$ = this.dataSample.asObservable();

  reset(){
    this.dataSample.next();
  }

  // private getValue() {
  //   return this.dataSample.getValue();
  // }

  loadPosts(){
    this.sampleService.getData()
    .subscribe((posts: idataSample) => {
      this.dataSample.next(posts)
    });
  }

}
