import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Empleado } from '../models/empleados.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  Api:string = "http://localhost/empleados/";
  
  constructor( private httpService:HttpClient) { }

  //Agregar empleado
  agregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.httpService.post( this.Api + "?insertar=1", datosEmpleado );
  }

  getEmpleados():Observable<Empleado[]>{
    return this.httpService.get<Empleado[]>( this.Api )
  }

  deleteEmpleado(id:string):Observable<any>{
    return this.httpService.get( this.Api + "?borrar=" + id)
  }

  ObtenerEmpleado(id:string):Observable<any>{
    return this.httpService.get( this.Api + "?consultar=" + id)
  }

  UpdateEmpleado(id:string, datosEmpleado:Empleado ):Observable<any>{
    return this.httpService.post( this.Api + "?actualizar=" + id, datosEmpleado);
  }

}
