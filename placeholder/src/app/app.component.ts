import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PlaceholderService } from './placeholder.service';
import { ITodo } from './ITodo';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  loading = true;
  dataSource: MatTableDataSource<ITodo>;
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  @ViewChild(MatSort, {static: true})sort: MatSort;
  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;
  constructor(private placeholderService: PlaceholderService) {}

  async ngOnInit() {
    this.dataSource = new MatTableDataSource(
      await this.placeholderService.getList()
    );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.loading = false;
  }

  applyFilter(filterValue: string) {
    // const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


