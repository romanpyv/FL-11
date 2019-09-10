import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewsItemComponent} from './news-item/news-item.component';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsItemExpandedComponent} from './news-item-expanded/news-item-expanded.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {AddNewsComponent} from './add-news/add-news.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

export const firebaseConfig = {
    apiKey: 'AIzaSyDfvprqHKeqKojpOKfGC5pFPp-_RAt_crw',
    authDomain: 'angular-test-c7cf9.firebaseapp.com',
    databaseURL: 'https://angular-test-c7cf9.firebaseio.com',
    projectId: 'angular-test-c7cf9',
    storageBucket: 'angular-test-c7cf9.appspot.com',
    messagingSenderId: '21995765224',
    appId: '1:21995765224:web:a2d765f493e699933db85d'
};

@NgModule({
    declarations: [
        AppComponent,
        NewsItemComponent,
        NewsListComponent,
        NewsItemExpandedComponent,
        MainHeaderComponent,
        AddNewsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
