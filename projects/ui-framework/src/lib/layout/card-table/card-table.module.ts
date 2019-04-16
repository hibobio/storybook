import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableCardCellComponent } from './table-card-cell/table-card-cell.component';
import { TableCardComponent } from './table-card/table-card.component';
import { CardTableComponent } from './card-table/card-table.component';
import { CellWidthsService } from './cell-widths-service/cell-widths.service';
import { ComponentRendererModule } from '../../services/component-renderer/component-renderer.module';
import { TypographyModule } from '../../typography/typography.module';

@NgModule({
  declarations: [
    TableCardCellComponent,
    TableCardComponent,
    CardTableComponent
  ],
  imports: [CommonModule, TypographyModule, ComponentRendererModule],
  exports: [CardTableComponent],
  providers: [CellWidthsService]
})
export class CardTableModule {}
