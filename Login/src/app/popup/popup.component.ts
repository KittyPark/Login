import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SHA256 } from 'crypto-js';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  username: string = '';
  password: string = '';

  constructor(public activeModal: NgbActiveModal, private http: HttpClient) {}
    signup(): void {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      // sha256 password를 해시값으로 변환
      const hash_pw = SHA256(this.password).toString();

      // body변수에 JSON 형식으로 저장
      const body = JSON.stringify({
        ID : this.username,
        PW : hash_pw
      });
      console.log(body)
      this.http.post<any>('http://34.83.84.11/api/signup', body, { headers: headers, observe: 'response' }).subscribe(
        (response) => {
            // 성공적인 응답 처리
            alert("Signup Success");
            this.activeModal.close();
        },
        (error) => {
          // 요청 실패 처리
          console.log("ID 중복")
          console.log('Request Error:', error);
          alert('이미 있는 ID');
        }
      );
    }
  }
