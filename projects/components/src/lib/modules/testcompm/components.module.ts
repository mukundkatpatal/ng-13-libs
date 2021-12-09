import { NgModule } from '@angular/core';
import { FlareDirectivesModule } from '../directives/directives.module';
import { ComponentsComponent } from './components.component';



@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    FlareDirectivesModule
  ],
  exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }
