import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Usuario, Sesion } from '../../interfaces/usuario';


@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage implements OnInit {

  user={
    username:'',
    password:''
  }

  sesion:Sesion=
  {
    valor:0,
    username:''
  }

  

  constructor(private alertController:AlertController, private router:Router, private storage:Storage) { }

  ngOnInit() {
  }

  onSubmit(){

    this.validarusuario(this.user);
  }

  async validarusuario(u:Usuario)
  {
    let usuario=await this.storage.get(u.username);
    if(usuario!=null)
    {
      if(u.password == usuario.password)
      {
        console.log("Todo bien todo correcto");
        this.sesion.valor=1;
        this.sesion.username=this.user.username;
        await this.storage.set('sesion',this.sesion);
        this.router.navigate(['./lista']);
        return
          
      }
      
    }
    console.log("Todo Mal");
    this.presentAlert();
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Datos Incorrectos',
      subHeader: 'llamando a la policía...',
      message: 'Intente Nuevamente',
      buttons: ['OK']
    });

    await alert.present();
  }

}
