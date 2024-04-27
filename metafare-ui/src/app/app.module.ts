import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './features/left-menu/left-menu.component';
import { LeadsModule } from './features/leads/leads.module';
import { OpportunityModule } from './features/opportunity/opportunity.module';
import { ButtonRendererComponent } from './button-renderer/button-renderer.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ActionsRendererComponent } from './features/actions-renderer/actions-renderer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    ButtonRendererComponent,
    ActionsRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    LeadsModule,
    OpportunityModule,
    FormsModule, 
    AgGridModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
