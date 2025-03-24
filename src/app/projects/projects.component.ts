import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms cubic-bezier(0.4, 0, 0.2, 1)', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Stock Market Project',
      description: 'Stock market Analyser for investors.',
      tech: ['Python', 'streamlit'],
      github: 'https://github.com/kart9071/project-stock_market'
    },
    {
      title: 'Gallery App',
      description: 'Gallery Application for android. Respected Users edit and do some operation on thier images.',
      tech: ['Java', 'XML', 'Android Studio'],
      github: 'https://github.com/kart9071/Gallery_app'
    },
    {
      title: 'E LEARNING MANAGEMENT SYSTEM',
      description: 'Primarily implemented HTTP Live Streaming to enhance visibility of content for students, as added by the Admin or Trainer.',
      tech: ['Java', 'Spring boot','Angular'],
      github: 'https://github.com/kart9071/LMS.git'
    }
  ];
}
