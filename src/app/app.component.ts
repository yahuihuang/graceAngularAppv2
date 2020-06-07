import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  /*
  template: `
    <h1>Bind Firestore collection example</h1>
    <ul>
      <li class="text" *ngFor="let note of notes$ | async">
        {{note.title}}
      </li>
    </ul>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']*/
  template: `
  <div class="appress-pwa-note">
    <app-header></app-header>
    <div class="main"> 
      <router-outlet></router-outlet>
    </div>
    
    <h1>Bind Firestore collection example</h1>
    <ul>
      <li class="text" *ngFor="let note of notes$ | async">
        {{note.title}}
      </li>
    </ul>
    <router-outlet></router-outlet>

    <app-footer></app-footer>
  </div>
  `,
})
export class AppComponent {
  notes$: Observable<any[]>;
  title = 'graceAngularApp';

  constructor(db: AngularFirestore) {
    this.notes$ = db.collection('notes').valueChanges();
  }
}
