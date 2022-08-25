import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { AlertController,NavController  } from '@ionic/angular';
import { FormControl,FormGroup,Validators   } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {
  
  nombre: string;
  userHome: any;
  value = "dcaresg";

  constructor(private activeroute: ActivatedRoute, private router: Router, private alertController:AlertController) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userHome = this.router.getCurrentNavigation().extras.state.user; 
        console.log("Dato a mostrar" + this.userHome)     
        }
      });
    }

    
    //Metodo para mostrar 
    Mostrar(){
      this.presentAlert();
    }

    //Metodo de alerta 
   async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Información',
      subHeader: 'Usuario : ',
      message: 'Su nombre es : ' + this.nombre,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

}
