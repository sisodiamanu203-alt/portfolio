import { Component } from '@angular/core';
import { LeftSidebar } from '../../layouts/left-sidebar/left-sidebar';
import { RightSidebar } from '../../layouts/right-sidebar/right-sidebar';
import { IntroductionComponent } from '../../components/introduction/introduction';
import { AboutComponent } from '../../components/about/about';
import { ProjectsComponent } from '../../components/projects/projects';
import { OtherProjectsComponent } from '../../components/other-projects/other-projects';
import { TouchComponent } from '../../components/touch/touch';
import { ExperienceComponent } from '../../components/experience/experience';

@Component({
  selector: 'app-home',
  standalone: true,
  // Import the sidebars here
  imports: [LeftSidebar, RightSidebar,IntroductionComponent,AboutComponent,ProjectsComponent,OtherProjectsComponent,TouchComponent,ExperienceComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}