import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ContentChild,
  TemplateRef,
  OnDestroy,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  AfterViewInit,
  ChangeDetectorRef,
  OnChanges
} from '@angular/core';
import { Observable, Subscription, isObservable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']

  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent
  implements AfterViewInit, OnChanges, OnDestroy, OnInit
{
  
  @Input() stickyHeader=false
  @Input() maxHeight='auto'
  @Input() tableData: Observable<any[]>= of([]);
  @Input() loading: Observable<boolean> | boolean | null = false;
  @Input() columnHeader: any[] =[]  ;
  @Input() hasActionsColumn = true;
  @Input() hasSearch = true;
  @Input() showFirstLastButtons = true;
  @Input() serverPagination = false;
  @Input() totalElements: number = 0;
  @Input() actionPosition = 1;
  @Input() actionPosition2 = 0;
  @Input() actionPosition3 = 0;
  @Input() pageSizeStart = 10;
  @Input() pageSizeOptions = [10, 25, 50, 100];
  @Input() hasHighlighted: boolean = false;
  @Input() hasCustomStyle: boolean = false;
  @Output() pageEvent = new EventEmitter<PageEvent>();
  @Output() getRowData = new EventEmitter<any>();
  @Input() hasSN = 0;
  @Input() allowPagination:boolean = true
  objectKeys = Object.keys;
  listData?: MatTableDataSource<any> | any;
  searchKey: any = null;
  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ContentChild('actions') actions?: TemplateRef<any>;
  @ContentChild('actions2') actions2?: TemplateRef<any>;
  @ContentChild('actions3') actions3?: TemplateRef<any>;
  subscriptions: Subscription = new Subscription();
  noData: boolean = true;
  selectedRow: any;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {
  }

  getRowInfo(row: any) {
    if (this.hasHighlighted) {
      if (this.selectedRow === row) {
        this.selectedRow = null;
      } else {
        this.selectedRow = row;
      }
      this.getRowData.emit(this.selectedRow);
    }
  }

  ngOnChanges() {
    if (!isObservable(this.tableData)) {
      this.listData = new MatTableDataSource(this.tableData);
      if (!!this.listData.data) {
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.isEmpty(this.listData);
        this.changeDetectorRef.detectChanges();
      }
    }

    if (!isObservable(this.loading) && this.loading) {
      this.loading = of(this.loading);
    }
  }
  isEmpty(dataList: any) {
    if (!this.listData.data) {
      return (this.noData = true);
    }
    if (dataList.data.length === 0) {
      return (this.noData = true);
    } else {
      return (this.noData = false);
    }
  }
  ngAfterViewInit() {
    this.tableData.subscribe(res=>{
    })
    if (isObservable(this.tableData)) {
      this.subscriptions.add(
        this.tableData.pipe(distinctUntilChanged()).subscribe((data) => {
          this.listData = new MatTableDataSource(data);
          this.listData.sort = this.sort;
          if (!this.serverPagination) {
            this.listData.paginator = this.paginator;
          }
          this.changeDetectorRef.detectChanges();
          this.isEmpty(this.listData);
        })
      );
    } else {
      this.listData = new MatTableDataSource(this.tableData);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      this.isEmpty(this.listData);
    }
  }

  filterTable() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchKey = '';
    this.filterTable();
  }
  paginationEvent(data: any) {
    this.pageEvent.emit(data);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  get visibleColumnsIds() {
    let visibleColumnsIds = this.columnHeader?.map((column) => column.name)
    return visibleColumnsIds
  }
}
