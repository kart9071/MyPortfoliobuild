import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

interface SkillCategory {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Languages & Frameworks',
      skills: ['Python', 'Java', "Angular","Spring Boot"]
    },

    {
      name: 'Cloud & DevOps',
      skills: ['Docker', 'Kubernetes', 'GCP',  'CI/CD', 'Git']
    },
  ];
}
