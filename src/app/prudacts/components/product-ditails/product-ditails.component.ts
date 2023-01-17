import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { ProductService } from '../../servies/product.service';
@Component({
  selector: 'app-product-ditails',
  templateUrl: './product-ditails.component.html',
  styleUrls: ['./product-ditails.component.css']
})
export class ProductDitailsComponent {
  id :any
  data :any  ={}

 constructor(private route:ActivatedRoute , private service :ProductService){
this.id = this.route.snapshot.paramMap.get('id')
console.log(this.id)
 }

 ngOnInit(): void {
  this.getalldata();
}

getalldata() {
  this.service.getAllDatabyid(this.id).subscribe((res: any) => {
    console.log(res);
    this.data = res

  });
}
}
