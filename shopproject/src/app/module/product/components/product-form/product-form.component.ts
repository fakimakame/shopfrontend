import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, of, tap } from 'rxjs';
import { ProductEntityService } from 'src/app/services/product/product-entity.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() data:any=null;
  productForm!:FormGroup
  loading$:Observable<boolean>=of(false);
  product$:Observable<any[]>=of([])
  constructor(private fb:FormBuilder,private productEntityService:ProductEntityService) 
  { 
    this.loading$=this.productEntityService.loading$;
    this.product$=this.productEntityService.entities$;
  }
  ngOnChanges(changes: SimpleChanges){
    if(this.data){
      this.productForm.patchValue({
        productCode:this.data.productCode,
        productName:this.data.productName,
        productPrice:this.data.productPrice,
      })
    }
  }

  ngOnInit(): void {
    this.productForm=this.fb.group({
      productCode:new FormControl(null, [Validators.required]),
      productName:new FormControl(null, [Validators.required]),
      productPrice:new FormControl(null, [Validators.required]),
    })
  }

  onSave(){
    this.productEntityService.add(this.productForm.value)
    this.onClear()
  }
  
  onEdit(){
    const payload = {
      ...this.productForm.value,
      id:this.data.id
    }
    this.productEntityService.update(payload).pipe(
      tap(res=>{
        console.log('val',res)
      })
      )
  }
  onClear(){
    this.productForm.reset()
    this.data = null
  }

}
