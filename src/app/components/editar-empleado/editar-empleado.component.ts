import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/services/crud.service';
import { Empleado } from 'src/app/models/empleados.model';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  
  formularioDeEmpleado:FormGroup;
  idEmpleado:any;
  
  
  constructor( 
    public formulario:FormBuilder,
    private router:Router,
    private activateRoute:ActivatedRoute,
    private crudService:CrudService
  ) { 
    this.idEmpleado = this.activateRoute.snapshot.paramMap.get('id')
    console.log(this.idEmpleado)

    this.crudService.ObtenerEmpleado(this.idEmpleado).subscribe(
      resp => {
        this.formularioDeEmpleado.setValue({
          nombre:resp[0]['nombre'],
          correo:resp[0]['correo']
        });
      });

      this.formularioDeEmpleado = this.formulario.group(
        {
          nombre:[''],
          correo:['']
        }
      )
  }

  ngOnInit(): void {
  }

  updateEmpleado():any{
    console.log(this.idEmpleado)
    console.log(this.formularioDeEmpleado.value)

    this.crudService.UpdateEmpleado(this.idEmpleado, this.formularioDeEmpleado.value).subscribe(()=>{
      this.router.navigateByUrl('/listar-empleado');
    });
  }

}
