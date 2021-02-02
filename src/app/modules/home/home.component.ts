import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  searchForm = new FormGroup({
    repoName: new FormControl('')
  });

  unStarredRepo;
  starredRepo;
  allRepo;
  user;
  searchRepo;

  constructor() { }

  ngOnInit(): void {
    this.searchForm.get('repoName').valueChanges.subscribe((value: string) => {  
      this.searchRepo = this.allRepo.filter((repo) => {
        return repo.name.includes(value)
      })
    }) 
  }

  getData(data) {
    this.unStarredRepo = data.allRepo;
    this.user = data.user;
    this.starredRepo = data.starredRepo;
    this.searchRepo = [...this.unStarredRepo, ...this.starredRepo];
    this.allRepo = [...this.unStarredRepo, ...this.starredRepo];
  }

}
