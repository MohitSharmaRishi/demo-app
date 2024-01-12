import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoryModel } from "../Models/StoryModel";

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  Stories:StoryModel[]=[];
   constructor(private http: HttpClient) { this.Fetch();}
  Fetch()
    {
      var Url="https://localhost:44369/fetch";
      const req = this.http.get<StoryModel[]>(Url).subscribe(resp=>{
      this.Stories=resp;
      
      return this.Stories;
    });
    }
  }

  

