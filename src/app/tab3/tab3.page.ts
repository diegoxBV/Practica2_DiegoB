import { Component } from '@angular/core';
import { AlertController,ActionSheetController } from '@ionic/angular';
import { Productos } from 'src/interfaces';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController,private actionSheetCtrl: ActionSheetController){}


  data: Productos[] = [
    {
      nombre:"Barcelona",
      img:"../../assets/barcelona.jpg",
      info:"",
      modal:"open-modal",
      detalles: "En este modelo numero 1, podra ser implementado en toda su carpa e incluido en la bubanda"
    },
    {
      nombre:"Barcelona Modelo 2",
      img:"../../assets/barcelona2.jpg",
      info:"",
      modal:"open-modal1",
      detalles: "El modelo numero 2, tiene mas variacion en los detalles al respecto de su procesor"
    },
    {
      nombre:"Logo entre Ecuador y el mundial de Qatar",
      img:"../../assets/ecu.jpg",
      info:"",
      modal:"open-modal2",
      detalles: "Incluye la bandera de Ecuador junto al balon del mundial de catar "
    },
    {
      nombre:"Diseño junto con Ecuador y Catar ",
      img:"../../assets/ecu2.jpg",
      info:"i",
      modal:"open-modal3",
      detalles: "En este diseño la bandera de Ecuador no cuenta con su escudo, para un detalle mas minimalista"
    },
    {
      nombre:"Logotipo Ecuador catar para carpa",
      img:"../../assets/ecu3.jpg",
      info:"",
      modal:"open-modal4",
      detalles: "Este diseño para carpa se tendra Ecuado junto al balon de catar"
    },
    {
      nombre:"logotipo Liga para carpa",
      img:"../../assets/liga.jpg",
      info:"",
      modal:"open-modal5",
      detalles: "Todos sabemos que nos gusta liga y por que no impregnar ese gusto en su carpa"
    },
    {
      nombre:"Logotipo Nacional para carpa",
      img:"../../assets/nacional.jpg",
      info:"",
      modal:"open-modal6",
      detalles: "diseño para su carpa, Nacional subio a la liga A, festejalo, comprolo ya!!"
    },
    {
      nombre:"Bandera con diseño de Ecuador",
      img:"../../assets/ecu4.jpg",
      info:"",
      modal:"open-modal5",
      detalles: "Otro diseño de Ecuador con escudo de la seleccion antigua y un fondo blanco"
    },
    {
      nombre:"logotipo Ecuador fondo blanco",
      img:"../../assets/ecu5.jpg",
      info:"",
      modal:"open-modal5",
      detalles: "modelo Ecuador mundial de brasil"
    },
    {
      nombre:"bandera armada de liga",
      img:"../../assets/bandera.jpg",
      info:"",
      modal:"open-modal5",
      detalles: "Como se puede observar al formar la bandera se tendra junto al diseño escogido "
    },
    {
      nombre:"Carpa con diseño de liga",
      img:"../../assets/carpa.jpg",
      info:"",
      modal:"open-modal5",
      detalles: "este vendria a ser el modelo final del logotipo al formar la carpa "
    },
 
  ]
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Information',
      message: 'This is an alert!',
      buttons: ['OK','Cancel'],
    });

    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Favorite',
          data: {
            action: 'favorite',
          },
        },
      ],
    });

    await actionSheet.present();

  }



}
