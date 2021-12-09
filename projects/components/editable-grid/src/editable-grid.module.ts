import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlareDirectivesModule } from '../../src/lib/modules/directives/directives.module';
import { EditableGridComponent } from './editable-grid.component';

@NgModule({
  imports: [CommonModule, FlareDirectivesModule],
  declarations: [EditableGridComponent],
  exports: [EditableGridComponent]
})
export class FlareEditableGridModule {

}