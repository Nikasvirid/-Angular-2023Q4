import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IItem, ILanguage, ISnippet } from 'src/app/search/search-item/search-item.model';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  
    


}