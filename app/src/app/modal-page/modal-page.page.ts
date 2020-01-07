import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  // Data passed in by componentProps
  
  constructor(private modalController: ModalController) { }
  
  public review = {
    description: '',
    recommande:false,
    diet:false,
    hard:false

  };
  logForm() {
    console.log(this.review)
  }
  
  
  async close(){
    await this.modalController.dismiss();
  }
  ngOnInit() {
  }

}
