import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-krolik',
  templateUrl: './krolik.component.html',
  styleUrls: ['./krolik.component.css']
})
export class KrolikComponent implements OnInit {
  imie: string;
  wiek: string;
  waga: string;
  adresWlasciciela: Adres;
  trybEdycji: boolean;
  karmy: string[];

  constructor() {
  }

  ngOnInit(): void {
    this.imie = 'Gruby';
    this.wiek = '3';
    this.waga = '2';
    this.trybEdycji = false;
    this.adresWlasciciela = {
      ulica: 'Andrzeja Zauchy',
      numerDomu: '2',
      numerMieszkania: '5',
      kodPocztowy: '20-611',
      miasto: 'Lublin'
    };
    this.karmy = ['Versele-Laga Cuni Adult Complete', 'Versele-Laga Crispy Muesli Rabbits'];
  }

  dodajKarme(nazwa): void {
    this.karmy.push(nazwa);
  }

  usunKarme(nazwa): void {
    for (let i = 0; i < this.karmy.length; i++) {
      if (this.karmy[i] === nazwa) {
        this.karmy.splice(i, 1);
      }
    }
  }

  zmienStanModyfikacji(): void {
    this.trybEdycji = !this.trybEdycji;
  }
}

interface Adres {
  ulica: string;
  numerDomu: string;
  numerMieszkania: string;
  kodPocztowy: string;
  miasto: string;
}
