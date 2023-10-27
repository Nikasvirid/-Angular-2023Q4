import { Component } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {

}

// import { Component, Input, OnChanges } from '@angular/core';
// import { SearchItem } from './models/search-item.model';
// import { SearchResponse } from './models/search-response.model';
// import * as data from '../../mock/response.json';

// @Component({
//   selector: 'app-search-results',
//   templateUrl: './search-results.component.html',
//   styleUrls: ['./search-results.component.scss'],
// })
// export class SearchResultsComponent implements OnChanges {
//   @Input() public searchNameVideo = '';

//   @Input() public searchkeyWord = '';

//   @Input() public valueSort = '';

//   @Input() public flagSort = '';

//   responseData: SearchResponse = data;

//   items: SearchItem[] = this.responseData.items;

//   ngOnChanges() {
//     this.searchResult();
//   }

//   searchResult(): void {
//     if (!this.searchNameVideo) {
//       this.items = [];
//     } else this.items = this.responseData.items;
//   }
// }
