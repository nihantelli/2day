import { Component, OnDestroy } from '@angular/core';
import { ProductStateService } from 'src/app/product-state.service';
import { user, UserStateService } from 'src/app/user-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy {
  user?: user;
  constructor(
    UserStateService: UserStateService,
    private productStateService: ProductStateService
  ) {
    this.user = UserStateService.currentUser;
  }
  ngOnDestroy(): void {
    console.log('home destroyed component');
  }
  addProduct() {
    this.productStateService.productList.push({
      id: 1,
      name: 'kalem1',
      price: 100,
      color: 'kırmızı',
    });
  }
}
