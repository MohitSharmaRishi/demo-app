import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoryModel } from "../Models/StoryModel";
import { ConfigService } from './Config/config.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  Stories:StoryModel[]=[];
   constructor(private http: HttpClient,private config: ConfigService) { }
  async Fetch()
    {
      var Url=this.config.BaseUrl + "fetch";

    return await this.http.get<StoryModel[]>(Url);
    }
  }

  

