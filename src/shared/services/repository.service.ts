import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,  } from 'rxjs';
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  baseUrl: string = 'https://api.github.com/users'

  userRepo = new BehaviorSubject([]);
  userStarredRepo = new BehaviorSubject([]);
  user = new BehaviorSubject({});

  constructor(private http: HttpClient) { }


  getUserByUsername(username: string) {
    return this.http.get(`${this.baseUrl}/${username}`)
  }
  
  
  getAllRepos(username: string) {
    return this.http.get(`${this.baseUrl}/${username}/repos?per_page=50`)
  }
  
  
  getStarredRepos(username: string) {
    return this.http.get(`${this.baseUrl}/${username}/starred`)
  }

  getAllReposByUsername(username: string) {
    return forkJoin([
      this.getUserByUsername(username),
      this.getAllRepos(username),
      this.getStarredRepos(username)
    ]);
  }
}
