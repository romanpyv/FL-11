import {Injectable} from '@angular/core';

export interface NewsItem {
    id: number;
    title: string;
    short: string;
    body: string;
    source: string;
    date: any;
}

@Injectable({
    providedIn: 'root'
})
export class NewsListService {
    newsList: NewsItem[] = [];

    private db;
    private sourceFilter = 'All sources';
    private headerFilter = '';

    constructor() {
    }

    changeSourceFilter(newSource: string) {
        this.sourceFilter = newSource;
    }

    changeHeaderFilter(newHeader: string) {
        this.headerFilter = newHeader;
    }

    getFilteredList() {
        const res: NewsItem[] = [];

        for (let i = 0; i < this.newsList.length; i++) {
            if ((this.newsList[i].source === this.sourceFilter ||
                this.sourceFilter === 'All sources') &&
                this.newsList[i].title.includes(this.headerFilter)) {
                res.push(this.newsList[i]);
            }
        }

        return res;
    }

    addNews(news: NewsItem) {
        this.db.list('/news').push(news);
    }

    connectDB(db) {
        this.db = db;
        db.list('/news').valueChanges().forEach(i => this.newsList = i);
    }
}

const newsList = new NewsListService();

export {newsList};
