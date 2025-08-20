import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// Gera um index aleatório entre 0 e o maior indice do array.
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  public selectedUser = DUMMY_USERS[randomIndex];

  public onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
