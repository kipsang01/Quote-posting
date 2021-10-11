import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  content!:string;
  author!: string;
  newquote:any;
  show:boolean = false;

  constructor() { }

  quotes:Quote[] = [
    new Quote( "Enock Kipsang","It always seems impossible till it's done","Nelson Mandela"),
    new Quote( "Albert","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.","Steve Jobs"),
    new Quote( "Backley","Spread love everywhere you go. Let no one ever come to you without leaving happier.","Mother Theresa")

  ]



  ngOnInit(): void {
  }
  //display form
  showForm(){
    this.show =! this.show;

  }
  //upvote function
  upvoted(i:number):void{
    this.quotes[i].upvotes +=1;
     this.quotes.sort((a, b) => {
      return b.upvotes - a.upvotes;
    });
  }
  //downvote function
  downvoted(i:number):void{
    this.quotes[i].downvotes +=1;
  }
  //delete button
  deleteQuote(index:number){
    this.quotes.splice(index,1)
  }
  //adding quote
  addQuote(value:any){
    if (value.one == "") {
      alert("empty quotes")
      
    } else {
      this.newquote = value.one;
    this.quotes.unshift(this.newquote);
    this.quotes.sort((a, b) => {
      return b.upvotes - a.upvotes;
      });
    this.show = value.two;
  }
    }
    

}
