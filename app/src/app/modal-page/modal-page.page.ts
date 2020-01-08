import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  // Data passed in by componentProps
  
  constructor(private modalController: ModalController,private http : HttpClient,) { }
  
  public review = {
    description: '',
    recommande:false,
    diet:false,
    hard:false

  };
  logForm() {
        
    this.http.post('http://localhost:3000/api/createreview',{description: this.review.description, recommande: this.review.recommande , diet: this.review.diet, hard: this.review.hard})
      .subscribe(data => {
        console.log(data);
        }, error => {
        console.log(error);
      });
      this.close();
  }
  
  
  async close(){
    await this.modalController.dismiss();
  }
  ngOnInit() {
  }

}
