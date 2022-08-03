import "./subbanner.css"
import subbanner from "../../../../assets/image/subbanner.png"
import logobanner from "../../../../assets/image/logobanner.png"

export  default function SubBanner(){
    return(
        <div className="subbanner">
            <div>
                <img src={subbanner} alt ="" width="100%" height="100%"></img>
            </div>
            <div className="wrap-body">
                <div className="content-subbanner">
                    <div className="logo-subbanner">
                        <img src={logobanner} alt ="" width="100%" height="100%"></img>
                    </div>
                    <div className="text-subbanner">
                        <span>Bạn đồng hành của mọi nhà</span>
                    </div>
                    </div>
                </div>
            </div>

    )
}