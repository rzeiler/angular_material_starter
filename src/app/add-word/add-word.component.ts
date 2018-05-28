import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {

  //address = new Address();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert("Thanks for submitting! Data: " + JSON.stringify(this.address));
  }

}
