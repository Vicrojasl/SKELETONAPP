import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators   } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { AlertController,NavController,AnimationController,createAnimation} from '@ionic/angular';

@Component({
  selector: 'app-mipaginados',
  templateUrl: './mipaginados.page.html',
  styleUrls: ['./mipaginados.page.scss'],
})
export class MipaginadosPage  {
  value = "dcaresg";
  usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(8)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(4)]),
  });

  constructor(private navCtrl: NavController,private router: Router, private alertController:AlertController) { }   
  
    
  sendDetailsWithState() {
    let navigationExtras: NavigationExtras = {
      state: {user: this.usuario.value.user}
      };
      this.router.navigate(['/home'],navigationExtras); // Esta linea es la que me permite navegar a otro page 
  }

  //Metodo para navegar desde un metodo llamado desde el html
  goToPagina2(){
    console.log("entramos al metodo");
    if("dcaresg"==this.usuario.value.user){
      this.sendDetailsWithState();
    }else{
      this.presentAlert();
    }
    
    // this.navCtrl.navigateForward('/home');
  }

 

  //Metodo de alerta 
   async presentAlert(){
     const alert = await this.alertController.create({
       header: 'Error Login',
       subHeader: 'Infomación : ',
       message: 'Usuario o contraseña son incorrecto',
       buttons: ['Aceptar'],
     });
     await alert.present();
   }

   aaa(){

    const animation = createAnimation()
        .addElement(document.querySelector('#card'))
        .duration(1500)
        .iterations(Infinity)
        .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
        .fromTo('opacity', '1', '0.2');
        animation.play();
    
    }
    
    
    
}
