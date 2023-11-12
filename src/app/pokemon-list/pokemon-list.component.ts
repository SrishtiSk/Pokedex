import { Component } from '@angular/core';
import { Observable, Subscription, concat, forkJoin } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../shared/pokemon.model';
import { PokemonList } from '../shared/pokemon.list';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent {

  loading:boolean = false;
  pokeList: Pokemon[]=[];

  public offset:number;

  constructor(private pokemonService: PokemonService){
    this.offset =0;
  }

  ngOnInit():void{
   this.getPokeList();
  }

  getPokeList(){
    this.loading=true;
    this.pokemonService.getPokemonList(this.offset).subscribe((list:PokemonList[])=>{
     console.log("Data", list.length);
      if (list.length !==0) {
         this.getPokemons(list);
         console.log("Get em All", this.pokeList);
      }
    });
  }

  getPokemons(list:PokemonList[]){
    const arr : Observable<Pokemon>[]=[];
    list.map((value:PokemonList)=>{
      arr.push(this.pokemonService.getPokemonDetail(value.name));
    });
    forkJoin([...arr]).subscribe((pokemons)=>{
      this.pokeList.push(...pokemons);
      this.offset +=50;
      this.loading=false;
    });
  }

  getPokemonColor(list:any[], type:any=null){
    if(type!=null){ //type color
     let typeColor ='--'+ type.type.name ;
     let style = { 'background-color': `var(${typeColor})`}
     return style;
    }
    else{ //card bg color
      let cardColor = "--"+list.filter(x => x.slot ==1)[0]?.type.name ;
      let style = { 'background-color': `var(${cardColor}-light)`}
     return style;
    }
   
  }
  
}
