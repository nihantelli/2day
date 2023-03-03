import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SubjectProviderService } from 'src/app/subject-provider.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css'],
})
export class PublisherComponent implements OnInit {
  name: string = '';
  newUser: User | undefined = undefined;
  public frm = this.formBuilder.group({
    name: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private subjectProviverService: SubjectProviderService
  ) {}
  ngOnInit(): void {
    this.frm
      .get('name')
      .valueChanges.subscribe((value) =>
        this.subjectProviverService.publish(value)
      );
  }
}
