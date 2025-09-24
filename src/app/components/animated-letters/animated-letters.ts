import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-letters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-letters.html',
  styleUrls: ['./animated-letters.css']
})
export class AnimatedLettersComponent {
  @Input() letterClass = '';
  @Input() strArray: string[] = [];
  @Input() idx = 0;
}