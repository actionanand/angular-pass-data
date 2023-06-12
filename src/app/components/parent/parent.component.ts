import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  imports: [CommonModule, Child1Component],
})
export class ParentComponent {
  fromChild = ''; // Initially empty

  name = 'Banana';

  onListenToChild(name: string) {
    this.fromChild = name; // value got from child
  }
}
