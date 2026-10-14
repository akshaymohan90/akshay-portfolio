"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const awardBackImages = [
  "/assets/images/section/award-3.jpg",
  "/assets/images/section/award-4.jpg",
  "/assets/images/section/award-5.jpg",
  "/assets/images/section/award-6.jpg",
  "/assets/images/section/award-8.jpg",
  "/assets/images/section/award-7.jpg",
];

const swiperAwardImages = [
  "/assets/images/section/award-1.jpg",
  "/assets/images/section/award-2.jpg",
  "/assets/images/section/award-3.jpg",
  "/assets/images/section/award-4.jpg",
  "/assets/images/section/award-5.jpg",
  "/assets/images/section/award-6.jpg",
];

export function AboutV2() {
  return (
    <div id="about" className="section-about type-2 flat-spacing">
      <div className="sect-tag text-caption fw-medium">
        <i className="icon icon-user-circle" />
        About
      </div>
      <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
        Engineering intelligent ML pipelines <br className="d-none d-lg-block" />
        and scalable web systems <br className="d-none d-lg-block" />
        with data-driven precision
      </h4>
      <p className="s-desc text-black-56 scrolling-effect effectTop">
        AI/ML Engineer in training and Software Developer with hands-on experience building end-to-end ML pipelines
        <br className="d-none d-lg-block" /> using real-world datasets (20K+ samples), model evaluation, and feature importance analysis. <br />
        <br />
        Currently upskilling through a structured Data Science, Machine Learning & MLOps program at Skillianz,
        <br className="d-none d-lg-block" /> with a long-term goal of contributing to scalable AI systems at top product-based companies.
      </p>

      <div className="wrap-hover-award d-none d-sm-block">
        <div className="award-inner">
          <div className="award-front">
            <div className="image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image  width={237} height={336} src="/assets/images/section/award-2.jpg" alt="award" />
            </div>
          </div>
          <div className="award-back">
            <div className="image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image  width={237} height={336} src="/assets/images/section/award-2.jpg" alt="award" />
            </div>
            <div className="award-small">
              {awardBackImages.map((src, i) => (
                <div className="image-small" key={i}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image  width={158} height={224} src={src} alt={`award-${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Pagination]}
        className="swiper swiper-award d-sm-none"
        slidesPerView={2}
        slidesPerGroup={2}
        spaceBetween={10}
        speed={1000}
        pagination={{ el: ".tf-sw-pagination", clickable: true }}
        dir="ltr"
      >
        {swiperAwardImages.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="image-small">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image  width={158} height={224} src={src} alt={`award-${i}`} />
            </div>
          </SwiperSlide>
        ))}
        <div className="sw-dot-default tf-sw-pagination" slot="container-end" />
      </Swiper>
    </div>
  );
}
