import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StationEntityService } from 'src/app/services/station/station-entity.service';
import { UserEntityService } from 'src/app/services/user/user.entity.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() data:any
  isEdited:boolean=false
  @Input() editedData:any
  station$:Observable<any[]>=of([])

  userForm!:FormGroup
  constructor( private fb:FormBuilder,
    private userEntityService:UserEntityService,
    private stationEntityService:StationEntityService) 
    {
      this.station$=this.stationEntityService.entities$;
     }

  ngOnInit(): void {
    this.stationEntityService.getAll();
    this.userForm=this.fb.group({
      fullName:new FormControl(null,[Validators.required]),
      userName:new FormControl(null,[Validators.required]),
      role:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
      confirmPassword:new FormControl(null,[Validators.required]),
      stationId:new FormControl(null,[Validators.required])
    })
  }

  ngOnChanges(){
    
    if(this.editedData){
      this.isEdited=true
      this.userForm.patchValue({
        fullName:this.editedData.fullName,
        userName:this.editedData.username,
        role:this.editedData.role,
        stationId:this.editedData.stationId
      })
    }
  }

  onUpdate(){
    const payload = {
      id:this.editedData.id,
      fullName: this.userForm.value.fullName,
      username: this.userForm.value.userName,
      password: this.userForm.value.password,
      role: this.userForm.value.role,
      stationId:this.userForm.value.stationId,
      }
      this.userEntityService.update(payload).subscribe(res=>{
        this.onClear()
      })
  }
  onSave(){
    const payload = {
    fullName: this.userForm.value.fullName,
    username: this.userForm.value.userName,
    password: this.userForm.value.password,
    role: this.userForm.value.role,
    stationId:this.userForm.value.stationId,
    }
    this.userEntityService.add(payload).subscribe(res=>{
      this.userForm.reset();
    })

  }
  onClear(){
    this.isEdited=false
    this.editedData=null
    this.userForm.reset()
  }

}
