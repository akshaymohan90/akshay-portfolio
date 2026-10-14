import { awards } from "@/data/awards";

export function About() {
  return (
    <div id="about" className="section-about flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
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
      <ul className="award-list">
        {awards.map((a) => (
          <li className="award-item" key={a.name + a.year}>
            <div className="left">
              <h6 className="award_name letter-space--2 text-black-72">{a.name}</h6>
              <p className="award_desc text-black-56">{a.publisher}</p>
            </div>
            <h6 className="award_year text-black-72">{a.year}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
}
