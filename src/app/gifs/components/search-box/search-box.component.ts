import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" class="form-control" placeholder="buscar gifs..."
      (keyup.enter)="searchTag()" #txtTagInput>`
})
export class SearchBoxComponent {

  constructor(private gifsService: GifsService){  }

  //OBTENER INFO DEL CAMPO DE TEXTO
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag (){
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
