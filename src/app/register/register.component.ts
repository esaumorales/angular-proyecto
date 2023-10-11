import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder:FormBuilder, private toastr:ToastrService,
    private service:AuthService, private router:Router){

  }
  registerform=this.builder.group({
    id: this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),
    usuario: this.builder.control('',Validators.required),
    contraseña: this.builder.control('',Validators.compose([Validators.required,Validators.minLength(6)])),
    rol: this.builder.control('')
  })
  proceedregistrar(){
    if(this.registerform.valid){
      this.service.Proceedregister(this.registerform.value).subscribe(res =>{
        this.toastr.success('Por favor Contacte con el Administrador para su acceso' ,'Registrado Con Exito')
        this.router.navigate(['login']);
      });

    }else{
      this.toastr.warning('Agregue Datos');
    }
  }

}
