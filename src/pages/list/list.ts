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
	jogginImageUrl = ("./assets/imgs/jacket.png");
	pantsImageUrl = ("./assets/imgs/pants.png");
	shirtImageUrl = ("./assets/imgs/shirt.png");
	underwearImageUrl = ("./assets/imgs/underwear.png");
	tieImageUrl = ("./assets/imgs/tie.png");
	shoeImageUrl = ("./assets/imgs/shoe.png");
	jacketImageUrl = ("./assets/imgs/saco.png");

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		// If we navigated to this page, we will have an item available as a nav param
		this.selectedItem = navParams.get('item');

		this.categorys();
	}

	categorys(){
		this.items = [];
		this.nameItems = ['jogging suits', 'Jeans', 'T-shirts', 'Underwears' , 'Accessories', 'Jackets', 'Sneakers'];
		this.icons = [this.jogginImageUrl, this.pantsImageUrl, this.shirtImageUrl, this.underwearImageUrl, this.tieImageUrl, this.jacketImageUrl, this.shoeImageUrl];
		console.log(this.icons);
		for (let i = 0; i < this.nameItems.length; i++){
			this.items.push({
				title: this.nameItems[i],
				icon: this.icons[i]
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
