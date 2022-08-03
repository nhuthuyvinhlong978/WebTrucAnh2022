import "./home.css"
import IntroduceHome from "../components/IntroduceHome/IntroduceHome"
import News from "../components/HomeNews/HomeNews"
import SubBanner from "../components/SubBanner/Subbanner"
import HomeProcess from "../components/HomeProcess/HomeProcess"
import HomeProduct from "../components/Product/HomeProduct"
import Banner from "../components/Banner/Banner"

export default function HomeScreens(){
    return (
        <div className="">
            
          <div className="wrap-banner-home">
                <Banner/>
            </div>
            <div className="introduce mt-5">
                <IntroduceHome/>
            </div>
            <div className="news">
                <News/>
            </div>
            <div className="subbanner">
                <SubBanner/>
            </div>
            <div className="process">
                <HomeProcess/>
            </div>
            <div className="product">
                <HomeProduct/>
            </div>
           {/* <div className="subbanner">
                <SubBanner/>
            </div> */}
           
        </div>
    )
}