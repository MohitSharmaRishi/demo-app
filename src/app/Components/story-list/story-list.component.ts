import { JsonPipe } from '@angular/common';
import { SelectorMatcher, ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { StoryModel } from 'src/app/Models/StoryModel';
import { StoryService } from 'src/app/Services/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent {

  AllStories : StoryModel[]=[];
  FilteredStories : StoryModel[]=[];
  StoriesToDisplay : StoryModel[]=[];

  tempStories : StoryModel[]=[];
  
  ShowLoader:boolean=false;
  DataLoaded:boolean=false;
  
  Keyword:string="";
  Page:number=0;
  NumberOfPages:number=0;
  constructor(public storyService:StoryService) {
    
   }
   SetShowLoader(ShowLoader:boolean){this.ShowLoader=ShowLoader;}
  createRange(number:Number){ return new Array(number).fill(0).map((n, index) => index + 1); }

  

  
  Filter(Keyword:string){
    
    this.Keyword =Keyword;

    if(Keyword!=""){
      this.FilteredStories = JSON.parse(JSON.stringify(this.AllStories.filter(x=>x.title.includes(Keyword)))) ;
    }
   else this.FilteredStories = JSON.parse(JSON.stringify(this.AllStories));

    
     this.NumberOfPages = parseInt((this.FilteredStories.length/10).toString());
     if(this.FilteredStories.length % 10>0)this.NumberOfPages++;
     console.log('FilteredStories',this.FilteredStories );
     console.log('NumberOfPages',this.NumberOfPages );  
    
     this.ShowPage(1);

  }
  

  ShowPage(pageno:number){

    
    this.Page=pageno;
    console.log('pageno',pageno);
    this.StoriesToDisplay =  (JSON.parse(JSON.stringify(this.FilteredStories))).splice((this.Page-1) * 10, 10);
    //this.StoriesToDisplay =  this.StoriesToDisplay.splice(this.Page*10, 10);
    
    console.log('StoriesToDisplay',this.StoriesToDisplay);
    
  }
  Prev(){if(this.Page>1)this.ShowPage(this.Page-1)  }
  Next(){if(this.Page<this.NumberOfPages)this.ShowPage(this.Page+ 1)  }
 


    async ngOnInit(){
      
      this.SetShowLoader(true);
     await  this.storyService.Fetch().then(resp=>{
      resp.subscribe(x=>{
        this.AllStories = x;
        console.log(this.AllStories);
        this.SetShowLoader(false);
        this.DataLoaded=true;
        this.Filter(this.Keyword);
      });
     });
  }
}
