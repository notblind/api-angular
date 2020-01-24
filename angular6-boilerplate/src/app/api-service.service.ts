import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = environment.apiurl;

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<any>(this.apiUrl)
  }

  postData(post_form){
    return this.http.post(this.apiUrl,  {'code': post_form })
  }

  deleteData(id){
    return this.http.delete(this.apiUrl+id+'/');
  }

  putData(id, post_form){
    return this.http.put(this.apiUrl+id+'/', {'code': post_form });
  }
}
