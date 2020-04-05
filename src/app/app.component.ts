import { Component } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public items: any = {};

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService
      .get()
      .then((res) => {
        console.log(res);
        this.items = res;
      })
      .catch((error) => console.log(error));
  }

  // public setAuthorization(token: string = null): void {
  //   if (!token) {
  //     return;
  //   }
  //   const bearerToken: string = `Bearer ${token}`;
  //   this.httpOptions.headers = this.httpOptions.headers.set(
  //     'Authorization',
  //     bearerToken
  //   );
  // }
}
