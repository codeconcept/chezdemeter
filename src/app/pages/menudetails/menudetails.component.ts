import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { FoodItem, MenuService } from '../../services/menu.service';
import { CurrencyPipe } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';

@Component({
  selector: 'app-menudetails',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './menudetails.component.html',
  styleUrl: './menudetails.component.css',
})
export class MenudetailsComponent implements OnInit {
  ngOnInit(): void {
    registerLocaleData(fr, 'fr');

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    const foodType = this.route.queryParams
      .pipe(
        tap((data) => {
          console.log({ dataType: data['type'], id: id! });
        }),
        switchMap((data: Params) => {
          return this.menuService.getMenuItem(data['type'], id!);
        })
      )
      .subscribe({
        next: (res) => {
          console.log({ insideNExt: res });
          this.menuItemSig.set(res);
        },
      });
  }

  route = inject(ActivatedRoute);
  menuService = inject(MenuService);
  menuItemSig = signal<FoodItem>({} as FoodItem);
}
