import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../search/search-item/search-item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  item: IItem | undefined;
  constructor(){

  }
  ngOnInit(): void {
      
  }

}
