import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Appetizer {
  id: string;
  title: string;
  price: number;
}

export interface Dish {
  id: string;
  title: string;
  price: number;
}

export interface Dessert {
  id: string;
  title: string;
  price: number;
}

export interface Menu {
  appetizers: Appetizer[];
  dishes: Dish[];
  desserts: Dessert[];
}

export interface FoodItem {
  id: string;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menu: Menu = {
    appetizers: [
      {
        id: 'app1',
        title: 'Salade Grecque',
        price: 6.5,
      },
      {
        id: 'app2',
        title: 'Feuilleté à la Feta',
        price: 7.0,
      },
    ],
    dishes: [
      {
        id: 'dish1',
        title: 'Gambas grillées au Safran',
        price: 17.0,
      },
      {
        id: 'dish2',
        title: 'Kebab maison - mix de viandes',
        price: 15.0,
      },
    ],
    desserts: [
      {
        id: 'des1',
        title: 'Lokum',
        price: 4.7,
      },
      {
        id: 'des2',
        title: 'Baklava',
        price: 4.2,
      },
    ],
  };

  http = inject(HttpClient);

  getMenu(): Observable<Menu> {
    return of(this.menu);
  }
}
