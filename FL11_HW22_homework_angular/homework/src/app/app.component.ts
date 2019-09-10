import {Component} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {newsList} from './shared/news-list/news-list.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    constructor(db: AngularFireDatabase) {
        newsList.connectDB(db);
    }
}
