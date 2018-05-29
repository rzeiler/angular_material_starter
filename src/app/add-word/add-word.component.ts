import { Component, OnInit } from '@angular/core';
import { Word } from '../words';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {

customer: FirebaseObjectObservable<Word> = null;
customers: FirebaseListObservable<Word[]> = null;

  word = new Word();

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() { }

  onSet(word) {

    word.timestamp = Math.round(new Date().getTime() / 1000);

    const items = this.db.object('/woerter');
    const newId = items.set(word).key();

    alert(newId);
    alert(word.sprache1);

    /*
    .then((item) => this._successCadastro(item))
    .catch((err) => this._errorCadastro(err));
    }
    */

  }

  private handleError(error) {
    console.log(error);
  }

}
