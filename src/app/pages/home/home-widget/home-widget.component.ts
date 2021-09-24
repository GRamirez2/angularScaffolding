import { Component, Input, OnInit } from '@angular/core';
import { SampleStoreService } from '../../../shared/services';
@Component({
  selector: 'app-home-widget',
  templateUrl: './home-widget.component.html',
  styleUrls: ['./home-widget.component.scss']
})
export class HomeWidgetComponent implements OnInit {

  constructor(
    private sampleStoreService: SampleStoreService
  ) { }

  apiData$


  ngOnInit(): void {
    this.apiData$ = this.sampleStoreService.dataSample$
  }


}
