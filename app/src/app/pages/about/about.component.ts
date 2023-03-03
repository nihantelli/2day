import { Component, OnInit } from '@angular/core';
import { ProductStateService } from 'src/app/product-state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(public productStateService:ProductStateService){}
  ngOnInit(): void {
    console.log('about destroy component');
  }
}
