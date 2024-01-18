import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    MatFormFieldModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
