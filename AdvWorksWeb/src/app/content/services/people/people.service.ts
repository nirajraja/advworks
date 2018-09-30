import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AppConstants } from '../../common/constants/app.constants'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  headers:any = new HttpHeaders({
    'Content-Type':  'application/json'
  });

  constructor(private http: HttpClient, public constants:AppConstants) {

  }

  getPerson(id): Observable<any> {
    return this.http.get(this.constants.baseURL + 'people/' + id, this.headers);
  }

}
