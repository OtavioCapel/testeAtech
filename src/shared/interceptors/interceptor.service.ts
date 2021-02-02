import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor  {

  constructor(
    private loaderService: LoaderService,
    private toastrService: ToastrService
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler ) {  
    this.loaderService.setLoaderState(true);
    return next.handle(request)
    .pipe(
      map(result => {
        this.loaderService.setLoaderState(false);
        return result
      }),
      catchError((error) => {
        this.toastrService.warning('Usuário não encontrado', 'Aviso', {closeButton: true, timeOut: 2000})
        this.loaderService.setLoaderState(false);
        return throwError(error);
      })
    );
  }
}
