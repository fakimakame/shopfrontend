import { Component, OnInit } from '@angular/core';
import { StationEntityService } from 'src/app/services/station/station-entity.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {

  constructor(
    private stationEntityService:StationEntityService
  ) { }

  ngOnInit(): void {
    this.stationEntityService.getAll().subscribe(res=>{
      console.log("this is my result",res);
    })
  }

}
