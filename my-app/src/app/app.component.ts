import { Component } from '@angular/core';
import {
  filter,
  find,
  first,
  from,
  map,
  Observable,
  of,
  range,
  take,
  takeLast,
  timer,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { FakeserviceService } from './fakeservice.service';
interface Product {
  id: number;
  name: string;
  price: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  constructor(private fakeService: FakeserviceService) {
    this.fakeService.getPostsGood().subscribe((x) => {
      console.log(x);
    });
    this.fakeService
      .SavePostWithError({ id: 1, title: 'title1', body: 'body1', userId: 2 })
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err),
        complete: () => console.log('tamamlandı.'),
      });
    // this.fakeService.getPostsWithHeader().subscribe((x)=>console.log(x))
    this.fakeService
      .UpdatePut({ id: 1, title: 'title1', body: 'body1', userId: 2 })
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err),
        complete: () => console.log('tamamlandı.'),
      });
    // this.fakeService.deletePost(1).subscribe((x) => console.log(x));
    // this.fakeService
    //   .getParallelRequest()
    //   .postObservable.subscribe((x) => console.log(x));
    this.fakeService
      .getParallelWithForkJoinOperator()
      .subscribe((x) => console.log(x.posts));
  }
}

// let fromOperator = from([10, 20, 30, 40, 50, 60, 70]);
// var fromOperatorByProduct = from([
//   { id: 1, name: 'kalem1', price: 100 },
//   { id: 2, name: 'kalem2', price: 100 },
//   { id: 3, name: 'kalem3', price: 100 },
// ]);
// //Map
// fromOperator.pipe(map((x) => x * 2)).subscribe((x) => {
//   console.log(x);
// });
//First operator
// fromOperator.pipe(first()).subscribe((x) => {
//   console.log(x);
// });
// fromOperator.pipe().subscribe((x) => {
//   console.log(x);
// });
//take
// fromOperatorByProduct.pipe(take(2)).subscribe((x) => console.log(x));
// //takelast
// fromOperatorByProduct.pipe(takeLast(2)).subscribe((x) => console.log(x));
//Find
// fromOperatorByProduct.pipe(find((x) => x.id == 2)).subscribe((x) => {
//   console.log(x);
// });
//Filter
// fromOperatorByProduct.pipe(filter((x) => x.id >= 2)).subscribe((x) => {
//   console.log(x);
// });
// fromOperator.pipe(find((x) => x > 30)).subscribe((x) => {
//   console.log(x);
// });
//Create Observable
// let myObservable = Observable.create((observer: any) => {
//   observer.next('hey guys');
//   observer.next('hey guys');
//   observer.next('hey guys');
// });
// myObservable.subscribe({
//   next: (value: any) => console.log(value),
//   error: (err: Error) => console.log(err),
//   complete: () => {
//     console.log('data alma işlemi tamamlandı.');
//   },
// });
//AJAX
// ajax
//   .getJSON('https://jsonplaceholder.typicode.com/todos/1')
//   .subscribe((x) => {
//     console.log(x);
//   });
//range
// range(1, 20).subscribe((x) => {
//   console.log(x);
// });
//timer
// timer(5000).subscribe((x) => {
//   console.log(x);
//   alert("kampanya var.");
// });
//of
// let ofOperator = of(1, 2, 3, 4, 5);
// ofOperator.subscribe((x) => {
//   console.log(x);
// });
// let subscriber1 = ofOperator.subscribe((x) => {
//   console.log(x);
// });
// subscriber1.unsubscribe();
// interval(1000).subscribe((x) => {
//   console.log(x);
// });
