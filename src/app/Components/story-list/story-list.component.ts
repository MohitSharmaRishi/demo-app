import { ThisReceiver } from '@angular/compiler';
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

  Stories : StoryModel[]=[];
  StoriesToDisplay : StoryModel[]=[];
  Keyword:string="";
  Page:Number=1;
  NumberOfRecords:Number=1;
  constructor(private storyService:StoryService) {
    //this.storyService.Fetch();
  }
  Filter(Keyword:string){
    this.Keyword =Keyword;
    //console.log(Keyword);return;


    if(Keyword=="")this.StoriesToDisplay = (this.storyService.Stories);
    else { this.StoriesToDisplay = (this.storyService.Stories.filter(x=>x.title.includes(Keyword)));}
    
    console.log('Filtered by - '+this.Keyword,this.StoriesToDisplay.length);

  }
ngOnChanges(){
  console.log('ngOnChanges ');
}

ngOnInit(){
  
  
}

ngDoCheck(){
   console.log('ngDoCheck');
   this.Stories = this.StoriesToDisplay =this.storyService.Stories;
   this.Filter(this.Keyword);
}
ngAfterContentInit(){
  console.log('ngAfterContentInit');
}
ngAfterContentChecked(){
  console.log('ngAfterContentChecked');
}
ngAfterViewInit(){
  console.log('ngAfterViewInit');
}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked()');
}
ngOnDestroy(){
  console.log('ngOnDestroy()');
}

async test() {
  
  this.StoriesToDisplay=[];
 console.log(this.StoriesToDisplay); 
  
}

}
