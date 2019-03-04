import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbxDataTableModule } from 'ngbx-data-table';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		NgbxDataTableModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
