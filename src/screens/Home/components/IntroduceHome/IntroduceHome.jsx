import "./introducehome.css";
import rectangle from "../../../../assets/image/Rectangle 4.png";
import shrimp from "../../../../assets/image/shrimp 1.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import slug from "../../../../resources/slug";

export default function IntroduceHome() {
  const history = useHistory();
  const handleClick = () => {
    history.push(slug.introduce);
  };
  return (
    <div className="wrap-body">
      <div className="row">
        <div className="col-6 ">
          <div className="wrap-introduce-left">
            <div className="introduce-left"></div>
            <div className="img-introduce">
              <img
                className="img"
                src={rectangle}
                alt=""
                width="100%"
                height="100%"
              ></img>
            </div>

            <div className="text-span">
              <div className="shrimp">
                <img src={shrimp} alt=""></img>
              </div>
              <div className="text-shrimp">
                <span>Năng suất tôm thu hoạch đạt từ 100-120 tấn/ha/năm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="text-right">
            <div className="contact-introduce">
              <div className="font-contact">
                <span>
                  Giới thiệu về
                  <br />
                  Trúc Anh BiOtech
                </span>
              </div>
              <div className=" textintro mt-3 mb-3">
                <span>
                  Công ty TNHH CNSH Trúc Anh, tiền thân là công ty TNHH SX & TM
                  Trúc Anh, được thành lập năm 2004 theo giấy phép kinh doanh và
                  mã số thẻ 1900295157 do Sở Kế hoạch và đầu tư Bạc Liêu cấp, là
                  đơn vị chuyên sản xuất kinh doanh thuốc thú y thủy sản; Tư vấn
                  phát triển vùng nuôi... xác định tầm quan trọng của các chế
                  phẩm sinh học trong việc bảo vệ môi trường và tạo ra sản phẩm
                  sinh học trong việc bảo vệ môi trường và tạo ra sản phẩm tôm
                  sạch nên từkhi thành lập đến nay các chế phẩm sinh học của
                  công ty Trúc Anh luôn được nghiên cứu kỹ
                </span>
              </div>
              <div className="btn" onClick={handleClick}>
                <div className="font-text">
                  <span>Xem thêm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
