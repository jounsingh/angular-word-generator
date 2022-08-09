import { Component } from '@angular/core';
import arrayWord from "../utils/words"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  word ='';
  wordLimit = 10;

  handleLimitChange = (limit:Event) => {
    
    this.wordLimit = parseInt((limit.target as HTMLInputElement).value)
  }

  generate = () => {
    this.word = arrayWord.slice(0,this.wordLimit).join(" ");
  }
}
