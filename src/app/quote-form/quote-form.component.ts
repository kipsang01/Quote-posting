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
  show:boolean = false;

  constructor() { }

  @Output() quoting = new EventEmitter<{one:object,two:boolean}>();


  submitQuote(){
    this.newQuote = new Quote (this.name, this.content,this.author)
    this.quoting.emit({one:this.newQuote,two:this.show});
    this.name = "";
    this.content = "";
    this.author = "";
    //this.quoting.emit(this.show)
  }

  ngOnInit(): void {
  }

}
