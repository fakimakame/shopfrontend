import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StationEntityService } from 'src/app/services/station/station-entity.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  isForm=true;
  isStation=true;
  loading=true;
  stationData$:Observable<any[]>=of([])
  stationLoading$:Observable<boolean>=of(false)
  TableColumns = [
    {name: 'sn', label: 'S/No', type: 'text' },
    {name: 'stationName', label: 'Station Name', type: 'text' },
    {name: 'action', label: 'Action', type: 'text'},
  ];
  constructor(
    private stationEntityService:StationEntityService
  ) {
    this.stationLoading$=this.stationEntityService.loading$;
    this.stationData$=this.stationEntityService.entities$;
   }

  ngOnInit(): void {
    this.stationEntityService.getAll();
  }
  edit($event:any){

  }
  delete($event:any){

  }
  view($event:any){

  }

  displayForm(){
    this.isForm=true;
    this.isStation=false;
  }
  displayStation(){
    this.isForm=false;
    this.isStation=true;
  }

}
