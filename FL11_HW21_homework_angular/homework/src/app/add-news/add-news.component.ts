import { Component, OnInit } from '@angular/core';
import {NewsItem, newsList} from "../shared/news-list/news-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.sass']
})
export class AddNewsComponent implements OnInit {

  addNews(){
    let title = document.getElementById('title').value,
        short = document.getElementById('short').value,
        body = document.getElementById('body').value,
        source = document.getElementById('source').value,
        date = document.getElementById('date').value;

    if(title && short && body && source && date) {
      date = new Date(date + 'T00:00');

      let res: NewsItem = {
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

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
