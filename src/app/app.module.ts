import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { ItemsPage } from '../pages/items/items';
import { ClothesPage } from '../pages/clothes/clothes';
import { ModalPage } from '../pages/modal/modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { DbProvider } from '../providers/db/db';
//import { SQLite } from '@ionic-native/sqlite';

@NgModule({
	declarations: [
		MyApp,
		ListPage,
		ItemsPage,
		ClothesPage,
		ModalPage,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot(),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		ListPage,
		ItemsPage,
		ClothesPage,
		ModalPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
//		DbProvider,
//		SQLite
	]
})
export class AppModule {}
