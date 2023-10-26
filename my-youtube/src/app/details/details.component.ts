import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      works bonjour!
    </p>
  `,
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {

}
