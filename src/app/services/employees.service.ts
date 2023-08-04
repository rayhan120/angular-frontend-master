import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  url='https://localhost:7283/api/employees';

  baseApiUrl : string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
   
    return this.http.get<Employee[]>(this.baseApiUrl + 'api/employees');

  }


addEmployee(addEmployeeRequest : Employee): Observable<Employee>
{
  addEmployeeRequest.id ='00000000-0000-0000-000000000000'; 
  return this.http.post<Employee>(this.baseApiUrl + 'api/employees',addEmployeeRequest);
}

saveEmployee(saveEmployeeRequest : Employee) : Observable<Employee>
{

  saveEmployeeRequest.id ='00000000-0000-0000-000000000000';
 return this.http.post<Employee>(this.baseApiUrl + 'api/employees',saveEmployeeRequest)
}

saveuser(data:any){
  return this.http.post(this.url,data)
}

getEmployee(id : string): Observable<Employee>{
  return this.http.get<Employee>(this.baseApiUrl + 'api/employees/' + id);
}

updateEmployee(id : string, updateEmployeeRequest : Employee) : Observable<Employee>{


  return this.http.put<Employee>(this.baseApiUrl + 'api/employees/' + id,updateEmployeeRequest);
}

deleteEmployee(id : string) : Observable<Employee>{


  return this.http.delete<Employee>(this.baseApiUrl + 'api/employees/'+id);
}


}
