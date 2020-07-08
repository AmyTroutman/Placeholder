import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PlaceholderService } from './placeholder.service';
import { ITodo } from './ITodo';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatButtonToggle, MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  loading = true;
  dataSource: MatTableDataSource<ITodo>;
  displayedColumns: string[] = ['id', 'title', 'completed', 'userId'];
  @ViewChild(MatSort, {static: true})sort: MatSort;
  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;
  originalFilter: (data: any, filter: string) => boolean;
  constructor(private placeholderService: PlaceholderService) {}

  async ngOnInit() {
    this.dataSource = new MatTableDataSource(
      await this.placeholderService.getList()
    );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.loading = false;
    this.originalFilter = this.dataSource.filterPredicate;
  }
  // ngOnInit(): void {
  //   this.placeholderService.getList().then((data: any[]) =>
  //   {
  //     this.dataSource = new MatTableDataSource(data)
  //   })
  // }

  applyFilter(filterValue: any) {
    // const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  buttonToggle(event: MatButtonToggleChange): void {
    switch(event.value) {
      case 'id':
        break;
      case 'userId':
        break;
      default:
        this.dataSource.filterPredicate = this.originalFilter;
        break;
    }
  }
}


