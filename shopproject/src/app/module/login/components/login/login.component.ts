import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthEntityService } from 'src/app/services/auth/auth-entity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  constructor(private fb:FormBuilder,private router:Router, private authEntityService:AuthEntityService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      username:new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,Validators.required),
    })
  }

  login(){
    const payload ={
      username:this.form.value.username,
      password:this.form.value.password
    }
    this.authEntityService.add(payload).subscribe((res:any)=>{
      sessionStorage.clear()
      sessionStorage.setItem('token',res.access_token)
      this.router.navigateByUrl('/system')
    })
  }

}
