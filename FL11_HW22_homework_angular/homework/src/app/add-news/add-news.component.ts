import {Component, OnInit} from '@angular/core';
import {NewsItem, newsList} from '../shared/news-list/news-list.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-news',
    templateUrl: './add-news.component.html',
    styleUrls: ['./add-news.component.sass']
})
export class AddNewsComponent implements OnInit {

    addNews() {
        const title = (document.getElementById('title') as HTMLInputElement).value;
        const short = (document.getElementById('short') as HTMLInputElement).value;
        const body = (document.getElementById('body') as HTMLInputElement).value;
        const source = (document.getElementById('source') as HTMLInputElement).value;
        const date = (document.getElementById('date') as HTMLInputElement).value;

        if (title && short && body && source && date) {
            const res: NewsItem = {
                id: newsList.newsList.length + 1,
                title,
                source,
                short,
                date,
                body
            };

            newsList.addNews(res);
            this.router.navigate(['/']);
        } else {
            alert('Wrong input');
        }
    }

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

}
