import {Component, OnInit, Output} from '@angular/core';
import {NewsItem, newsList, NewsListService} from "../shared/news-list/news-list.service";

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.sass']
})
export class MainHeaderComponent implements OnInit {
  options: string[] = ['All sources'];
  curSource: string = 'All sources';

  changeSource(newSource: string){
    this.curSource = newSource;
    newsList.changeSourceFilter(newSource);
  }

  filterByHeader(){
    let newHeaderFilter = document.getElementById('headerFilter').value;
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
