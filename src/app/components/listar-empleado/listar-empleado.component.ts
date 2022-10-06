import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleados.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  empleados:Empleado[] = [];

  constructor( private httpService:CrudService ) { }

  ngOnInit(): void {
    this.httpService.getEmpleados().subscribe( resp => {
      console.log(resp);
      this.empleados = resp;
    });
  }
  
  eliminarEmpleado(id:string, icontrol:number) {
    if(window.confirm("Desea borrar el registro?"))

    this.httpService.deleteEmpleado(id).subscribe(
      resp => {
        this.empleados.slice(icontrol, 1);
      });
      //ToDo revisar esto porque deberia refrescar automaticamente 
      this.ngOnInit();
  }

}
