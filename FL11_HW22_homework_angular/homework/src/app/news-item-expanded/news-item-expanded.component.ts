import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsItem, newsList, NewsListService} from "../shared/news-list/news-list.service";

@Component({
    selector: 'app-news-item-expanded',
    templateUrl: './news-item-expanded.component.html',
    styleUrls: ['./news-item-expanded.component.sass']
})
export class NewsItemExpandedComponent implements OnInit {
    private item: NewsItem;

    constructor(
        private route: ActivatedRoute
    ) {
        let id = +this.route.snapshot.paramMap.get('id');
        for (let i = 0; i < newsList.newsList.length; i++) {
            if (newsList.newsList[i].id == id) {
                this.item = newsList.newsList[i];
                break;
            }
        }
    }

    ngOnInit() {
    }

}
