import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from "@angular/http";

import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = '';
  items: any[] = [];
  constructor(private httpService: HttpService) {}

  onSubmit(name:string, email:string) {
    this.httpService.sendData({
      username: name,
      email: email
    }).subscribe(data => console.log(data));
  }

  onGetData() {
    this.httpService.getOwnData()
      .subscribe(
        data => {
          let helperArray = [];
          for (let key in data) {
            helperArray.push(data[key])
          }
          this.items = helperArray;
        }
      );
  }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data: string) => {
          console.log(data);
          this.title = data;
        }
      );
  }

  ngOnDestroy() {

  }
}
