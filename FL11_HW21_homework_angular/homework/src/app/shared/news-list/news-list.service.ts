import { Injectable } from '@angular/core';

export interface NewsItem {
  id: number
  title: string
  short: string
  body: string
  source: string
  date: any
  imageURL?: any
}

@Injectable({
  providedIn: 'root'
})
export class NewsListService {
  newsList: NewsItem[] = [];

  private sourceFilter: string = 'All sources';
  private headerFilter: string = '';

  constructor() { }

  changeSourceFilter(newSource: string){
    this.sourceFilter = newSource;
  }

  changeHeaderFilter(newHeader: string){
    this.headerFilter = newHeader;
  }

  getFilteredList(){
    let res: NewsItem[] = [];


    for (let i = 0; i < this.newsList.length; i++) {
      if ((this.newsList[i].source == this.sourceFilter ||
        this.sourceFilter == 'All sources') &&
        this.newsList[i].title.includes(this.headerFilter))
        res.push(this.newsList[i]);
    }

    return res;
  }

  addNews(news: NewsItem){
    this.newsList.push(news);
  }

}

let newsList = new NewsListService();
newsList.addNews({
  id: 1,
  title: 'Breaking news',
  short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa, cupiditate, dolorem ' +
      'dolores eligendi enim illum iusto magnam molestiae, mollitia natus nulla officia omnis porro ratione' +
      ' recusandae tempora. Autem, quibusdam.',
  source: 'Roman',
  date: new Date,
});
newsList.addNews({
  id: 2,
  title: 'Cats\' paws',
  short: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa, cupiditate, dolorem ' +
      'dolores eligendi enim illum iusto magnam molestiae, mollitia natus nulla officia omnis porro ratione' +
      ' recusandae tempora. Autem, quibusdam.',
  source: 'anonymous',
  date: new Date
});

export {newsList};
