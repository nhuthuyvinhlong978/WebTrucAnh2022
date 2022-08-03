import React from "react";
import bannerIntroduce from "../../../assets/image/bannerIntroduce.png";
import BannerComponent from "../../../components/Banner/Banner.component";
import Recruit from "../../../assets/image/Recruit.png";
import "./recruit.css";

export default function RecruistScreens() {
  return (
    <div>
      <div className="">
        <BannerComponent image={bannerIntroduce} title="Tuyển dụng" />
      </div>
      <div className="wrap-body">
        <div className="img-recruit mt-5">
          <img src={Recruit} alt="" width="100%" height="100%"></img>
        </div>
        <div className="content-recruit-first">
          <span>
            <strong>CÔNG TY TNHH SẢN XUẤT VÀ THƯƠNG MẠI TRÚC ANH</strong> là
            Doanh nghiệp Khoa học Công nghệ, Doanh nghiệp Nông nghiệp Ứng dụng
            Công nghệ cao chuyên sản xuất kinh doanh Đông trùng Hạ thảo và các
            sản phẩm thực phẩm chức năng bảo vệ sức khỏe; sản xuất giống tôm
            thẻ, chế phẩm sinh học sử dụng trong nuôi trồng thủy sản; tư vấn và
            chuyển giao kỹ thuật nuôi tôm quảng canh cải tiến ít thay nước đến
            kỹ thuật nuôi tôm siêu thâm canh hai giai đoạn. Đặc biệt quy trình
            nuôi không sử dụng kháng sinh hóa chất và được Bộ Nông nghiệp và
            phát triển nông thôn cấp giấy chứng nhận. Hiện công ty chúng tôi cần
            tuyển:
          </span>
        </div>
        <div className="content-recruit-second ">
          <div>
            <span>NHÂN VIÊN KINH DOANH THUỐC THÚ Y THỦY SẢN : 10 NGƯỜI</span>
          </div>
          <div>
            <span> NHÂN VIÊN KINH DOANH TÔM GIỐNG : 04 NGƯỜI</span>
          </div>
          <div>
            <span>NHÂN VIÊN SẢN XUẤT VÀ CHẾ BIẾN ĐTHT : 02 NGƯỜI</span>
          </div>
        </div>
        <div className="content-recruit-third">
          <div className="content-recruit-require">
            <span>
              <strong>I.Yêu cầu</strong>
            </span>
          </div>
          <div className="content-require">
            <span>
              <strong>Nhân viên Kinh doanh thuốc thú y thủy sản:</strong> Nam,
              tốt nghiệp cao đẳng trở lên ngành nuôi trồng thủy sản. Ưu tiên
              người có kinh nghiệm;
            </span>
            <div>
              <span>
                <strong>Nhân viên Kinh doanh tôm giống:</strong> Nam, tốt nghiệp
                cao đẳng trở lên ngành nuôi trồng thủy sản hoặc ngành nghề khác
                liên quan;
              </span>
            </div>
            <div>
              <span>
                <strong>
                  Nhân viên sản xuất và chế biến Đông trùng Hạ thảo:
                </strong>
                Nam, nữ tốt nghiệp cao đẳng trở lên ngành Công nghệ thực phẩm,
                công nghệ sinh học hoặc các ngành nghề khác liên quan.
              </span>
            </div>
            <div className="general-requirements">
              <div className="general-requirements-one">
                <span>
                  <strong>Yêu cầu chung:</strong>
                </span>
              </div>
              <div className="general-requirements-two">
                <span>- Độ tuổi yêu cầu: Nam, nữ từ 20 đến 35 tuổi;</span>
              </div>
              <div className="general-requirements-two">
                <span> - Yêu cầu công việc: Sẽ trao đổi khi phỏng vấn;</span>
              </div>
              <div className="general-requirements-two">
                <span>- Sức khỏe tốt, nhiệt tình, siêng năng, trung thực;</span>
              </div>
              <div className="general-requirements-two">
                <span>- Làm việc có trách nhiệm.</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
