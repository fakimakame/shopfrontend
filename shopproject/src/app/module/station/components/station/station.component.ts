import { Component, OnInit } from '@angular/core';
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
  tableConfigurations = {
    tableList: [],
    tableColumns: [
      {name: 'taxpayerId', label: 'TIN Number', type: 'text'},
      {name: 'branchName', label: 'Branch Name', type: 'text'},
      {name: 'postalCity', label: 'Postal City', type: 'text'},
      {name: 'street', label: 'Street', type: 'text'},
      {name: 'status', label: 'Status', type: 'text'},
      
    ],
    showSearch: true,
    showBorder: true,
    allowPagination: true,
    useFullObject: true,
    actionIcons: {edit: false, delete: false, more: false},
    doneLoading: true,
    deleting: {},
    active: {},
    hideExport: true,
    empty_msg: 'No Companies Found',
  }
  actionButtonsStyle = 'button'
  hasDynamicActionButton = true
  constructor(
    private stationEntityService:StationEntityService
  ) { }

  ngOnInit(): void {
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
