import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Services/Requests/request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userModel: any={};

  constructor(private request: RequestService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.userModel)
    this.request.loginUser(this.userModel).subscribe((data:any)=>{
      console.log(data);
    });
  }

}