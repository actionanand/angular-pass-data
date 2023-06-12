import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from '../../components/parent/parent.component';

@Component({
  selector: 'app-angular-binding',
  standalone: true,
  templateUrl: './angular-binding.component.html',
  styleUrls: ['./angular-binding.component.scss'],
  imports: [CommonModule, ParentComponent],
})
export class AngularBindingComponent {}
