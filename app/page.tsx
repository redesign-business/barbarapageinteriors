const ctaHref = "mailto:info@barbarapageinteriors.com?subject=Interior%20Design%20Inquiry";

const projects = [
  {
    name: "Coastal Florida",
    place: "Florida",
    image: "/images/img_1748-ba8f8d90be.jpg",
  },
  {
    name: "Chicago Equestrian",
    place: "Chicago",
    image: "/images/chicagoequestrian3-1eb4c51397.jpg",
  },
  {
    name: "Tahoe Kokanee",
    place: "Lake Tahoe",
    image: "/images/tahoekakonee-ee0f1e8a41.jpg",
  },
  {
    name: "Modern Tahoe",
    place: "Lake Tahoe",
    image: "/images/moderntahoe-b6bdc0d653.jpg",
  },
];

const faqs = [
  {
    question: "What kinds of projects do you take on?",
    answer:
      "We design residences and vacation homes, including new construction, renovations and additions.",
  },
  {
    question: "Do you work outside Lake Tahoe?",
    answer:
      "Yes. Our work spans the West Coast, Chicago, Florida and Mexico, with a process designed for close collaboration across distance.",
  },
  {
    question: "How does the design process begin?",
    answer:
      "With you. We start by understanding your region, budget, style, needs and daily life, without arriving with preconceived design elements.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Barbara Page Interiors home">
          <img
            src="/images/bpi_logo_final_horizontal-fd6a3dd47a.png"
            alt="Barbara Page Interiors"
          />
        </a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#studio">Studio</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="button buttonDark navCta" href={ctaHref}>
          Start a Conversation <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <header className="hero" id="top">
        <img
          className="heroImage"
          src="/images/img_7236-0d11d2e2b5.jpg"
          alt="Warm, refined residential interior by Barbara Page Interiors"
        />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow light">Architecture · Interiors · Design</p>
          <h1>Homes with a<br />sense of place.</h1>
          <p className="heroIntro">
            Timeless interiors shaped around how you live, and grounded in the
            natural character of their surroundings.
          </p>
          <a className="button buttonLight" href={ctaHref}>
            Start a Conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="heroSide">South Lake Tahoe · California</p>
      </header>

      <section className="proofBar" aria-label="Selected credentials">
        <div>
          <span>01</span>
          <p>Published in <em>Architectural Digest</em> and recognized on HGTV&apos;s Homes Across America</p>
        </div>
        <div>
          <span>02</span>
          <p>Design team for the Presidential Inaugural Award Committee and Academy Awards Production Department</p>
        </div>
        <div>
          <span>03</span>
          <p>Residential projects across the West Coast, Chicago, Florida and Mexico since 1999</p>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Selected residences · 01</p>
            <h2>Distinct places.<br /><i>Enduring</i> rooms.</h2>
          </div>
          <p className="sectionCopy">
            From mountain retreats to coastal homes, every project begins with
            its own landscape, architecture and way of living.
          </p>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className={`project project${index + 1}`} key={project.name}>
              <div className="projectImage">
                <img src={project.image} alt={`${project.name} interior`} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="projectMeta">
                <h3>{project.name}</h3>
                <p>{project.place}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="studio section" id="studio">
        <div className="studioImage">
          <img
            src="/images/barbara-0ad3acbe0b.jpg"
            alt="Barbara Page, founder of Barbara Page Interiors"
          />
          <div className="since">Est.<br /><strong>1999</strong></div>
        </div>
        <div className="studioContent">
          <p className="eyebrow">The studio · 02</p>
          <h2>Local instinct.<br /><i>Wide perspective.</i></h2>
          <p className="lead">
            A lifelong South Lake Tahoe resident, Barbara brings an intuitive
            understanding of the region&apos;s natural beauty to every project.
          </p>
          <p>
            Her sophisticated eye and talent for timeless design shape spaces
            that feel exceptional, pure and personal, whether contemporary or
            classic. The studio has worked nationally and internationally since
            opening in 1999.
          </p>
          <a className="textLink" href={ctaHref}>
            Start a Conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="processIntro">
          <p className="eyebrow light">Our approach · 03</p>
          <h2>Designed around<br /><i>your life.</i></h2>
          <p>
            No formula. No preconceived look. Just thoughtful design built from
            a clear understanding of your needs, your setting and your point of view.
          </p>
          <a className="button buttonLight" href={ctaHref}>
            Start a Conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="processImage">
          <img
            src="/images/profileandapproach-1-74187254bf.jpg"
            alt="Material and design details from the Barbara Page Interiors studio"
          />
        </div>
        <ol className="steps">
          <li><span>01</span><div><h3>Listen</h3><p>We begin with region, budget, style and the rhythms of your daily life.</p></div></li>
          <li><span>02</span><div><h3>Shape</h3><p>Architecture, furnishings and details are developed into one clear vision.</p></div></li>
          <li><span>03</span><div><h3>Refine</h3><p>Close communication and attentive service carry the vision through completion.</p></div></li>
        </ol>
      </section>

      <section className="recognition section">
        <div className="recognitionImage">
          <img
            src="/images/orb001-1500x1000-a0cb254bb9.jpg"
            alt="Modern residential interior in Chicago"
          />
        </div>
        <div className="recognitionContent">
          <p className="eyebrow">Recognition · 04</p>
          <blockquote>
            “A fresh approach that inspires and rejuvenates the essence of living well.”
          </blockquote>
          <div className="creditList">
            <p><span>Press</span> Architectural Digest Magazine</p>
            <p><span>Television</span> HGTV Homes Across America</p>
            <p><span>Design Team</span> Presidential Inaugural Award Committee</p>
            <p><span>Production</span> Academy Awards</p>
          </div>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="faqContent">
          <p className="eyebrow">Before we begin · 05</p>
          <h2>A few things<br /><i>to know.</i></h2>
          <div className="questions">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>{faq.question}</span><b aria-hidden="true">+</b></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="faqImage">
          <img
            src="/images/68cd1c5ef1ecd06a2ceba1cefd0c8ba2-4c9a9122a6.jpg"
            alt="Layered, elegant interior in Punta Mita, Mexico"
          />
          <p>Thoughtful design, wherever home may be.</p>
        </div>
      </section>

      <section className="finalCta">
        <img
          src="/images/kelly_43-w-1024x768-34482cfedd.jpg"
          alt="Sculptural lighting completing a refined interior"
        />
        <div className="finalShade" />
        <div className="finalContent">
          <p className="eyebrow light">Your home, considered</p>
          <h2>Let&apos;s create something<br /><i>lasting.</i></h2>
          <a className="button buttonLight" href={ctaHref}>
            Start a Conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="footerName">Barbara Page<br /><span>Interiors</span></div>
        <div><p className="footerLabel">Visit</p><p>2175 Lake Tahoe Blvd, Suite B<br />South Lake Tahoe, CA 96150</p></div>
        <div><p className="footerLabel">Contact</p><p>(530) 544-6755<br />info@barbarapageinteriors.com</p></div>
        <div className="footerEnd"><p>Architecture · Interiors · Design</p><p>© {new Date().getFullYear()} Barbara Page Interiors</p></div>
      </footer>

      <style>{`
        :root { --ink: #1d211e; --cream: #f2eee6; --paper: #faf8f3; --sage: #747d6c; --line: rgba(29,33,30,.18); }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--paper); color: var(--ink); font-family: Arial, Helvetica, sans-serif; }
        a { color: inherit; text-decoration: none; }
        img { display: block; width: 100%; }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, blockquote, .footerName { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; }
        h2 { margin: 0; font-size: clamp(3rem, 5.2vw, 6.6rem); line-height: .91; letter-spacing: -.055em; }
        h2 i { font-weight: 400; }
        .nav { height: 92px; padding: 0 3.2vw; display: flex; align-items: center; justify-content: space-between; background: var(--paper); border-bottom: 1px solid var(--line); }
        .brand img { width: 190px; height: auto; }
        .navLinks { display: flex; gap: 34px; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; }
        .navLinks a { padding: 12px 0; }
        .button { display: inline-flex; align-items: center; justify-content: space-between; gap: 38px; min-width: 220px; padding: 16px 18px; border: 1px solid; font-size: 11px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; transition: .25s ease; }
        .buttonDark { background: var(--ink); color: white; border-color: var(--ink); }
        .buttonLight { background: #f7f4ed; color: var(--ink); border-color: #f7f4ed; }
        .button:hover { gap: 48px; }
        .hero { position: relative; height: calc(100svh - 92px); min-height: 640px; color: white; overflow: hidden; }
        .heroImage { position: absolute; inset: 0; height: 100%; object-fit: cover; object-position: center 52%; }
        .heroShade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(10,15,12,.63) 0%, rgba(10,15,12,.2) 55%, rgba(10,15,12,.12)), linear-gradient(0deg, rgba(8,12,9,.28), transparent 50%); }
        .heroContent { position: absolute; left: 7vw; bottom: 10%; max-width: 760px; }
        .eyebrow { margin-bottom: 30px; color: #687165; font-size: 10px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase; }
        .eyebrow.light { color: rgba(255,255,255,.72); }
        .hero h1 { margin: 0 0 24px; font-size: clamp(4rem, 8vw, 8.7rem); line-height: .82; letter-spacing: -.065em; }
        .heroIntro { max-width: 480px; margin-bottom: 32px; font-family: Georgia, serif; font-size: 18px; line-height: 1.55; }
        .heroSide { position: absolute; right: 3vw; bottom: 8%; margin: 0; writing-mode: vertical-rl; font-size: 9px; letter-spacing: .25em; text-transform: uppercase; }
        .proofBar { display: grid; grid-template-columns: repeat(3, 1fr); background: var(--ink); color: white; }
        .proofBar > div { min-height: 164px; padding: 34px 3.2vw; display: grid; grid-template-columns: 35px 1fr; border-right: 1px solid rgba(255,255,255,.16); }
        .proofBar span { color: #9da695; font-size: 10px; }
        .proofBar p { margin: 0; max-width: 350px; font-family: Georgia, serif; font-size: 15px; line-height: 1.55; }
        .section { padding: 130px 6vw; }
        .sectionHeading { display: flex; align-items: end; justify-content: space-between; margin-bottom: 90px; }
        .sectionCopy { max-width: 380px; margin: 0 4vw 5px 40px; color: #555b56; font-family: Georgia, serif; font-size: 17px; line-height: 1.65; }
        .projectGrid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 9vw 3vw; align-items: start; }
        .project2 { margin-top: 150px; }
        .project3 { width: 78%; margin-left: auto; }
        .projectImage { position: relative; overflow: hidden; background: #ddd8ce; }
        .projectImage img { height: 610px; object-fit: cover; transition: transform .8s ease; }
        .project2 .projectImage img, .project3 .projectImage img { height: 430px; }
        .project:hover img { transform: scale(1.025); }
        .projectImage span { position: absolute; top: 18px; left: 18px; width: 34px; height: 34px; display: grid; place-items: center; background: rgba(250,248,243,.92); font-size: 9px; }
        .projectMeta { display: flex; align-items: baseline; justify-content: space-between; padding-top: 18px; border-top: 1px solid var(--ink); }
        .projectMeta h3 { margin: 0; font-family: Georgia, serif; font-size: 25px; font-weight: 400; }
        .projectMeta p { margin: 0; color: #697068; font-size: 9px; letter-spacing: .16em; text-transform: uppercase; }
        .studio { display: grid; grid-template-columns: 1.06fr .94fr; padding: 0; background: #e7e2d8; }
        .studioImage { position: relative; min-height: 770px; }
        .studioImage img { height: 100%; object-fit: cover; }
        .since { position: absolute; right: -50px; top: 50%; width: 100px; height: 100px; display: grid; place-content: center; background: var(--ink); color: white; text-align: center; font-size: 9px; line-height: 1.5; letter-spacing: .12em; text-transform: uppercase; }
        .since strong { font-family: Georgia, serif; font-size: 19px; font-weight: 400; letter-spacing: 0; }
        .studioContent { padding: 120px 9vw; display: flex; flex-direction: column; justify-content: center; }
        .studioContent h2 { font-size: clamp(3rem, 4.7vw, 5.8rem); margin-bottom: 45px; }
        .studioContent > p:not(.eyebrow) { max-width: 550px; color: #4f554f; line-height: 1.75; }
        .studioContent .lead { color: var(--ink) !important; font-family: Georgia, serif; font-size: 19px; }
        .textLink { width: fit-content; margin-top: 30px; padding-bottom: 8px; border-bottom: 1px solid; font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
        .textLink span { margin-left: 35px; }
        .process { display: grid; grid-template-columns: .85fr 1.15fr; padding: 0; background: var(--ink); color: white; }
        .processIntro { padding: 120px 7vw; align-self: center; }
        .processIntro h2 { margin-bottom: 35px; font-size: clamp(3.2rem, 5vw, 6rem); }
        .processIntro > p:not(.eyebrow) { max-width: 470px; color: rgba(255,255,255,.66); font-family: Georgia, serif; font-size: 17px; line-height: 1.7; }
        .processIntro .button { margin-top: 25px; }
        .processImage img { height: 650px; object-fit: cover; }
        .steps { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(3, 1fr); margin: 0; padding: 0; list-style: none; border-top: 1px solid rgba(255,255,255,.17); }
        .steps li { display: grid; grid-template-columns: 40px 1fr; min-height: 230px; padding: 45px 4vw; border-right: 1px solid rgba(255,255,255,.17); }
        .steps li > span { color: #92998f; font-size: 9px; }
        .steps h3 { margin-bottom: 20px; font-family: Georgia, serif; font-size: 26px; font-weight: 400; }
        .steps p { margin: 0; color: rgba(255,255,255,.58); font-size: 13px; line-height: 1.7; }
        .recognition { display: grid; grid-template-columns: 1fr 1fr; gap: 8vw; align-items: center; background: var(--cream); }
        .recognitionImage { padding-left: 5vw; }
        .recognitionImage img { height: 660px; object-fit: cover; }
        .recognitionContent { max-width: 590px; }
        blockquote { margin: 0 0 70px; font-size: clamp(2.5rem, 4vw, 5.1rem); line-height: 1.02; letter-spacing: -.045em; }
        .creditList { border-top: 1px solid var(--ink); }
        .creditList p { display: grid; grid-template-columns: 110px 1fr; margin: 0; padding: 17px 0; border-bottom: 1px solid var(--line); font-family: Georgia, serif; font-size: 15px; }
        .creditList span { color: #70776f; font-family: Arial, sans-serif; font-size: 9px; letter-spacing: .13em; text-transform: uppercase; }
        .faq { display: grid; grid-template-columns: 1.15fr .85fr; gap: 9vw; align-items: center; }
        .faqContent h2 { margin-bottom: 65px; }
        .questions { border-top: 1px solid var(--ink); }
        details { border-bottom: 1px solid var(--line); }
        summary { display: flex; justify-content: space-between; gap: 20px; padding: 24px 0; cursor: pointer; list-style: none; font-family: Georgia, serif; font-size: 18px; }
        summary::-webkit-details-marker { display: none; }
        summary b { font-family: Arial, sans-serif; font-size: 18px; font-weight: 400; transition: transform .2s; }
        details[open] summary b { transform: rotate(45deg); }
        details > p { max-width: 580px; margin: -5px 45px 25px 0; color: #5d645d; font-size: 14px; line-height: 1.65; }
        .faqImage img { height: 650px; object-fit: cover; }
        .faqImage > p { margin: 13px 0 0; color: #666d66; font-family: Georgia, serif; font-size: 13px; font-style: italic; }
        .finalCta { position: relative; height: 720px; display: grid; place-items: center; color: white; text-align: center; overflow: hidden; }
        .finalCta > img { position: absolute; inset: 0; height: 100%; object-fit: cover; }
        .finalShade { position: absolute; inset: 0; background: rgba(13,18,14,.55); }
        .finalContent { position: relative; }
        .finalContent h2 { margin-bottom: 45px; font-size: clamp(3.8rem, 6.5vw, 7.6rem); }
        .finalContent .button { margin: auto; }
        footer { display: grid; grid-template-columns: 1.3fr .8fr .8fr 1fr; gap: 35px; padding: 75px 5vw 45px; background: #171b18; color: rgba(255,255,255,.72); font-size: 11px; line-height: 1.7; }
        .footerName { color: white; font-size: 29px; line-height: .9; text-transform: uppercase; }
        .footerName span { font-size: 15px; letter-spacing: .32em; }
        .footerLabel { margin-bottom: 13px; color: #858e82; font-size: 8px; letter-spacing: .2em; text-transform: uppercase; }
        .footerEnd { text-align: right; }
        .footerEnd p:last-child { margin-top: 35px; color: #727a70; font-size: 8px; text-transform: uppercase; }

        @media (max-width: 900px) {
          .nav { height: 74px; padding: 0 20px; }
          .brand img { width: 155px; }
          .navLinks, .navCta { display: none; }
          .hero { height: calc(100svh - 74px); min-height: 590px; }
          .heroContent { left: 25px; right: 25px; bottom: 9%; }
          .hero h1 { font-size: clamp(3.8rem, 17vw, 6.4rem); }
          .heroIntro { font-size: 16px; }
          .heroSide { display: none; }
          .proofBar { grid-template-columns: 1fr; }
          .proofBar > div { min-height: 0; padding: 25px; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.16); }
          .section { padding: 85px 24px; }
          .sectionHeading { display: block; margin-bottom: 55px; }
          .sectionCopy { margin: 35px 0 0; }
          .projectGrid { grid-template-columns: 1fr; gap: 55px; }
          .project2, .project3 { width: 100%; margin: 0; }
          .projectImage img, .project2 .projectImage img, .project3 .projectImage img { height: 65vw; min-height: 310px; }
          .studio { grid-template-columns: 1fr; }
          .studioImage { min-height: 560px; }
          .since { right: 20px; top: auto; bottom: -40px; }
          .studioContent { padding: 100px 25px 85px; }
          .process { grid-template-columns: 1fr; }
          .processIntro { padding: 85px 25px; }
          .processImage img { height: 480px; }
          .steps { grid-template-columns: 1fr; }
          .steps li { min-height: 0; padding: 35px 25px; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.17); }
          .recognition { grid-template-columns: 1fr; gap: 60px; }
          .recognitionImage { padding: 0; }
          .recognitionImage img { height: 110vw; max-height: 650px; }
          blockquote { margin-bottom: 50px; }
          .faq { grid-template-columns: 1fr; gap: 60px; }
          .faqImage img { height: 110vw; max-height: 650px; }
          .finalCta { height: 620px; padding: 25px; }
          footer { grid-template-columns: 1fr 1fr; padding: 60px 25px 35px; }
          .footerName, .footerEnd { grid-column: 1 / -1; }
          .footerEnd { margin-top: 25px; text-align: left; }
        }
      `}</style>
    </main>
  );
}
