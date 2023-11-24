import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, SpeciesDetails } from '../shared/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})

export class PokemonDetailComponent implements OnInit{

 pokemon!:Pokemon ;
 speciesDetails!: SpeciesDetails;

 imgBaseUrl ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

 weightInKgs:any;
 weightInPounds:any;
 heightInMeters:any;
 heightInMetres: any;
 heightInFeetInches: any;
 abilities: any;
 type:any; 
  forms: any;
  displayImg: any;
  genera: any;
  pokemonColor:any;

 constructor(private activeRoute: ActivatedRoute,
  private pokemonService: PokemonService){}

  ngOnInit(){
    this.activeRoute.params.subscribe((param) => {
      const name = param['name'];
      this.initializePokemon(name);
      this.initializePokemonFields();
    });
  }

  initializePokemon(name:string){
    const dets = this.pokemonService.getPokemonDetail(name).subscribe((data:Pokemon)=>{
      this.pokemon = new Pokemon();
      this.pokemon = data;
    });
    const speciesDetails = this.pokemonService.getPokemonSpeciesDetails(name).subscribe((data:SpeciesDetails)=>{
      this.pokemon.spices = data;
      this.speciesDetails = new SpeciesDetails();
      this.speciesDetails = data;
      this.pokemon.genus = data.genera.find(
        (genus: any) => genus.language.name == 'en'
      ).genus;
      this.pokemon.color = this.speciesDetails.color.name;
      this.pokemonService.activePokemon.next(this.pokemon);
    });
    
    
  }

  changeMatrix(matrix:string){
    //console.log(this.pokemon?.height, this.pokemon?.weight);
    switch(matrix){
    case 'kgs': {//kg = hg ÷ 10
      console.log()
      return this.weightInKgs = (this.pokemon!.weight * 0.1).toFixed(1);
    }
    case 'lbs': //lb = hg ÷ 4.5359237
      return this.weightInPounds = (this.pokemon!.weight / 4.5359237).toFixed(1);
    case 'mts': //m = dm ÷ 10
      return this.heightInMetres = (this.pokemon!.height * 0.1).toFixed(1);
    case 'fts': // ft = dm ÷ 3.048
      return this.heightInFeetInches = Math.floor(this.pokemon!.height / 3.048)+'"'+Math.round(((this.pokemon!.height* 3.2808) % 1) *12)+'\'';
    default : return "00.0";
    }
  }

  getAbilities(){
    this.abilities = this.pokemon?.abilities.map(x => x.ability.name);
    return this.abilities;
  }
  getType(){
    this.type= this.pokemon?.types.map(x=>x.type.name);
    return this.type;
  }
  getForms(){
    //this.forms = this.pokemon?.forms.map(x=>x.name);
  }

  initializePokemonFields(){
    this.getAbilities();
    this.getType();
  }
  ngOnDestroy(){
    this.pokemonService.activePokemon.next(null!);
  }
}
