import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { IUser } from '../interfaces/user-interface';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: IUser;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  public onSelectUser() {
    this.select.emit(this.user.id);
  }
}
