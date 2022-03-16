import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DATA } from '../data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent implements OnInit {
  card: any;
  cards = DATA;
  cardId: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((x) =>{
     this.cardId = x.get('id');

    this.card = this.cards.find(x => {
      const index:string = this.cardId;
     return parseInt(index) === x.id || '';
    });
  
    
      console.log(this.card);
      
    })
  }
}
