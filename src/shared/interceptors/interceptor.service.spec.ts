import { TestBed } from '@angular/core/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MaterialModule } from '../modules/material.module';
import { LoaderService } from '../services/loader.service';
import { InterceptorService } from './interceptor.service';

describe('InterceptorService', () => {
  let service: InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastrModule, 
        ToastrModule.forRoot(),
      ], 
      providers: [
        LoaderService,
        ToastrService
      ]
    });
    service = TestBed.inject(InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
