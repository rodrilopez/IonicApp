import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemsPage } from '../items/items';
import { ClothesPage } from '../clothes/clothes';

@Component({
	selector: 'page-list',
	templateUrl: 'list.html'
})
export class ListPage {
	selectedItem: any;
	icons: string[];
	nameItems: string[];
	items: Array<{title: string, icon: string}>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		// If we navigated to this page, we will have an item available as a nav param
		this.selectedItem = navParams.get('item');

		this.categorys();
	}

	categorys(){
		this.items = [];
		this.nameItems = ['Buzos', 'Pantalones', 'Remeras','Ropa Interior' , 'Accesorios', 'Camperas', 'Zapatillas'];
		this.icons = ['shirt']

		for (let i = 0; i < this.nameItems.length; i++){
			this.items.push({
				title: this.nameItems[i],
				icon: this.icons[0]
			});
		}
	}

	itemTapped(event, item) {
		// That's right, we're pushing to ourselves!
		this.navCtrl.push(ItemsPage, {
			item: item
		});
	}

	toPageAddClothe(event, item) {
		// That's right, we're pushing to ourselves!
		this.navCtrl.push(ClothesPage, {

		});
	}
}
