import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Store } from 'src/app/core';
import { StoreEntityService } from 'src/app/services/store/store-entity.service';
import { AddQuantityComponent } from '../add-quantity/add-quantity.component';

@Component({
  selector: 'app-store-data',
  templateUrl: './store-data.component.html',
  styleUrls: ['./store-data.component.scss']
})
export class StoreDataComponent implements OnInit {
  loading$:Observable<boolean>=of(false)
  storeData$:Observable<Store[]>=of([])
  TableColumns = [
    {name: 'sn', label: 'S/No', type: 'text' },
    {name: 'productName', label: 'Product Name', type: 'text' },
    {name: 'productCode', label: 'Product Code', type: 'text' },
    {name: 'quantity', label: 'Quantity', type: 'number' },
    {name: 'action', label: 'Action', type: 'text'},
  ];
  constructor(private storeEntityService:StoreEntityService,private dialog:MatDialog) { 
    this.loading$=this.storeEntityService.loading$
    this.storeData$=this.storeEntityService.entities$
  }

  ngOnInit(): void {
    this.storeEntityService.getAll();
  }

  onEdit(data:any){
    const dialogdef=this.dialog.open(AddQuantityComponent,{
      width:"600px",
      data :{...data}

    })
    
    dialogdef.afterClosed().subscribe(res=>{
      this.storeEntityService.getAll()
    })
  }

}
