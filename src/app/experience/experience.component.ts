import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
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
export class ExperienceComponent {
  
  experiences: Experience[] = [
    {
      role: 'Contractor',
      company: 'Opentext  [Parent Company - Mindteck]',
      duration: 'Sep 10 2024 - today',
      points: [
        'Worked as a Software Engineer, contributed to product testing, regression, and fixing bugs, improving bug resolution time by 25%',
        'Developed some automation framework for Testing',
        'Worked on the GCP cloud for regression and bug debug.'
      ]
    },
    {
      role: 'Network Engineer Intern',
      company: 'Sheeltron Digital System Pvt Ltd',
      duration: '',
      points: [
        'Worked on different networking devices. Configuration, testing of the  devices.',
        'Learnt different networking protocols and thier usecases.'
      ]
    }
  ];
}
