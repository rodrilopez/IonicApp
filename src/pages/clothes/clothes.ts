import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-clothes',
	templateUrl: 'clothes.html',
})
export class ClothesPage {
	private todo : FormGroup;
	object = {
		id: 0,
		type: String,
		brand: String,
		size: String,
		color: String,
		price: String,
		note: String
	}

	constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private storage: Storage, public alertCtrl: AlertController) {

		this.todo = this.formBuilder.group({
			type: ['', Validators.required],
			brand: ['', Validators.required],
			size: [''],
			color: ['', Validators.required],
			price: ['', Validators.required],
			note: [''],
		});
	}

	logForm(){

		this.object.type = this.todo.get('type').value;
		this.object.brand = this.todo.get('brand').value;
		this.object.size = this.todo.get('size').value;
		this.object.color = this.todo.get('color').value;
		this.object.price = this.todo.get('price').value;
		this.object.note = this.todo.get('note').value;

		this.storage.length().then((val) =>{
			let key = val + 1;
			let key2 = key.toString();
			this.object.id = key;
			let values = JSON.stringify(this.object, null);
			this.storage.set(key2, values);
		})

		this.storage.length().then((asd) => {
			console.log(asd);
		})

		let alert = this.alertCtrl.create({
			title: 'New Clothe Saved!',
			subTitle: 'Your Clothe was saved, just check in your inventory!',
			buttons: ['OK']
		});
		alert.present();


		this.navCtrl.popToRoot();

	}
}