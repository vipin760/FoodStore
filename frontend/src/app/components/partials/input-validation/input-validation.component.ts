import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES:any={
  required:'should not be empty',
  email:'Email is not valid',
  minlength:'feild istoo short',
  notMatch:'password and confirm does not match'
}

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})


export class InputValidationComponent implements OnInit{
@Input()
control!:AbstractControl;
@Input()
showErrorsWhen:boolean=true;
errorMessages:string[]=[]

checkValidation(){
  const errors = this.control.errors
  if(!errors){
    this.errorMessages = []
    return
  }else{
    const errorKeys = Object.keys(errors)
    this.errorMessages = errorKeys.map(key=> VALIDATORS_MESSAGES[key])
  }
}

ngOnInit(): void {
  this.control.statusChanges.subscribe(()=>{
    this.checkValidation()
  })
  this.control.valueChanges.subscribe(()=>{
    this.checkValidation()
  })
  
}
ngOnChanges(changes: SimpleChanges):void{
  this.checkValidation();
}
}
