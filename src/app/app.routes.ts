import { Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {HistoryComponent} from './history/history.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];
