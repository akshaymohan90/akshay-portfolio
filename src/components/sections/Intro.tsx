import { BrandSlider } from "@/components/BrandSlider";
import { ImageSwitch } from "@/components/ImageSwitch";

export function Intro() {
    return (
        <div id="home" className="section-intro flat-spacing">
            <div className="intro-author d-lg-none effectFade fadeUp no-div">
                <div className="author-image">
                    <ImageSwitch
                        light="/assets/images/avatar/akshay-bw.png"
                        dark="/assets/images/avatar/akshay-color.jpg"
                        width={48}
                        height={48}
                        alt="Akshay Mohan"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="author-info letter-space--05">
                    <p className="info_name text-black">Akshay Mohan</p>
                    <p className="info_duty text-black-50 text-body-3">
                        AI/ML Engineer & Software Developer
                    </p>
                </div>
            </div>

            <h1 className="intro-title letter-space--2">
                I build <span className="is-bg">scalable AI</span> <br />
                <span className="type-2 is-bg">& ML systems</span> with modern web engineering
            </h1>

            <div className="box-counter effectFade fadeUp no-div">
                <div className="wg-counter">
                    <p className="counter h1 d-flex font-2 letter-space--2">
                        <span className="number" data-speed="1000" data-to="3">
                            0
                        </span>
                        +
                    </p>
                    <p className="text text-black-56 text-body-3">
                        Years of Experience
                    </p>
                </div>
                <div className="wg-counter">
                    <p className="counter h1 d-flex font-2 letter-space--2">
                        <span className="number" data-speed="1000" data-to="20">
                            0
                        </span>
                        K+
                    </p>
                    <p className="text text-black-56 text-body-3">
                        ML Dataset Samples
                    </p>
                </div>
            </div>

            <p className="intro-client letter-space--05 text-body-3">
                <i className="icon icon-global-elip" />
                Organizations & Experience (2024–Present)
            </p>

            <BrandSlider />
        </div>
    );
}
