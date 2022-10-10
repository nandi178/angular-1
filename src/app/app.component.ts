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
  isComplete = false;
  counterCount = 2;
  counters: {name: string, id: number, aim: number}[] = [];
  
  countChanged(count: number)
  {
    if (count===this.aim) {
      this.isComplete=true;
      alert('Cél elérve');
    }
    if (count === 3) {
      this.aim = 10;
      this.counter2 .name =' Név változás';
    }
  }

  counterCountChanged() {
                 //hány számlálónk vann - a felhasználó mennyit szeetne.
    const diff = this.counterCount - this.counters.length;
    if (diff > 0) {
      //mappel végig tudunk iterálni egy tömb elemen és át tudjuk alakítani egy másik formába. _ paraméter a tömb aktuális eleme (ez minket nem érdekel)
      const newCounters = new Array(diff).fill(undefined).map((_, i) => {
        return {name: '', id: i + this.counterCount, aim: 10};
      });
      this.counters = [...this.counters, ...newCounters]
    } else if (diff < 0) {
      this.counters.splice(this.counterCount); //első paraméter, honnan töröljünk. Ha nem adunk meg második paramétert, hogy hány darabot, akkor az első darbtól az összeset törli.
    }    
  }


//  Értékadás a feliratnak. Már nincs használatban, a html-ben is komment lett. Helyette ngModel.
//  counterCountChanged(event: any) {
//    this.counterCount = event.target.value;
//  }
}
