
import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/interfaces/categorias';
import { ComidasService } from '../../services/comidas.service';

//NATIVE
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tipocomidas',
  templateUrl: './tipocomidas.page.html',
  styleUrls: ['./tipocomidas.page.scss'],
})
export class TipocomidasPage implements OnInit {

  comidas:Meal[]=[];
  tipo:string='';

  constructor(private srvcomidas:ComidasService,
    private iab: InAppBrowser,
    private actrouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.actrouter.queryParams.subscribe(datos=>
    {
      this.tipo=this.router.getCurrentNavigation().extras.state.categoria;
    });

    this.srvcomidas.getComidasxTipo("Beef").subscribe(datos=>
      {
        this.comidas.push(...datos.meals);
        console.log(this.comidas);
        /* console.log(datos); */      
      });
  }
  onClick(){
    console.log("ir a receta");

    const browser = this.iab.create('https://ionicframework.com/','_system');
  }
}
