import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IItem } from 'src/app/search/search-item/search-item.model';

@Component({
  selector: 'app-create-new-card',
  templateUrl: './create-new-card.component.html',
  styleUrls: ['./create-new-card.component.scss']
})
export class CreateNewCardComponent {
  @Output() create = new EventEmitter<IItem>();

  public cardForm = this.fb.group({
    title: ['', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]
    }],
    description:['', {
      validators: [
        Validators.maxLength(256)
      ]
    }],
    image:['', {
      validators: [
        Validators.required,
  
      ],
    }],
    video:['', {
      validators: [
        Validators.required,
        
      ],
    }],
    date:['', {
      validators: [
        Validators.required,
        
      ],
    }]
  })

constructor(private fb: FormBuilder) {}

  onSubmit() {
    if(this.cardForm.valid) {
      const {...cardDetails} = this.cardForm.value;
      this.create.emit(cardDetails as IItem);
    }
  }
}



function Output(): (target: CreateNewCardComponent, propertyKey: "create") => void {
  throw new Error('Function not implemented.');
}
 