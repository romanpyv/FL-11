import {Component, OnInit} from '@angular/core';
import {newsList, NewsListService} from "../shared/news-list/news-list.service";

@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.sass']
})
export class NewsListComponent implements OnInit {
    private newsList: NewsListService = newsList;

    constructor() {
    }

    ngOnInit() {
    }

}
