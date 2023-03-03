import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Login';
  username: string='';
  password: string='';

  constructor(private http: HttpClient) {}

  login(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
  });

    const body = JSON.stringify({
      "ID": this.username,
      "PW": this.password
    });
    console.log(body)

    this.http.post<any>('https://localhost:5001/api/login', body,{headers: headers}).subscribe(
  (response) => {
    // 로그인에 성공한 경우
    alert("Success");
  },
  (error) => {
    // 로그인에 실패한 경우
    console.log(error);
  }
);

  }
}
