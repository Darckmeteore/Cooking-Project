import { Component, OnInit } from '@angular/core';
import {LoadingController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
