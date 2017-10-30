import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {
	db : SQLiteObject;

	constructor(public sqlite: SQLite) {
		console.log('Hello DbProvider Provider');
	}


	public openDb(){
		return this.sqlite.create({
			name: 'data.db',
			location: 'default' // el campo location es obligatorio
		})
			.then((db: SQLiteObject) => {
			this.db =db;
		})
	}

	public createTableClothes(){
		return this.db.executeSql("create table if not exists clothes( id INTEGER PRIMARY KEY AUTOINCREMENT, tipo VARCHAR , marca VARCHAR, talla VARCHAR, color VARCHAR, precio FLOAT)",{})
	}

	public addClothe(arryClothe){
		let sql = "INSERT INTO clothes (tipo, marca, talla, color, precio) values (?,?,?,?,?)";
		return this.db.executeSql(sql,[arryClothe.tipo,arryClothe.marca,arryClothe.talla,arryClothe.color,arryClothe.precio]);
	}
	
	
}
