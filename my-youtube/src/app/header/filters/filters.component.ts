import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']

  
})
export class FiltersComponent {
  @Output() toggle = new EventEmitter<void>();

  onClick(): void {
    this.toggle.emit();
  }
}
