import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponentComponent } from './components/grid-component/grid-component.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [GridComponentComponent],
  imports: [
    CommonModule,
    AgGridModule
  ],
  exports: [GridComponentComponent]
})
export class SharedModule { }
