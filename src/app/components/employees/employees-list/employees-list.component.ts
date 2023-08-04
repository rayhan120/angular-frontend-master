import { Component, OnInit } from '@angular/core';
 import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent  implements OnInit{
  
  // employees: Employee[] =[
  //   {
  //     id:'hsdf7898',
  //     name: 'rayhan',
  //     email:'rayhanm120@gmail.com',
  //     phone: 19877755332,
  //     salary: 4888,
  //     department: 'cse',
     
  //   },
  //   {
  //     id:'hsdf7erwer898',
  //     name: 'mitul',
  //     email:'rayhanm120@gmail.com',
  //     phone: 19877755332,
  //     salary: 4888,
  //     department: 'cse',
     
  //   },
  //   {
  //     id:'hsdfewrew7898',
  //     name: 'tomi',
  //     email:'rayhanm120@gmail.com',
  //     phone: 19877755332,
  //     salary: 4888,
  //     department: 'cse',
     
  //   },

  // ];

  employees: Employee[] =[];
  constructor(private employeeService: EmployeesService){
  }
  ngOnInit(): void {
      // this. employees.push()
      this.employeeService.getAllEmployees()
      .subscribe({
      next: (employees)=>{
         //console.log(employees);
        this.employees =employees;
      },
      error: (response)=>{
        console.log(response);

      }

      })
  }

}
