import { Component, OnInit } from '@angular/core';
import { SampleStoreService } from '../../../shared/services';

@Component({
  selector: 'app-sub-home',
  templateUrl: './sub-home.component.html',
  styleUrls: ['./sub-home.component.scss']
})
export class SubHomeComponent implements OnInit {

  constructor(
    private sampleStoreService: SampleStoreService
  ) { }

  apiData$ = this.sampleStoreService.dataSample$

  ngOnInit(): void {
  }

}
