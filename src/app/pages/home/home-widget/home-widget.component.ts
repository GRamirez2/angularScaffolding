import { SampleStoreService } from '../../../shared/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-widget',
  templateUrl: './home-widget.component.html',
  styleUrls: ['./home-widget.component.scss']
})
export class HomeWidgetComponent implements OnInit {

  constructor(
    private sampleStoreService: SampleStoreService
  ) { }

  apiData$ = this.sampleStoreService.dataSample$

  ngOnInit(): void {
  }

}
