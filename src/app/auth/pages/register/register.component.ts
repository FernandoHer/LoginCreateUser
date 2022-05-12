import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent  {

  miFormulario: FormGroup = this.fb.group({
    name: ['Juan Perez',[Validators.required, Validators.minLength(6)]],
    email: ['text5@text.com',[Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });


  constructor( private fb:FormBuilder,
              private router:Router,
              private authServices: AuthService) { }

  register(){

    const {name, email, password} = this.miFormulario.value;

    this.authServices.registro(name, email, password)
        .subscribe( value => {
 
          if( value === true ){
            this.router.navigateByUrl('/dashboard')
          }else {
            Swal.fire('E R R O R', value, 'error')
          }
        });

    this.router.navigateByUrl('/dashboard')
  }

 

}
