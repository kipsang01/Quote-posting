import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  name!:string;
  content!:string;
  author!: string;
  newQuote:any;

  constructor() { }

  @Output() quoting = new EventEmitter<object>();

  quotes:Quote[] = [
    new Quote( "Enock Kipsang","It always seems impossible till it's done","Nelson Mandela"),
    new Quote( "Albert","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.","Steve Jobs"),
    new Quote( "Backley","Spread love everywhere you go. Let no one ever come to you without leaving happier.","Mother Theresa")

  ]

  submitQuote(){
    this.newQuote = new Quote (this.name, this.content,this.author)
    this.quoting.emit(this.newQuote);
    this.name = "";
    this.content = "";
    this.author = "";
  }

  ngOnInit(): void {
  }

}
