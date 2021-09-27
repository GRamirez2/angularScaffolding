import { Component, OnInit } from '@angular/core';
import { SampleStoreService } from '../../shared/services';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit{

  constructor(
    private sampleStoreService: SampleStoreService
  ) { }

  apiData$ = this.sampleStoreService.dataSample$

  ngOnInit(): void {
    // this.sampleStoreService.loadPosts();shouldn't need to make this call

  }

}
