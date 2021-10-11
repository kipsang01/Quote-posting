//import { NONE_TYPE } from '@angular/compiler';
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
  newquote:any
  newQuote:any;
  show:boolean = false;
  incomplete:boolean = false;

  constructor() { }

  @Output() quoting = new EventEmitter<{one:any,two:boolean}>();


  submitQuote(data:NgForm){
      this.newquote = data
      this.newQuote = new Quote (this.newquote.name, this.newquote.content,this.newquote.author)
      this.quoting.emit({one:this.newQuote,two:this.show});
      this.name = "";
      this.content = "";
      this.author = "";
}

  ngOnInit(): void {
  }

}
