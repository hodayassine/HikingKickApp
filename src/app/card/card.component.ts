import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() imageUrl: string;
  @Input() location: string;
  @Input() tripType: string;
  @Input() difficulty: number;
  @Input() highlights: string;
  @Output() buttonClick = new EventEmitter<void>();
  
  constructor() {
    this.title = '';
    this.subtitle = '';
    this.imageUrl = '';
    this.location = '';
    this.tripType = '';
    this.difficulty = 3;
    this.highlights = '';
  }

  onButtonClick() {
    this.buttonClick.emit();
  }
}
