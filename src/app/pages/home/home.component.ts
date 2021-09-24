import { SampleStoreService } from '../../shared/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private sampleStoreService: SampleStoreService
  ) { }


  apiData$ = this.sampleStoreService.dataSample$
  toggleFlag: boolean = true;

  ngOnInit(): void {
    this.sampleStoreService.loadPosts();

  }

  reset(){
    this.sampleStoreService.reset();
  }

  reloadData(){
    this.sampleStoreService.loadPosts();
  }

  toggle(){
    this.toggleFlag = !this.toggleFlag
  }

}
