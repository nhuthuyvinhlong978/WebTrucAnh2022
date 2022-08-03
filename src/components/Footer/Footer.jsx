import "./footer.css";
import logoFooter from "../../assets/image/logoFooter.png";
import map from "../../assets/image/map.png";

export default function Footer() {
  return (
    <div className="wrap-body">
      <div className="row mt-5">
        <div className="col-6 mt-4">
          <div className="content-footer">
            <div className="title-footer-top">
              <span> CÔNG TY TNHH SX&TM TRÚC ANH</span>
            </div>
            <div className="icon-footer">
              <i class="fa-solid fa-house huy-2"></i>
              <span>Ấp Công Điền, Xã Vĩnh Trạch, TP. Bạc Liêu, Bạc Liêu</span>
            </div>
            <div className="icon-footer">
              <i class="fa-solid fa-phone huy-2"></i>
              <span>1900 55 88 32</span>
            </div>
            <div className="icon-footer">
              <i class="fa-solid fa-envelope huy-2"></i>
              <span>trucanhkd@gmail.com</span>
            </div>
            <div className="icon-footer">
              <i class="fa-solid fa-clipboard huy-2"></i>
              <span>
                M.S.D.N: 1900 29 5157, ngày cấp: 20/09/2004, Cấp tại Sở Kế hoạch
                và Đầu tư tỉnh Bạc Liêu
              </span>
            </div>

            <div className="title-footer-left">
              <span> CHI NHÁNH 1 </span>
            </div>
            <div className="icon-footer">
              <i class="fa-solid fa-house huy-2"></i>
              <span>53F/5 Tôn Đức Thắng, P.7, TP. Bạc Liêu, Bạc Liêu</span>
            </div>
            <div className="icon-footer">
              <i class="fa-solid fa-phone huy-2"></i>
              <span>(0291)3 959.959 - (Fax: (0291)3 959.979) </span>
            </div>

            <div className="img-footer-botom">
              <img src={logoFooter} alt=""></img>
            </div>
          </div>
        </div>

        <div className="col-6 mt-4">
          <div className="content-footer-right">
            <div className="img-footer-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62860.63914868859!2d105.72255073568036!3d10.034185113829313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f6de3edb7%3A0x527f09dbfb20b659!2zQ-G6p24gVGjGoSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1653055435484!5m2!1svi!2s"
                width={600}
                height={180}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="title-footer-right">
              <span> CHI NHÁNH 1 </span>
            </div>
            <div className="content-footer-right">
              <div className="icon-footer">
                <span>Chính sách thanh toán</span>
              </div>
              <div className="icon-footer">
                <span>Chính sách vận chuyển giao nhận</span>
              </div>
              <div className="icon-footer">
                <span>Chính sách đổi/trả và hoàn tiền</span>
              </div>
              <div className="icon-footer">
                <span>Chính sách bảo vệ thông tin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
