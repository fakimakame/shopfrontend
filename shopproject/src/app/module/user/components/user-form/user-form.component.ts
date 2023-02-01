import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserEntityService } from 'src/app/services/user/user.entity.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() data:any
  userForm!:FormGroup
  constructor( private fb:FormBuilder,private userEntityService:UserEntityService) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      fullName:new FormControl(null,[Validators.required]),
      userName:new FormControl(null,[Validators.required]),
      role:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
      confirmPassword:new FormControl(null,[Validators.required]),
    })
  }

  onSave(){
    const payload = {
    id:0,
    fullName: this.userForm.value.fullName,
    username: this.userForm.value.userName,
    password: this.userForm.value.password,
    role: this.userForm.value.role,
    }
    this.userEntityService.add(payload).subscribe(res=>{
      console.log('result ====>',res)
    })

  }
  onClear(){
    this.userForm.reset()
  }

}
