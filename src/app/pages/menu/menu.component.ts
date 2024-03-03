import { Component, OnInit, inject, signal } from '@angular/core';
import { Menu, MenuService } from '../../services/menu.service';
import { tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    this.menuService
      .getMenu()
      .pipe(
        tap((menu) => {
          console.log(menu);
          this.menuSig.set(menu);
        })
      )
      .subscribe();
  }
  menuSig = signal<Menu>({} as Menu);

  menuService = inject(MenuService);
}
