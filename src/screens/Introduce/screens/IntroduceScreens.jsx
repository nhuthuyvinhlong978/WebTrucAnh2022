import React from "react";
import BannerComponent from "../../../components/Banner/Banner.component";
import bannerIntroduce from "../../../assets/image/bannerIntroduce.png";
import introduce1 from "../../../assets/image/introduce1.png";
import "./introduceScreen.css";
export default function IntroduceScreens() {
  return (
    <div className="">
      <div className="introduce-screen">
        <BannerComponent image={bannerIntroduce} title="Gioi thieu" />
      </div>
      <div className="wrap-body">
        <div className="title-introduce">
          <span>Lịch sử hình thành và phát triển </span>
        </div>
        <div className="content-introduce-screen">
          <span>
            Công ty TNHH CNSH Trúc Anh, tiền thân là công ty{" "}
            <strong>TNHH SX & TM Trúc Anh, được thành lập năm 2004</strong>,
            theo giấy phép kinh doanh và mã số thuế 1900295157 do Sở Kế hoạch &
            đầu tư Bạc Liêu cấp, là đơn vị chuyên sản xuất kinh doanh thuốc thú
            y thuỷ sản; Tư vấn, phát triển vùng nuôi...xác định tầm quan trọng
            của các chế phẩm sinh học trong việc bảo vệ môi trường và tạo ra sản
            phẩm tôm sạch nên từ khi thành lập đến nay các chế phẩm sinh học của
            công ty Trúc Anh luôn được nghiên cứu kỷ, phù hợp với vùng đất nuôi
            tôm của đồng bằng Sông Cửu Long nói chung, của tỉnh Bạc Liêu nói
            riêng, mọi sản phẩm của công ty trước khi đến tay người tiêu dùng
            đều được đăng ký công bố tiêu chuẩn chất lượng ....
          </span>
        </div>
        <div className="img-introduce-1">
          <img src={introduce1} alt="" width="80%" height="100%"></img>
        </div>
        <div className="title-introduce mt-4">
          <span>Cơ cấu tổ chức</span>
        </div>
        <div className="content-introduce-screen">
          <span>
            Công ty TNHH CNSH Trúc Anh, tiền thân là công ty
            <b>TNHH SX & TM Trúc Anh, được thành lập năm 2004</b>, theo giấy
            phép kinh doanh và mã số thuế 1900295157 do Sở Kế hoạch & đầu tư Bạc
            Liêu cấp, là đơn vị chuyên sản xuất kinh doanh thuốc thú y thuỷ sản;
            Tư vấn, phát triển vùng nuôi...xác định tầm quan trọng của các chế
            phẩm sinh học trong việc bảo vệ môi trường và tạo ra sản phẩm tôm
            sạch nên từ khi thành lập đến nay các chế phẩm sinh học của công ty
            Trúc Anh luôn được nghiên cứu kỷ, phù hợp với vùng đất nuôi tôm của
            đồng bằng Sông Cửu Long nói chung, của tỉnh Bạc Liêu nói riêng, mọi
            sản phẩm của công ty trước khi đến tay người tiêu dùng đều được đăng
            ký công bố tiêu chuẩn chất lượng ....{" "}
          </span>
        </div>
        <div className="img-introduce-1">
          <img src={introduce1} alt="" width="80%" height="100%"></img>
        </div>
      </div>
    </div>
  );
}
