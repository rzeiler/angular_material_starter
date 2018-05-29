import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {

  address = null;

  constructor() { }

  ngOnInit() {
  }

  addTodo(value: string): void {
      // ...
    }

  onSubmit() {
    alert("Thanks for submitting! Data: " + JSON.stringify(this.address));

    //const newId = items.push('new item').key();
  }

}
