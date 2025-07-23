import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '@app/core/module/share.module';
import { RouterLink } from '@angular/router';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';

@Component({
  selector: 'app-table-price',
  imports: [SharedModule, AccordionContent, AccordionHeader, AccordionPanel, Accordion],
  templateUrl: './table-price.html',
  styleUrl: './table-price.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TablePriceComponent {
  isSelect: boolean = false;

  onChangeSelect() {
    this.isSelect = !this.isSelect;
  }
}
