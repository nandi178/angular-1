import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular alkalmazás';
  counter2 = {name: 'Ezaz', id: 1};
  aim = 5;
  logoSrc = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Porsche_992_Carrera_4S_Genf_2019_1Y7A5561.jpg'
  countChanged(count: number)
  {
    if (count===this.aim) {
      alert('Cél elérve');
    }
  }
}
