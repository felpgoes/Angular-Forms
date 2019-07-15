import { Component } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vappo e-Sports'
  roles = ['Top', 'Jungle', 'Mid', 'ADC', 'Support']

  userModel = new User('Felipe', 'felipe@vappo.com', 111111111, '', 'mainTeam', true);
}
