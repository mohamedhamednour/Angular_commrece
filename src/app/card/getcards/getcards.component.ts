import { Component, OnInit } from '@angular/core';
interface Cards{
  id:number,
  price:number,
  title:string,
  image:any

}
@Component({
  selector: 'app-getcards',
  templateUrl: './getcards.component.html',
  styleUrls: ['./getcards.component.css']
})
export class GetcardsComponent{
  cards :any;
constructor(){

}

ngOnInit(): void {
  this.cards = JSON.parse(localStorage.getItem('card')!)
  console.log(this.cards , 'cards here')
}

removeitem(id:any){
  console.log(id)
  const greetings = JSON.parse(localStorage.getItem("card")!);
  const filtered = greetings.filter((item:any) =>  item.id !== id);
  localStorage.setItem("card", JSON.stringify(filtered));
  this.cards = JSON.parse(localStorage.getItem('card')!)


}
// identify(index :number, cards :Cards):number {

//   return cards.id;
// }
}
