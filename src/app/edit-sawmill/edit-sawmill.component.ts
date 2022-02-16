import { SawmillService } from './../Service/sawmill/sawmill.service';
import { Navigation, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Sawmill } from '../Model/Sawmill';

@Component({
  selector: 'editsawmill',
  templateUrl: './edit-sawmill.component.html',
  styleUrls: ['./edit-sawmill.component.css']
})
export class EditSawmillComponent implements OnInit {


  editSawmillModel: Sawmill;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private sawmillService: SawmillService) {

  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id);
    this.editSawmillModel = this.sawmillService.getSawMill(id);
  }

}
