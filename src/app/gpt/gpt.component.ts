import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.css']
})
export class GptComponent implements OnInit {
  queryFormGroup!:FormGroup;
  messages= [
    {
      role: "system",
      content: "You are a helpful assistant."
    }
  ]
  result:any;
  constructor(private formBuilder:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {

    this.queryFormGroup = this.formBuilder.group({
        gpt: this.formBuilder.control('')
      })
  }

  handleAskGPT() {
    let url = "https://api.openai.com/v1/chat/completions";
    let httpHeaders =new HttpHeaders().set("Authorization","Bearer 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");
    let payload = {
      model: "gpt-3.5-turbo",
      messages:this.messages
    }
    this.http.post(url,payload,{headers:httpHeaders}
      ).subscribe({
      next:(response:any)=>{
        console.log("-----------------------------")
        console.log(response)
        this.result = response
      },error:(err:any)=>{
        console.log("------------ Erreur -----------------" )
        console.log(err)
      }
    })
  }
}
