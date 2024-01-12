import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryListComponent } from './Components/story-list/story-list.component';
import { ViewStoryComponent } from './Components/view-story/view-story.component';

const routes: Routes = [
  { path: '', component: StoryListComponent },
  { path: 'story', component: ViewStoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
