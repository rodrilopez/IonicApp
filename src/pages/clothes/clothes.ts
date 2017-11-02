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
		tipo: String,
		marca: String,
		talla: String,
		color: String,
		precio: String
	}

	constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private storage: Storage, public alertCtrl: AlertController) {

		this.todo = this.formBuilder.group({
			tipo: ['', Validators.required],
			marca: ['', Validators.required],
			talla: ['', Validators.required],
			color: ['', Validators.required],
			precio: ['', Validators.required],
		});
	}

	logForm(){

		this.object.tipo = this.todo.get('tipo').value;
		this.object.marca = this.todo.get('marca').value;
		this.object.talla = this.todo.get('talla').value;
		this.object.color = this.todo.get('color').value;
		this.object.precio = this.todo.get('precio').value;

		let values = JSON.stringify(this.object, null);

		this.storage.length().then((val) =>{
			let key = val + 1;
			let key2 = ""+key;
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