import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiListAndChipsComponent } from './multi-list-and-chips.component';
import { MultiListModule } from '../../lists/multi-list/multi-list.module';
import { ChipListModule } from '../chip-list/chip-list.module';
import { EmptyStateModule } from '../../indicators/empty-state/empty-state.module';

@NgModule({
  declarations: [MultiListAndChipsComponent],
  imports: [CommonModule, ChipListModule, MultiListModule, EmptyStateModule],
  exports: [MultiListAndChipsComponent],
  providers: [],
})
export class MultiListAndChipsModule {}
