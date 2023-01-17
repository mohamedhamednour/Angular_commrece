import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorysrondom',
  templateUrl: './categorysrondom.component.html',
  styleUrls: ['./categorysrondom.component.css']
})
export  class CategorysrondomComponent implements OnInit {
   allproduct :any = []
ngOnInit(): void {

}

  ngAfterViewChecked(): void {
  this.allproduct=  JSON.parse(localStorage.getItem('products')!);

  }

}
