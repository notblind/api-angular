import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-api-component',
  templateUrl: './api-component.component.html',
  styleUrls: ['./api-component.component.css']
})
export class ApiComponentComponent implements OnInit {
  error: string = ''
  data: any = {};
  post_form: any = {
    title: '',
    code: ''
  };

  constructor(private api: ApiServiceService) { }

  ngOnInit() {
  	this.api.getData().subscribe((data)=>{
      console.log(data);
      this.data=data
    })
  }

  postF() {
    if (this.post_form.title && this.post_form.code) {
      this.error = ''
      this.api.postData(this.post_form).subscribe(
        res => {
          console.log(res);
          this.ngOnInit()
        }
      );
    }
    else
      this.error = 'Все поля должны быть заполнены'
  }

  putF(id) {
      this.api.putData(id, this.post_form).subscribe(
        (res)=>{
          console.log(res)
          this.ngOnInit()
        });
    }

  deleteF(id) {
    this.api.deleteData(id).subscribe(
      (res)=>{
        console.log(res)
        this.ngOnInit()
      });
  }

  inCode(event: any){
    this.post_form.code = event.target.value
  }

  inTitle(event: any){
    this.post_form.title = event.target.value
  }

}
