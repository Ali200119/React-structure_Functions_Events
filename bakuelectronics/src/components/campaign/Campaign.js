import React from "react"
import campaignImage from "../../assets/images/28may-news.jpg"
import '../../assets/campaign/Campaign.scss'

function Campaign() {
    return (
        <section id="campaign">
            <img src={campaignImage} />

            <div className="content">
                <a href="#" className="all-campaign">Bütün kampaniyalar</a>

                <h1>Müstəqillik Günü münasibətilə sənə xüsusi təkliflərimiz var!</h1>

                <p>
                    15-31 may tarixləri arasında alış-verişlərdə müstəqilsən!<br/>
                    Nağd alışda 50 %-dək endirim!<br/>
                    Məişət texnikası, TV və kondisioner 0 0 0 18 AY<br/>
                    Smart-saat və aksesuarlar 0 0 18 AY
                </p>

                <a href="#" className="more">Ətraflı</a>

                <h5>Kampaniyanın sonuna qalıb</h5>
                <h4>07gün : 21saat : 16dəq</h4>
            </div>
        </section>
    )
}

export default Campaign;