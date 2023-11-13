import { ChangeDetectionStrategy, Component, EventEmitter} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
export interface IUser {
  name:string;
  password: string;
  token?: string;
}

@Component({
  selector: 'app-formautorization',
  templateUrl: './formautorization.component.html',
  styleUrls: ['./formautorization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormautorizationComponent  {

  public loginForm = this.fb.group({
    email: ['', {
      validators: [Validators.required, Validators.email],
    }],
    password: ['', {
      validators: [
        Validators.required, 
        Validators.minLength(8),
        createPasswordValidator()
      ]
    }]
  })

  public isHidden: boolean = true;

  @Output() public loginEvent = new EventEmitter();
  
  constructor(private fb: FormBuilder) {}

  loginUser(): void {
    const user: IUser = {
      name: this.loginForm.value.email!,
      password: this.loginForm.value.password!,
    };
    this.loginEvent.emit(user);
  }

  handlePassVisibility() {
    this.isHidden = !this.isHidden;
  }

}


function createPasswordValidator(): any {
  throw new Error('Function not implemented.');
}

function Output(): (target: FormautorizationComponent, propertyKey: "loginEvent") => void {
  throw new Error('Function not implemented.');
}

