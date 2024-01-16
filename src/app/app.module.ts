import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryListComponent } from './Components/story-list/story-list.component';
import { ViewStoryComponent } from './Components/view-story/view-story.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    StoryListComponent,
    ViewStoryComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
