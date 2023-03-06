import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SHA256 } from 'crypto-js';
import { PopupComponent } from './popup/popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Login';
  username: string='';
  password: string='';
  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private router: Router
    ){};

  openModal() {
    const modalRef = this.modalService.open(PopupComponent);
  }

  async login() {
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
    try{
    const response = await this.http.post<any>('https://34.83.84.11:443/api/login', body, { headers: headers }).toPromise();
    alert("Login Success")
    var a = document.querySelectorAll('input');
    a[0].remove()
    a[1].remove()
    var b = document.querySelectorAll('button');
    b[0].remove()
    b[1].remove()
    var c = document.querySelectorAll('label');
    c[0].remove()
    var d = document.querySelectorAll('h1');
    d[0].remove()
    this.router.navigate(['/success']);
  }
  catch(error)  {
    // 로그인 실패
    alert("Login Fail")
  }
  }
}
