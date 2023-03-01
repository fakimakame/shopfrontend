import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { resultMemoize } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ProductEntityService } from 'src/app/services/product/product-entity.service';
import sweetalert from 'sweetalert2'

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
@Output() editData:EventEmitter<any>=new EventEmitter()
loading$:Observable<boolean>=of(false)
product$:Observable<any[]>=of([])
TableColumns = [ 
  {name:'sn',label:'sno', type:'text'},
  {name:'productCode',label:'Product Code', type:'text'},
  {name:'productName',label:'Product Name', type:'text'},
  {name:'productPrice',label:'Selling Price', type:'currency'},
  {name:'action',label:'Action', type:'text'},
]
  constructor(private productEntityService:ProductEntityService) {
    this.loading$=this.productEntityService.loading$;
    this.product$=this.productEntityService.entities$;
   }

  ngOnInit(): void {
    this.productEntityService.getAll()
  }
  onDelete(data:any){
    sweetalert.fire({
      html: `Are you sure you want to Delete</b>`,
      title: 'Delete Product',
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
    .then((result)=>{
      if(result.isConfirmed){
        this.productEntityService.delete(data.id)
      }
    })

  }
  onEdit(data:any){
    this.editData.emit(data)
  }
}
