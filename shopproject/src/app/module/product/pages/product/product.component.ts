import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  data:any=null
  constructor() { }

  ngOnInit(): void {
  }

  onEdit(data:any){
    this.data=data
  }

}
