import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  constructor(private httpservice: DataStorageService) { }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  ngOnInit() {
  }

  onSaveData() {
  this.httpservice.storeRecipe().subscribe(
// tslint:disable-next-line: deprecation
    (response: Response) => {
    console.log(response);
    }
  );
  }

  onFetchRecipe() {
    this.httpservice.fetchrecipe();
  }

}
