import { Component } from '@angular/core';
import { SharedModule } from '@app/core/module/share.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '@app/app.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
  ) {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      content: [null, [Validators.required]]
    });
  }
  onSubmit() {
    if (!this.form.invalid) {
      this.appService.post('webhook/c8e092d3-057c-48f6-a619-d7791966e5d8', this.form.value).subscribe({
        next: (res) => {
          alert("Bạn đã gửi thông tin thành công!");
        },
        error: (err) => {
          alert("Gửi thông tin thất bại!");
        }
      });
    } else {
      alert("Bạn chưa nhập đầy đủ thông tin!");
    }
  }
}
