import { Component, OnInit } from '@angular/core';

import { WordsService } from '../words.service';
import { Word } from '../words';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
