import "../assets/css/style.css"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import ClientRoutes from "../routes/ClientRoutes"

export default function MainLayout(){
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="wrap-content">
                <ClientRoutes />
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}