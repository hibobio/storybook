import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../../services/utils/utils.module';
import { UtilsService } from '../../services/utils/utils.service';
import { DOMhelpers } from '../utils/dom-helpers.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TruncateTooltipComponent } from './truncate-tooltip.component';
import { TruncateTooltipDirective } from './truncate-tooltip.directive';

@NgModule({
  imports: [CommonModule, UtilsModule, MatTooltipModule],
  declarations: [TruncateTooltipComponent, TruncateTooltipDirective],
  exports: [TruncateTooltipComponent, TruncateTooltipDirective],
  providers: [UtilsService, DOMhelpers],
  entryComponents: [TruncateTooltipComponent]
})
export class TruncateTooltipModule {}
