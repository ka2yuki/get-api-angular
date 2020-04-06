import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  public get(): Promise<any[]> {
    return this.http
      .get(this.host, this.httpOptions)
      .toPromise()
      .then((res) => {
        const response: any = res;
        return response;
      })
      .catch(this.errorHandler);
  }

  /** axjs で取得 */
  public getData(): Observable<any> {
    return this.http.get(this.host, this.httpOptions).pipe(
      tap((_) => console.log('fetched data')),
      catchError(this.handleError('getHeroes', []))
    );
  }

  private readonly BaseUrl =
    'https://pub.ve.connected.logistation.com:39753/daiwalease/wcsl/repair/';
  private host: string = 'https://ispec-test.microcms.io/api/v1/photo';

  private httpOptions: any = {
    // ヘッダ情報
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': 'b279aadc-834e-4977-80e2-e7ba2c825bb7',
    }),
    body: null,
  };

  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // public setAuthorization(token: string = null): void {
  //   if (!token) {
  //     return;
  //   }
  //   const bearerToken: string = `Bearer ${token}`;
  //   this.httpOptions.headers = this.httpOptions.headers.set(
  //     'X-API-KEY', bearerToken
  //   );
  // }
}
