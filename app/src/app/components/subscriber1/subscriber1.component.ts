import { Component } from '@angular/core';
import { SubjectProviderService } from 'src/app/subject-provider.service';

@Component({
  selector: 'app-subscriber1',
  templateUrl: './subscriber1.component.html',
  styleUrls: ['./subscriber1.component.css'],
})
export class Subscriber1Component {
  constructor(private subjectProviderService: SubjectProviderService) {
    this.subjectProviderService.nameObservable.subscribe({
      next: (x) => console.log(x),
      complete: () => console.log('completed'),
      error: (err) => {
        console.log(err);
      },
    });
  }
}
