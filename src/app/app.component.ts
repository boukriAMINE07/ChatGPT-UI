import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions=[
    {name:'Home',route:'/home',icon:'house'},
    {name:'GPT',route:'/gpt',icon:'chat'},
  ]
  currentAction:any;

  constructor(private router:Router){

  }
  handleRoute(action: any) {
    this.currentAction=action;

    this.router.navigateByUrl(action.route);
  }
}
