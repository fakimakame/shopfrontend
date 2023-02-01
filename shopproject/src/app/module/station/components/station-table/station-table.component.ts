import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StationEntityService } from 'src/app/services/station/station-entity.service';
import { StationTableDataSource, StationTableItem } from './station-table-datasource';

@Component({
  selector: 'app-station-table',
  templateUrl: './station-table.component.html',
  styleUrls: ['./station-table.component.scss']
})
export class StationTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<StationTableItem>;
  dataSource: StationTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 public displayedColumns = ['id', 'stationName'];

  constructor(
    private stationEntityService:StationEntityService,
  ) {
    this.dataSource = new StationTableDataSource();
  }
  ngOnInit(): void {
    this.stationEntityService.getAll().subscribe(res=>{
      this.dataSource.data=res
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
