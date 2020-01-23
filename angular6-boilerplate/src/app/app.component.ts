import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';
import {  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-boilerplate';
  private apiUrl = 'http://127.0.0.1:8000/api/events/'
  data: any = {};
  headers.append('Content-Type', 'application/json');

  post_form: any = {
    title: '',
    code: ''
  };

  constructor(private http: Http){
    this.getCode();
    this.getData();
  }
  getData(){
    return this.http.get(this.apiUrl).pipe(map((res: Response) => res.json())
  }

  getCode(){
    this.getData().subscribe( data => {
        console.log(data);
        this.data=data
      })
  }
  postData(){
    return this.http.post(this.apiUrl,  {'code': this.post_form }, {headers:this.headers}).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

  deleteData(id){
     console.log(this.apiUrl+id+'/');
    return this.http.delete(this.apiUrl+id+'/').subscribe((ok)=>{console.log(ok)});
  }
}

