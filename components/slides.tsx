import Image from "next/image";
import { Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination, Scrollbar, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from "../images/80_Hr_Inspection_01.webp";
import img2 from "../images/80_Hr_Inspection_02.webp";
import img3 from "../images/80_Hr_Inspection_03.webp";
import img4 from "../images/80_Hr_Inspection_04.webp";
import img5 from "../images/80_Hr_Inspection_05.webp";
import img6 from "../images/80_Hr_Inspection_06.webp";
import {useCallback, useEffect, useRef, useState} from "react";

const Slides = () => {
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const updateIndex = useCallback(
        () => setCurrentSlide(swiperRef.current.swiper.realIndex),
        []
    );
    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;

        if (swiperInstance) {
            swiperInstance.on("slideChange", updateIndex);
        }
        return () => {
            if (swiperInstance) {
                swiperInstance.off("slideChange", updateIndex);
            }
        };
    }, [updateIndex]);


    return (
        <>
            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                modules={[EffectFade, Autoplay, Scrollbar, Pagination, Navigation]}
                fadeEffect={{crossFade: true}}
                effect={"fade"}
                pagination={{
                    type: "progressbar",
                }}
                navigation
            >
                <SwiperSlide>
                    <Image src={img5} alt={"rle inspection"} className={"nx-w-full"} style={{backgroundSize: "cover"}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image priority src={img1} alt={"rle inspection"} className={"nx-w-full"} style={{backgroundSize: "cover"}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={img2} alt={"rle inspection"} className={"nx-w-full"} style={{backgroundSize: "cover"}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={img3} alt={"rle inspection"} className={"nx-w-full"} style={{backgroundSize: "cover"}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={img4} alt={"rle inspection"} className={"nx-w-full"} style={{backgroundSize: "cover"}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={img6} alt={"rle inspection"} className={"nx-w-full"} style={{backgroundSize: "cover"}}/>
                </SwiperSlide>
            </Swiper>
            {
                currentSlide === 0 && (
                    <div className={"nx-flex nx-flex-col nx-pt-8 nx-text-xl nx-gap-4"}>
                        <div>
                            Thrust bearing inserts plus pre-loading o-rings (red).
                        </div>
                        <div>
                            Grooves on head gasket that relieve pressure behind secondary seal during startup, allowing seal
                            to seat. Prior to this, primary sealing ring leaked occasionally (blue).
                        </div>
                        <div>
                            Area on RL face that engages head insert thrust bearing brass inserts (green).
                        </div>
                    </div>
                )
            }
            {
                currentSlide === 1 && (
                    <div className={"nx-flex nx-flex-col nx-text-xl nx-gap-4"}>
                        <div className={"nx-inline-block"}>
                            Carbon deposits on head shield OD stops here, indicating no blowby flow (red).
                        </div>
                        <div className={"nx-inline-block"}>
                            Springs are clean from carbon deposits (blue).
                        </div>
                    </div>
                )
            }
            {
                currentSlide === 2 && (
                    <div className={"nx-text-xl nx-pt-8"}>
                        0.040" O-ring that preloads thrust inserts in order to deal with RL face runout. Brass thrust
                        bearing inserts take upwards thrust load from oil pressure. Rubbing faces show only minor wear,
                        probably just break-in, faces polished (red).
                    </div>
                )
            }
            {
                currentSlide === 3 && (
                    <div className={"nx-flex nx-flex-col nx-pt-8 nx-text-xl nx-gap-4"}>
                        <div>
                            The source of these scratches is unknown, they likely originated during assembly. Scratches are
                            too shallow to interfere with sealing (red).
                        </div>
                    </div>
                )
            }
            {
                currentSlide === 4 && (
                    <div className={"nx-flex nx-flex-col nx-pt-8 nx-text-xl nx-gap-4"}>
                        <div>
                            Carbon deposits stop here, shiny above that spot. Again, no blowby flow (red).
                        </div>
                    </div>
                )
            }
            {
                currentSlide === 5 && (
                    <div className={"nx-flex nx-flex-col nx-pt-8 nx-text-xl nx-gap-4"}>
                        <div>
                            This area on OD of RL, about 0.100 wide showed distress in prior runs, now with expanded oil
                            groove no distress is visible, but we still think this area still causes thermal seizure due to
                            still inadequate oil supply (red).
                        </div>
                        <div>
                            Brass thrust washer, takes downward thrust load from springs until oil pressure builds up, face
                            shiny, very little wear (blue).
                        </div>
                    </div>
                )
            }
        </>
    )
};

export default Slides;