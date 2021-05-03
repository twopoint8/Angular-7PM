import { Injectable }  from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class employeeService{

    var_one: string;
    var_two:string;
    var_three:string;

    constructor(){
        this.var_one = "Employee Data Soon....";
        this.var_two = "Product Data Soon.....";
        this.var_three = "Customer Data Soon....";
    }

}