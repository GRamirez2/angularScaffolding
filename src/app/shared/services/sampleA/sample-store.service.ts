import { SampleService } from './sample.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { idataSample } from '../../models/data.model';


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


  private dataSample = new BehaviorSubject(this.starterData);
  dataSample$ = this.dataSample.asObservable();

  reset(){
    this.dataSample.next(this.starterData);
  }

  private getValue() {
    return this.dataSample.getValue();
  }

  loadPosts(){
    if (this.getValue().length === 1){
      this.sampleService.getData()
      .subscribe((posts: idataSample[]) => this.dataSample.next(posts));
    }
    
  }

}
