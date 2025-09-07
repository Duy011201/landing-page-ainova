import { OnDestroy, Directive, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '@app/core/module/share.module';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [SharedModule, Accordion, AccordionContent, AccordionHeader, AccordionPanel],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {

}
