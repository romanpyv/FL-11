import {Component, Input, OnInit} from '@angular/core';
import {NewsItem, NewsListService} from "../shared/news-list/news-list.service";

@Component({
    selector: 'news-item',
    templateUrl: './news-item.component.html',
    styleUrls: ['./news-item.component.sass']
})
export class NewsItemComponent implements OnInit {

    @Input() item: NewsItem;

    constructor() {
    }

    ngOnInit() {
    }

}
