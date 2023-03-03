import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SHA256 } from 'crypto-js';

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

  //sha256 password를 해시값으로 변환
  const hash_pw = SHA256(this.password).toString();

    // body변수에 JSON 형식으로 저장
    const body = JSON.stringify({
      "ID": this.username,
      "PW": hash_pw
    });
    console.log(body)

    this.http.post<any>('https://localhost:5001/api/login', body,{headers: headers}).subscribe(
  (response) => {
    // 로그인 성공
    alert("Login Success")
  },
  (error) => {
    // 로그인 실패
    alert("Login Fail")
  }
);

  }
}
