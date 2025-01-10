import styles from '@/styles/Layouts.module.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import verticalCollage from "@/assets/images/segenskirche_eggartskirch_collage.png";
import horizontalCollage from "@/assets/images/segenskirche_eggartskirch_collage_h.png";

const MainLayout = ({children}: { children: React.ReactNode | React.ReactElement | React.ReactElement[] }) => {

    let verticalBackgroundStyle = {
        backgroundImage: `url(${ verticalCollage?.src })`,
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Does not repeat the image
        width: "100%", // Full viewport width
        height: "100vh", // Full viewport height
        margin: "auto"
    };

    let horizontalBackgroundStyle = {
        backgroundImage: `url(${ horizontalCollage?.src })`,
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Repeats the image
        width: "100%", // Full viewport width
        height: "100%", // Full viewport height
        margin: "auto"
    }


    return <div className={ styles.mainLayoutWrapper }>

        <section className={ styles.graphicSection }>

            <div className={ styles.verticalImage } style={ verticalBackgroundStyle }></div>
            <div className={ styles.horizontalImage } style={ horizontalBackgroundStyle }></div>
        </section>

        <main className={ styles.mainContentWrapper }>

            <div className={ styles.mainContentInner }>
                <div className={ styles.mainInner }>
                    <Header/>
                    <div className={ styles.mainContent }>
                        { children }
                    </div>
                    <Footer/>
                </div>
            </div>


        </main>
    </div>
}

export default MainLayout;