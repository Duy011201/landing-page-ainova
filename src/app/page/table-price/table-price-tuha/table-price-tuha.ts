import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '@app/core/module/share.module';
import { FlatformComponent } from '@app/core/component/flatform/flatform.component';
import {
  SELECTED_DURATION,
  LIST_SELECTED_DURATION,
  LIST_EMPLOYEE,
  LIST_PAGE,
  DISCOUNT_DURATION,
} from '@app/core/config/type.config';
import { QuestionComponent } from '@app/core/component/question/question.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SETTING } from '@app/core/config/setting.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-price-tuha',
  imports: [SharedModule, FlatformComponent, QuestionComponent],
  templateUrl: './table-price-tuha.html',
  styleUrl: './table-price-tuha.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TablePriceComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, protected _router: Router) {
    this.form = this.formBuilder.group({
      page: [LIST_PAGE[0].value],
      employee: [LIST_EMPLOYEE[1].value],
      duration: [SELECTED_DURATION.SIX_MONTH],
    });
  }

  selectedDuration: number = SELECTED_DURATION.TWELVE_MONTH;
  protected readonly SELECTED_DURATION = SELECTED_DURATION;
  protected readonly DISCOUNT_DURATION = DISCOUNT_DURATION;
  protected readonly SETTING = SETTING;
  priceEmployee: number = 69000;
  pricePage: number = 19000;
  priceTotal: number = 0;
  priceDiscount: number = 0;

  ngOnInit() {
    this.form.get('duration')?.valueChanges.subscribe((value) => {
      if (value) {
        this.priceDiscount = this.getDiscountByDuration(value);
        this.getTotalPrice();
      }
    });

    this.form.get('employee')?.valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('page')?.setValue(this.LIST_PAGE.find((e) => e.value === value)?.value);
        if (value === this.LIST_EMPLOYEE[0].value || value === this.LIST_EMPLOYEE[1].value) {
          this.priceDiscount = 0;
        }
        this.priceDiscount = this.getDiscountByDuration(this.form.get('duration')?.value);
        this.getTotalPrice();
      }
    });

    this.form.get('page')?.valueChanges.subscribe((value) => {
      if (value === this.LIST_PAGE[0].value) {
        this.priceDiscount = 0;
      }
      this.priceDiscount = this.getDiscountByDuration(this.form.get('duration')?.value);
      if (
        this.form.get('employee')?.value === this.LIST_EMPLOYEE[0].value ||
        this.form.get('employee')?.value === this.LIST_EMPLOYEE[1].value
      ) {
        this.priceDiscount = 0;
      }
      this.getTotalPrice();
    });

    this.priceDiscount = this.getDiscountByDuration(this.form.get('duration')?.value);

    if (
      this.form.get('page')?.value === this.LIST_PAGE[0].value ||
      this.form.get('employee')?.value === this.LIST_EMPLOYEE[0].value ||
      this.form.get('employee')?.value === this.LIST_EMPLOYEE[1].value
    ) {
      this.priceDiscount = 0;
    }
  }

  goToPage(url: string): void {
    this._router.navigate(['/' + url]);
  }

  getDiscountByDuration(duration: number): number {
    switch (duration) {
      case SELECTED_DURATION.SIX_MONTH:
        return DISCOUNT_DURATION.SIX_MONTH;
      case SELECTED_DURATION.TWELVE_MONTH:
        return DISCOUNT_DURATION.TWELVE_MONTH;
      case SELECTED_DURATION.TWENTY_FOUR_MONTH:
        return DISCOUNT_DURATION.TWENTY_FOUR_MONTH;
      default:
        return 0;
    }
  }

  selectDuration(duration: number): void {
    this.selectedDuration = duration;
  }

  getTotalPrice(): number {
    const page = this.form.get('page')?.value || 0;
    const employee = this.form.get('employee')?.value || 0;
    const duration = this.form.get('duration')?.value || 0;

    const realPage = employee === 1 ? page - 1 : page;

    return (realPage * this.pricePage + employee * this.priceEmployee) * duration;
  }

  protected readonly LIST_PAGE = LIST_PAGE;
  protected readonly LIST_EMPLOYEE = LIST_EMPLOYEE;
  protected readonly LIST_SELECTED_DURATION = LIST_SELECTED_DURATION;
}
