import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ModalPage } from '../modal/modal';
//import { ListPage } from '../list/list'

@IonicPage()
@Component({
	selector: 'page-items',
	templateUrl: 'items.html',
})
export class ItemsPage {
	item: any;
	value: any;
	array = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController) {

		this.item = navParams.get('item')

		this.storage.keys().then((asd) => {
			for (let i of asd){
				this.storage.get(i).then((val) => {
					let jsval = JSON.parse(val);
					if (jsval.tipo == this.item.title){
						this.array.push(jsval);
					}
				})
			}
		})

		console.log(this.array);
	}

	itemTapped(event, item) {
		// That's right, we're pushing to ourselves!
		let modal = this.modalCtrl.create(ModalPage);
		modal.present();
	}
}
