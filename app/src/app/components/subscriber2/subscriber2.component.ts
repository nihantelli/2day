import { Component } from '@angular/core';
import { SubjectProviderService } from 'src/app/subject-provider.service';

@Component({
  selector: 'app-subscriber2',
  templateUrl: './subscriber2.component.html',
  styleUrls: ['./subscriber2.component.css'],
})
export class Subscriber2Component {
  constructor(private subjectProviderService: SubjectProviderService) {
    this.subjectProviderService.nameObservable.subscribe((x) => {
      console.log( x);
    });
  }
}
