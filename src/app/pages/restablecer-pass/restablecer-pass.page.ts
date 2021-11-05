import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-pass',
  templateUrl: './restablecer-pass.page.html',
  styleUrls: ['./restablecer-pass.page.scss'],
})
export class RestablecerPassPage implements OnInit {

  constructor(private alertController:AlertController) { }

  usuario={
    correo:'',
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usuario.correo);


    if(this.usuario.correo=="pepito@duoc.cl")
    {
      this.correcto();
    }
    else{
      this.presentAlert();
    }
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Correo inválido',
      subHeader: 'Correo no encontrado en nuestra base de datos',
      message: 'Intente Nuevamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async correcto() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Casi estamos!',
      subHeader: 'Te hemos enviado un correo para restablecer tu contraseña',
      message: 'Revise su correo',
      buttons: ['OK']
    });

    await alert.present();
  }

}
