"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <div id="testimonial" className="section-testimonial flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-tes" />
        Testimonials
      </div>
      <div className="heading overflow-hidden mb-4">
        <div className="head-left w-100">
          <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade mb-2">
            Feedback &amp; Recommendations
          </h4>
          <p className="text-black-56 text-body-3 effectFade fadeUp no-div">
            What engineering leads, mentors, and teammates say about collaborating on ML models and full-stack software.
          </p>
        </div>
      </div>

      <div className="swiper-testimonial_wrap effectFade fadeUp no-div">
        <Swiper
          modules={[Navigation, Pagination]}
          className="swiper tf-swiper swiper-testimonial"
          slidesPerView={1}
          navigation={{ nextEl: ".sw-nav-next", prevEl: ".sw-nav-prev" }}
          pagination={{ el: ".number-pagination", type: "fraction" }}
          dir="ltr"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.authorName}>
              <div className="testimonial-v01">
                <div className="tes-icon">
                  <i className="icon icon-quote" />
                </div>
                <h5 className="tes-text letter-space--2 text-black-72">{t.text}</h5>
                <div className="tes-author">
                  <p className="author_name fw-medium text-black-72">{t.authorName}</p>
                  <p className="text-body-3 text-black-56">{t.authorRole}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="number-pagination" />
        <div className="group-btn">
          <div className="sw-nav sw-nav-prev link" aria-label="Previous testimonial" role="button" tabIndex={0}>
            <i className="icon icon-arrow-caret-left" />
          </div>
          <div className="sw-nav sw-nav-next link" aria-label="Next testimonial" role="button" tabIndex={0}>
            <i className="icon icon-arrow-caret-right" />
          </div>
        </div>
      </div>
    </div>
  );
}
