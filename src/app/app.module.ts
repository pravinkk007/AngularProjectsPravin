import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from "@ngxs/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,    
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
