import { Component, Input, OnInit } from '@angular/core';
import { ColDef, GridOptions, SelectionChangedEvent} from 'ag-grid-community';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.scss']
})
export class GridComponentComponent implements OnInit {
  public _data:GridOptions;
  public selectedItems:number;
  public isDownloadAvailable:boolean;
  @Input() set gridOptions(data: GridOptions) {
    if(data) {
     this._data = data;
    }
  }

  get gridOptions(): GridOptions {
    return this._data;
  }
  constructor() { }

  ngOnInit(): void {
    console.log('gridOptions', this._data)

    
  }

  onRowSelected(event){
     // console.log(event);
  }

  onSelectionChanged(event:SelectionChangedEvent){
    this.isDownloadAvailable = false;
    this.selectedItems = event.api.getSelectedRows().length;

    this.isDownloadAvailable= this.selectedItems && event.api.getSelectedRows().every((element)=> element.status === 'available');
  }

}
