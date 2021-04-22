import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user: any;

  isChecked = false;
  checkButtonValue = 'Выбрать';

  onClick() {
    this.isChecked = !this.isChecked;
    this.checkButtonValue =
      this.checkButtonValue === 'Выбрать' ? 'Отменить' : 'Выбрать';
  }
}
