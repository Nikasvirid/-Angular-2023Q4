import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  // @Output() search = new EventEmitter<string>();
  //  form: FormGroup = null;

  // constructor() {
  //   this.form = new FormGroup({
  //     search: new FormControl('')
  //   });
  // }

  // public onSubmit() {
  //   const { value } = this.form.get('search') as FormGroup;
  //   this.search.emit(value);
  // }
}