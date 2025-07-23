import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '@app/core/module/share.module';
import { RouterLink } from '@angular/router';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';

@Component({
  selector: 'app-product',
  imports: [SharedModule, AccordionContent, AccordionHeader, AccordionPanel, Accordion],
  templateUrl: './product.html',
  styleUrl: './product.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProductComponent {
  isSelect: boolean = true;

  onChangeSelect() {
    this.isSelect = !this.isSelect;
  }
}
