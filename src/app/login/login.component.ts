import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng//api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  rootname: string = "";
  rootp: string = "";
  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.rootname = "";
  }
  login(): void {
    if (this.rootp === "admin" && this.rootname == "admin") {
      this.router.navigateByUrl("main")
    }else{
    this.messageService.add({ severity: 'error', summary: '登录失败', detail: '账号或密码输入错误' });
    }
  }
  clear() {
    this.messageService.clear();
  }
}
