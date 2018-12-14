import { Component, OnInit } from '@angular/core';
import { TestItemsService } from './test-items.service';
import { TestItem } from '../interface/test-item';

@Component({
  selector: 'app-test-items',
  templateUrl: './test-items.component.html',
  styleUrls: ['./test-items.component.css']
})
export class TestItemsComponent implements OnInit {
  testItems: TestItem[];

  constructor(private testItemsService: TestItemsService) { }

  ngOnInit() {
    this.getTestItems();
  }
  getTestItems(): void {
    this.testItemsService.getTestItems()
      .subscribe(testItems => this.testItems = testItems);
  }

}
