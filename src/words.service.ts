import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Word} from './words';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private dbPath: string = 'https://learn-a9f73.firebaseio.com/woerterbuch';

  word: FirebaseObjectObservable<Word> = null;
  words: FirebaseListObservable<Word[]> = null;

  constructor(private db: AngularFireDatabase) {}

  getCustomer(key: string): FirebaseObjectObservable<Customer> {
    this.word = this.db.object(`${this.dbPath}/${key}`);
    return this.word;
  }

  createCustomer(word: Word): void {
    this.words.push(word).catch(error => this.handleError(error));
  }

  updateCustomer(key: string, value: any): void {
    this.words.update(key, value).catch(error => this.handleError(error));
  }

  deleteCustomer(key: string): void {
    this.words.remove(key).catch(error => this.handleError(error));
  }

  getCustomersList(query = {}): FirebaseListObservable<Word[]> {
    this.words = this.db.list(this.dbPath, {
      query: query
    });
    return this.words;
  }

  deleteAll(): void {
    this.words.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
