import "./header.css";
import TrucAnh from "../../../src/assets/image/image 50.png";
import slug from "../../resources/slug";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
  const history = useHistory();
  const handleClick = (url) => {
    history.push(url);
  };
  return (
    <div className=" huy">
      <div className="row">
        <div className="header-top">
          <div className="wrap-body">
            <div className="row">
              <div className="col-5 ">
                <div className="header-icon">
                  <i className="fa-brands fa-youtube"></i>
                  <i className="fa-brands fa-facebook"></i>
                </div>
              </div>

              <div className="col-7">
                <div className="wrap-icon">
                  <div className="wrap-text">
                    <i class="fa-solid fa-magnifying-glass spacing"></i>
                    <span>Tìm kiếm</span>
                  </div>
                  <div className="wrap-text">
                    <i class="fa-solid fa-briefcase spacing"></i>
                    <span onClick={() => handleClick(slug.link)}>
                      Liên kết đào tạo
                    </span>
                  </div>
                  <div className="wrap-text">
                    <i class="fa-solid fa-trophy spacing"></i>
                    <span onClick={() => handleClick(slug.achievements)}>
                      Thành tích
                    </span>
                  </div>
                  <div className="wrap-text">
                    <i class="fa-solid fa-phone spacing"></i>
                    <span onClick={() => handleClick(slug.recruit)}>
                      Tuyển dụng
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-bottom">
            <div className="wrap-body">
              <div className="row">
                <div className="col-2 img-header">
                  <div className="img-header-2">
                    <img src={TrucAnh} alt=""></img>
                  </div>
                </div>

                <div className="col-10">
                  <div className="all-text">
                    <div className="wrap-body-two">
                      <span onClick={() => handleClick(slug.home)}>
                        Trang chủ
                      </span>
                    </div>
                    <div className="wrap-body-two">
                      <span onClick={() => handleClick(slug.introduce)}>
                        Giới thiệu
                      </span>
                    </div>
                    <div className="wrap-body-two">
                      <span onClick={() => handleClick(slug.news)}>
                        Tin tức
                      </span>
                    </div>
                    <div className="wrap-body-two">
                      <span onClick={() => handleClick(slug.process)}>
                        Quy trình nuôi tôm
                      </span>
                    </div>
                    <div className="wrap-body-two">
                      <span onClick={() => handleClick(slug.imagevideo)}>
                        Hình ảnh
                      </span>
                    </div>
                    <div className="wrap-body-two">
                      <span onClick={() => handleClick(slug.product)}>
                        Sản phẩm
                      </span>
                    </div>

                    <div className="wrap-body-two">
                      <span onClick={() => handleClick(slug.library)}>
                        Thư viện
                      </span>
                    </div>
                    <div className="wrap-body-two">
                      <span onClick={() => handleClick(slug.knowledge)}>
                        Kiến thức
                      </span>
                    </div>
                    <div className="wrap-body-two">
                      <span onClick={() => handleClick(slug.contact)}>
                        Liên hệ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
