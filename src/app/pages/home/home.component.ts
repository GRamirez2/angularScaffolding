import { SampleStoreService } from '../../shared/services/sampleA/sample-store.service';
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

  ngOnInit(): void {
    this.sampleStoreService.loadPosts();

  }

}
