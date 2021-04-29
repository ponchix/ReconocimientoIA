import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IAComponent } from './ia/ia.component';

const rutas: Routes = [
  { path: 'home', component: HomeComponent, pathMatch:'full'  },
  { path: 'reconocimiento', component: IAComponent  },
  { path: '', redirectTo: 'home', pathMatch:'full'  },

  
  
];
@NgModule({
  declarations: [
    AppComponent,
    IAComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
