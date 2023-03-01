import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StationEntityService } from 'src/app/services/station/station-entity.service';
import sweetalert from 'sweetalert2'
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
  deleteStation(data:any){
    let id= data.id;
    sweetalert
    .fire({
      html: `Are you sure you want to Delete</b>`,
      title: 'Delete Station',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel',
      allowOutsideClick: false,
      showClass: {
        popup: '',
        icon: 'warning',
      },
      hideClass: {
        popup: '',
      },
    })
    .then((result:any) => {
      if(result.isConfirmed){
        this.stationEntityService.delete(id)
  }
})
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
