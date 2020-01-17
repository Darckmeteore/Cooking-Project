import { Component, OnInit } from '@angular/core';
import {LoadingController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor(private route: ActivatedRoute, private global : GlobalService) { }

  ngOnInit() {
  }

}
