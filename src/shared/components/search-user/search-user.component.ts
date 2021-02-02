import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RepositoryService } from 'src/shared/services/repository.service';
import { usernameValidator } from 'src/shared/validators/username.valdiator';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  @Output() data = new EventEmitter();

  authForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, usernameValidator]),
  })

  user;
  allRepo;
  starredRepo;

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    const username = this.authForm.get('username').value;

    this.repositoryService.getAllReposByUsername(username)
    .subscribe(data => {

      this.user = data[0];
      this.allRepo = data[1];
      this.starredRepo = data[2];
      
      this.data.emit({
        allRepo: this.allRepo,
        starredRepo: this.starredRepo,
        user: this.user
      })
    }) 
  }

}
