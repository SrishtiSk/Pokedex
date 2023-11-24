import { Component, OnInit} from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  color:any;
  public showSearch = true;
  searchText="";
  
  constructor(private pokemonService: PokemonService){}

  ngOnInit():void{
    
    this.color = this.pokemonService.activePokemon.subscribe(response=>{
      if(response != null){
        this.color = response.color;
        this.showSearch = false;
      }
      else{
        this.color = 'navbar';
        this.showSearch = true;
      }
      this.setNavbarColor(this.color);
    });
  }

  setNavbarColor(color:string){
    let hexColor = '#FFFFFF';
    switch (color) {
      case 'black': {
        hexColor = '#607d8b';
        break;
      }
      case 'blue': {
        hexColor = '#81d4fa';
        break;
      }
      case 'brown': {
        hexColor = '#bcaaa4';
        break;
      }
      case 'gray': {
        hexColor = '#a6a6a6';
        break;
      }
      case 'green': {
        hexColor = '#81c784';
        break;
      }
      case 'pink': {
        hexColor = '#f8bbd0';
        break;
      }
      case 'purple': {
        hexColor = '#ad8ee7';
        break;
      }
      case 'red': {
        hexColor = '#ff8a80';
        break;
      }
      case 'white': {
        hexColor = '#d5dbe1';
        break;
      }
      case 'yellow': {
        hexColor = '#ffd600';
        break;
      }
      default: {
        hexColor = '#FFFFFF';
      }
    }
  }

  typingStopped(){}
}
