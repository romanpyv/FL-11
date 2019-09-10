import {Component, OnInit} from '@angular/core';
import {newsList} from '../shared/news-list/news-list.service';

@Component({
    selector: 'main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.sass']
})
export class MainHeaderComponent implements OnInit {
    options: string[] = ['All sources'];
    curSource = 'All sources';

    changeSource(newSource: string) {
        this.curSource = newSource;
        newsList.changeSourceFilter(newSource);
    }

    filterByHeader() {
        const newHeaderFilter = (document.getElementById('headerFilter') as HTMLInputElement).value;
        newsList.changeHeaderFilter(newHeaderFilter);
    }

    constructor() {
        for (let i = 0; i < newsList.newsList.length; i++) {
            if (!this.options.includes(newsList.newsList[i].source)) {
                this.options.push(newsList.newsList[i].source);
            }
        }
    }

    ngOnInit() {
    }

}
