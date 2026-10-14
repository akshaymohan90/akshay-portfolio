import Image from "next/image";
import { ImageSwitch } from "./ImageSwitch";
import { profile } from "@/data/profile";

type UserSidebarProps = {
    variant?: "v1" | "v2" | "v3";
};

export function UserSidebar({ variant = "v1" }: UserSidebarProps) {
    const showMetaLeft = variant !== "v2";
    const dotIsInline = variant === "v2";
    return (
        <div className="sidebar-user">
            <div className="wrap">
                <div className="user-image">
                    <div className="image">
                        <ImageSwitch
                            light="/assets/images/avatar/akshay-bw.png"
                            dark="/assets/images/avatar/akshay-color.jpg"
                            width={468}
                            height={856}
                            alt="Akshay Mohan"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center 15%",
                            }}
                        />
                    </div>
                </div>
                <ul className="tf-social-icon-2 user-social d-grid">
                    {profile.socials.map((s) => (
                        <li key={s.label}>
                            <a href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" title={s.label}>
                                {s.label === "GitHub" ? (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                ) : s.label === "LeetCode" ? (
                                    <svg width="18" height="18" viewBox="0 0 24 24">
                                        <path style={{ fill: "#FFA116" }} d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .449 1.156 5.766 5.766 0 0 0 .809 1.166l4.243 4.243a5.83 5.83 0 0 0 4.127 1.708 5.797 5.797 0 0 0 4.128-1.708l4.243-4.243a1.377 1.377 0 0 0 0-1.947 1.377 1.377 0 0 0-1.947 0l-4.243 4.243a3.076 3.076 0 0 1-2.181.903 3.094 3.094 0 0 1-2.181-.903l-4.243-4.243a3.11 3.11 0 0 1-.904-2.181c0-.825.321-1.602.904-2.181l3.854-4.126 5.406-5.788a1.376 1.376 0 0 0-.987-2.348zm2.883 8.358a1.376 1.376 0 1 0 0 2.752h5.758a1.376 1.376 0 1 0 0-2.752h-5.758z" />
                                    </svg>
                                ) : s.label === "WhatsApp" ? (
                                    <svg width="18" height="18" viewBox="0 0 24 24">
                                        <path style={{ fill: "#25D366" }} d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                ) : (
                                    <i className={`icon ${s.icon}`} />
                                )}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href={`mailto:${profile.email}`} aria-label="Email" title="Email">
                            <i className="icon icon-send" />
                        </a>
                    </li>
                </ul>
                <div className="user-info">
                    <p className="avaiable-dot text-body-3 text-white-72 fw-medium d-flex align-items-center gap-2 mb-2">
                        <span className="dot" />
                        <span>Available for Work & AI Roles</span>
                    </p>
                    <h5 className="greeting letter-space--2 text-white animationtext clip">
                        Hey, I’m{" "}
                        <span className="cd-words-wrapper">
                            {profile.rotatingNames.map((name, i) => (
                                <span
                                    key={name}
                                    className={`item-text ${i === 0 ? "is-visible" : "is-hidden"}`}
                                >
                                    {name}
                                </span>
                            ))}
                        </span>
                    </h5>
                    <p className="introduce text-white-56 letter-space--05 text-body-3">
                        {profile.introBio}
                    </p>
                    <div className="br-line" />
                    <div className="action-group">
                        <a href="#contact" className="tf-btn-action">
                            <span className="ic-wrap">
                                <i className="icon icon-arrow-right-top" />
                            </span>
                            <span className="text text-body-3 letter-space--05 fw-medium">
                                Let’s talk
                            </span>
                            <span className="ic-wrap">
                                <i className="icon icon-arrow-right-top" />
                            </span>
                        </a>
                        <a href="/Akshay_Mohan_Resume.pdf" download="Akshay_Mohan_CV.pdf" className="action-down">
                            <i className="icon icon-download" />
                            <span className="text-body-3">Download CV</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
