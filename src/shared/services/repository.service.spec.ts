import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  let service: RepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test get user', () => {
    expect(service.getAllReposByUsername('teste')).not.toBeNull();
  });

  it('test get user starredrepo', () => {
    expect(service.getStarredRepos('teste')).not.toBeNull();
  });

  it('test get user repo', () => {
    expect(service.getAllRepos('teste')).not.toBeNull();
  });
});
