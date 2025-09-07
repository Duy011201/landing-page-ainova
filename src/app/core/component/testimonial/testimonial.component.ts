import { OnDestroy, Directive, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '@app/core/module/share.module';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent {
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  testimonials = [
    {
      imageCEO: 'https://assets.filum.ai/Ellipse_863_07fde76fbc.png',
      CEOName: 'Phan Tiến Dũng',
      companyLogo: 'https://assets.filum.ai/image_222_5f9a7d1244.png',
      companyName: 'Gohub',
      caption:
        'Trong các phần mềm hỗ trợ bán hàng trên Facebook mình thấy TUHA tiện lợi nhất, báo cáo, quản trị fanpage, chia số cho nhân viên sales cũng dễ, công bằng. Với 1 người quản lý thì quá tiện lợi.',
      CEOPosition: 'Co-Founder & Head of Growth',
    },
    {
      imageCEO: 'https://assets.filum.ai/Ellipse_858_e845d0f00a.png',
      CEOName: 'Vũ Việt Anh Tuấn',
      companyLogo: 'https://assets.filum.ai/Orgalife_2_3af149fd6a.svg',
      companyName: 'Orgalife',
      caption:
        'Orgalife nhận ra rằng việc lắng nghe khách hàng không chỉ dừng ở việc hỏi, mà là hệ thống hóa từng phản hồi, chủ động xử lý và lấy đó làm nền tảng đổi mới sản phẩm. Nhờ Filum.ai, tiêu chuẩn phục vụ khách hàng của Orgalife đã vượt khỏi giới hạn cũ, vươn tới sự chuyên nghiệp và chủ động hơn mỗi ngày.',
      CEOPosition: 'CTO',
    },
    {
      imageCEO: 'https://assets.filum.ai/Ellipse_1790_5f1fc528c0.png',
      CEOName: 'Nguyễn Phan Anh',
      companyLogo: 'https://assets.filum.ai/Huythanh_1_1dc5f86c4f.png',
      companyName: 'Huy Thanh Jewelry',
      caption:
        'Trước việc chia số, trùng số và xác định số nào hiệu quả từ chiến dịch nào ... là một việc không thể với chúng tôi. Áp dụng Tuha vào doanh nghiệp giúp tôi tối ưu hóa đươc data và các chiến dịch quảng cáo. Đội ngũ chăm sóc khách hàng cũng tuyệt vời cảm ơn các bạn.',
      CEOPosition: 'Quản lý',
    },
    {
      imageCEO: 'https://assets.filum.ai/testimonial_author_person_avatar_b83f758e43.png',
      CEOName: 'LOAN NHI',
      companyLogo: 'https://assets.filum.ai/thefaceshop_black_1_2_c55ee5bff6.png',
      companyName: 'The Face Shop',
      caption:
        'Là đơn vị gọi lại đầu tiên sau 4 đơn vị tôi để lại số và cũng là đơn vị phù hợp nhất với tiêu chí bảo mật lead mà chúng tôi bị mất liên tiếp khi sử dụng phần mềm khác. Phương pháp bảo mật quá đỉnh. số đã khó tìm mà mất số thì siêu buôn luôn.',
      CEOPosition: 'Nhân viên chăm sóc khách hàng',
    },
  ];
}
