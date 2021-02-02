import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MaterialModule } from 'src/shared/modules/material.module';
import { RepositoryService } from 'src/shared/services/repository.service';

import { SearchUserComponent } from './search-user.component';

describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;
  
  const mockService = {
    getUserByUsername: () => of({}),
    getAllRepos: () => of([]),
    getStarredRepos: () => of([]),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUserComponent ],
      providers: [ {provide: RepositoryService, useValue: mockService} ],
      imports: [
        MaterialModule, 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
