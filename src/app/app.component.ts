import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {

  }

  ngOnInit() {
    this.items = this.db.list('woerter', ref => ref.limitToFirst(10)).valueChanges();
  }

  addTodo(value1: string, value2: string): void {

    this.items.push({ sprache1: value1, sprache1: value2, timestamp: 12121212 });
  }

/*https://github.com/angular/angularfire2/blob/master/docs/rtdb/objects.md*/

}
