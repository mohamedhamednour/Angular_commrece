import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ProductService } from '../../servies/product.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit, AfterViewChecked {
  product: any = [];
  baseData: any = [];
  addcards: any = [];
  category: string[] = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];
  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.getalldata();
     $('document').ready(()=>{
      $("#imgdev").show(3000);


    })


  }

  getalldata() {
    this.service.getAllData().subscribe((res: any) => {
      console.log(res);
      this.product = res;
      this.baseData = res;
    });
  }
  ngAfterViewChecked(): void {
    localStorage.setItem('products', JSON.stringify(this.baseData));

  }
  selectcat(event: any) {
    let cate = event.target.value;
    if (!this.category.includes(cate)) {
      console.log('zero');
    } else if (this.category.includes(cate)) {
      this.product = this.baseData.filter((cat: any) => cat.category == cate);
    } else if (cate == 'All') {
      this.getalldata();
    }
    console.log(cate);
  }
  addcard(event: any) {
    if ('card' in localStorage) {
      this.addcards = JSON.parse(localStorage.getItem('card')!);
      let exist = this.addcards.find((el: any) => el.id == event.id);
      if (exist) {
        console.log('id here');
      } else {
        this.addcards.push(event);
        localStorage.setItem('card', JSON.stringify(this.addcards));
      }
    } else {
      this.addcards.push(event);
      localStorage.setItem('card', JSON.stringify(this.addcards));
    }
  }
}
