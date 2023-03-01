import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { ProductEntityService } from 'src/app/services/product/product-entity.service';
import { PurchaseEntityService } from 'src/app/services/purchase/purchase-entity.service';

@Component({
  selector: 'app-add-quantity',
  templateUrl: './add-quantity.component.html',
  styleUrls: ['./add-quantity.component.scss']
})
export class AddQuantityComponent implements OnInit {
  loadingProduct$:Observable<boolean>=of(false)
  productData$:Observable<any[]>=of([])
  form!:FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private productEnityService:ProductEntityService,
    private purchaseEntityService:PurchaseEntityService,
    private fb:FormBuilder,
    private dialog:Dialog) { 
    this.loadingProduct$=this.productEnityService.loading$
    this.productData$=this.productEnityService.entities$
  }

  ngOnInit(): void {
    this.productEnityService.getAll()
    console.log('My data ',this.data)
    this.form=this.fb.group({
      buyingPrice:new FormControl(null,Validators.required),
      quantity:new FormControl(null,Validators.required),
      buyingDate:new FormControl(null,Validators.required),
      productId:new FormControl(this.data.id,Validators.required),
    })
  }

  onSave(){
    this.purchaseEntityService.add(this.form.value).subscribe(res=>{
      this.dialog.closeAll()
    })
    
  }
  onCancel(){

  }

}
