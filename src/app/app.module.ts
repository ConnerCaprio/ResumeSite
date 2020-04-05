import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ResumePageRowComponent } from './resume-page-row/resume-page-row.component';
import { ResumePageTitleComponent } from './resume-page-title/resume-page-title.component';
import { ResumePageInfoComponent } from './resume-page-info/resume-page-info.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LifeEventsPageComponent } from './life-events-page/life-events-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', component: HomePageComponent },
  { path: 'resume', component: ResumePageComponent },
  { path: 'lifeEvents', component: LifeEventsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'projects', component: ProjectsPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ResumePageComponent,
    ResumePageRowComponent,
    ResumePageTitleComponent,
    ResumePageInfoComponent,
    MenuBarComponent,
    LanguagesListComponent,
    HomePageComponent,
    LifeEventsPageComponent,
    ProjectsPageComponent,
    ContactPageComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
