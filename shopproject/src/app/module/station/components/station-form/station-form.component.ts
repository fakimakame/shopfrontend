import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StationModel } from 'src/app/core';
import { StationEntityService } from 'src/app/services/station/station-entity.service';

@Component({
  selector: 'app-station-form',
  templateUrl: './station-form.component.html',
  styleUrls: ['./station-form.component.scss']
})
export class StationFormComponent implements OnInit {
stationForm!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private stationEntityService:StationEntityService,
  ) { }

  ngOnInit(): void {
  this.stationForm=this.fb.group({
    stationName:new FormControl(null,[Validators.required])
  })
  }

  registerStation(){
    const payload={
      stationName:this.stationForm.get('stationName')?.value
    }
    
    this.stationEntityService.add(payload).subscribe(res=>{
      this.stationForm.reset()
    })
  }

}
