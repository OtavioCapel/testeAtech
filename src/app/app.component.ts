import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  loaderState: boolean;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.loaderState.subscribe(state => {
      this.loaderState = state;
    })
  }
}
