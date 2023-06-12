import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
})
export class Child1Component {
  @Input() fruitIn!: string;
  @Output() fruitOut = new EventEmitter<string>();

  name = 'Mango';

  fruitBoolean = true;

  onSendDataToParent() {
    if (this.fruitBoolean) {
      this.fruitOut.emit(this.name);
    } else {
      this.fruitOut.emit('Apple');
    }
    this.fruitBoolean = !this.fruitBoolean;
  }
}
