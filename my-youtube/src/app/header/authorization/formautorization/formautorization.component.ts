import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-formautorization',
  templateUrl: './formautorization.component.html',
  styleUrls: ['./formautorization.component.scss']
})
export class FormautorizationComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}
  ngOnInit(): void {
    ;
  // }
  // async goToNextPage(){
  //   await this.router.navigate(['/formAutorization']);
  }

}

