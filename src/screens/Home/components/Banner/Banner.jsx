import "./banner.css"
import banner from "../../../../assets/image/banner.png"
import logobanner from "../../../../assets/image/logobanner.png"

export  default function Banner(){
    return(
        <div className="banner">
            <div className="img-intro">
                <img src={banner} alt ="" width="100%" height="100%"></img>
            </div>
            <div className="wrap-body">
                <div className="content-banner">
                    <div className="text-banner-bottom">
                        <span>Quy trình nuôi tôm sạch</span>
                    </div>
                    <div className="logo">
                        <img src={logobanner} alt ="" width="100%" height="100%"></img>
                    </div>
                    <div className="text-banner-bottom">
                        <span>Bằng sự tận tâm với người nông dân, lấy thành công của người nuôi trồng thuỷ sản làm tiêu chí để thành công cho công ty</span>
                    </div>
                </div>
               
            </div>
        </div>
    )
}