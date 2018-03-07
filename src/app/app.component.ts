import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tab Config';
  tabConfiguration=[
  {'Name':'First','Url':'First','Style':''},
  {'Name':'Second','Url':'Second','Style':''},
  {'Name':'Third','Url':'Third','Style':''}
]

}
