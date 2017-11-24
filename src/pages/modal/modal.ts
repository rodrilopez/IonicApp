import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-modal',
	templateUrl: 'modal.html',
})
export class ModalPage {
	item: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public storage: Storage, public alertCtrl: AlertController) {
		
		this.item = navParams.data;
		console.log(this.item);
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}
	
	deleteItem() {
		let key = ""+this.item.id;
		this.storage.remove(key);
		
		let alert = this.alertCtrl.create({
			title: 'Your Clothe was Removed!',
			subTitle: 'Your Clothe was removed from your inventory!',
			buttons: ['OK']
		});
		alert.present();
		
		this.viewCtrl.dismiss();
	}

}


