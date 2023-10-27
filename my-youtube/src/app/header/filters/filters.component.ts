import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export default class FiltersComponent {

}

// import { Component, EventEmitter, Output } from '@angular/core';
// import { BySort } from './filters.model';

// @Component({
//   selector: 'app-filters',
//   templateUrl: './filters.component.html',
//   styleUrls: ['./filters.component.scss'],
// })
// export class FiltersComponent {
//   @Output() transmitkeyWordEventEmitter = new EventEmitter<string>();

//   @Output() transmitflagSortEventEmitter = new EventEmitter<string[]>();

//   public flagSortValue = '';

//   public activeClass = '';

//   public getKeyWordSearch(value: string) {
//     this.transmitkeyWordEventEmitter.emit(value);
//   }

//   public changeSortValue(value: string) {
//     if (this.flagSortValue === '' || this.flagSortValue === BySort.descending) {
//       this.flagSortValue = BySort.ascending;
//     } else this.flagSortValue = BySort.descending;
//     this.transmitflagSortEventEmitter.emit([value, this.flagSortValue]);
//     this.activeClass = value;
//   }
// }
