import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Sawmill } from '../Model/Sawmill';
import { SawmillService } from '../Service/sawmill/sawmill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sawmill',
  templateUrl: './sawmill.component.html',
  styleUrls: ['./sawmill.component.css']
})
export class SawmillComponent implements OnInit {


  sawmillArray: Sawmill[];
  displayedColumns: string[] = ['action', 'id', 'name', 'city', 'country', 'createdAt', 'updatedAt'];
  dataSource: MatTableDataSource<Sawmill>;
  constructor(private sawmillService: SawmillService, private route: Router) { }

  ngOnInit(): void {
    this.listAllSawmill();
  }

  listAllSawmill() {
    this.sawmillArray = this.sawmillService.listSawmill();
    this.dataSource = new MatTableDataSource(this.sawmillArray);
  }

  editSawMill(element: Sawmill) {
    this.route.navigate(["home/sawmill/" + element.id]);

  }

}
