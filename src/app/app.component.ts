import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { DataList } from 'src/Models/dataList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public customGridOptions:GridOptions;
  public columnDefs:ColDef[];
  public rowData:DataList[]=[];
  
  public ngOnInit(){
     this.rowData = [
       { name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled' },
       { name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available' },
       { name: 'uxtheme.dll', device: 'Lannister', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available' },
       { name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled' },
       { name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled' }
    
    ];

   this.columnDefs = [
    { field: 'name' ,
      headerCheckboxSelection:true,
      checkboxSelection:true,
      colId:"name",
      width: 200
  },
    { field: 'device' ,
      colId:"device",
      flex:1
    },
    { field: 'path', 
      colId:"path",
      flex:2
    },
    {
      field:'status',
      colId:"status",
      cellStyle:{'text-transform':'capitalize'},
      flex:1,
    
    }
];

  this.customGridOptions = {
    
    // PROPERTIES
    // Objects like myRowData and myColDefs would be created in your application
    rowData: this.rowData,
    columnDefs: this.columnDefs,
    rowSelection: 'multiple',
    domLayout:'autoHeight'
  }
  
}
}
