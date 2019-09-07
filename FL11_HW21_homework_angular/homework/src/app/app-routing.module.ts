import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsListComponent} from "./news-list/news-list.component";
import {NewsItemExpandedComponent} from "./news-item-expanded/news-item-expanded.component";
import {AddNewsComponent} from "./add-news/add-news.component";


const routes: Routes = [
  {
    path: 'news',
    component: NewsListComponent
  },
  {
    path: 'news/:id',
    component: NewsItemExpandedComponent
  },
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
