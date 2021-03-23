import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rootname:string="";
  rootp:string="";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.rootname="";
  }
  login():void{
    if(this.rootp==="admin"&&this.rootname=="admin")
    {
      this.router.navigateByUrl("main")
    }
  }
}
