import { Component } from '@angular/core';
import { CardGameService } from '../service/card-game.service';
import { Card, Hand } from '../utils/models';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent {
  numberOfCards: number = 10;
  isLoading: boolean = true;
  apiCallLaunched: boolean = false;
  isDataExists: boolean = false;

  hand: Hand = new Hand();

  constructor(private cardGameService: CardGameService) {}

  getHand() {
    if(this.numberOfCards) {
      this.isLoading = true;
      this.apiCallLaunched = true;
      this.hand = new Hand();
      
      this.cardGameService.getHand(this.numberOfCards).subscribe(
        data => {
          this.isLoading = false;
          if(data) {
            this.isDataExists = true;
            this.hand = data;
          } else {
            this.isDataExists = false;
          }
        },
        error => {
          console.log(error);
          this.isLoading = false;
          this.isDataExists = false;
        }
      )
    }
  }

  getCardImagePath(card: Card) {
    return `url("assets/cards-imgs/${card.type}/${card.value}.png")`;
  }
}
