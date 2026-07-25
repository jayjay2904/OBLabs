import Link from "next/link";
import Image from "next/image";

const playStoreUrl = "https://play.google.com/store/search?q=Arlo%20ADHD%20One%20Better%20Labs&c=apps";

function ArloFace({ large = false }: { large?: boolean }) {
  return <div className={`arlo-face ${large ? "arlo-face-large" : ""}`} aria-hidden="true">
    <span className="arlo-ear arlo-ear-left" />
    <span className="arlo-ear arlo-ear-right" />
    <span className="arlo-eye arlo-eye-left" />
    <span className="arlo-eye arlo-eye-right" />
    <span className="arlo-smile" />
    <span className="arlo-cheek arlo-cheek-left" />
    <span className="arlo-cheek arlo-cheek-right" />
  </div>;
}

function PhoneMockup({ compact = false }: { compact?: boolean }) {
  return <div className={`arlo-phone ${compact ? "arlo-phone-compact" : ""}`} aria-label="An example conversation with Arlo">
    <div className="phone-speaker" />
    <div className="phone-topbar"><ArloFace /><div><strong>Arlo</strong><span>Here with you</span></div><i /></div>
    <div className="phone-conversation">
      <p className="message message-user">I&apos;m feeling overwhelmed today.<br /><br />I don&apos;t even know where to begin.</p>
      <div className="arlo-reply"><ArloFace /><p className="message message-arlo">That&apos;s okay.<br /><br />You don&apos;t have to figure everything out today.<br /><br />Let&apos;s just find one small step together.<br /><br /><strong>We&apos;ll take it one step at a time.</strong></p></div>
    </div>
    <div className="phone-composer"><span>Talk to Arlo…</span><b>↑</b></div>
  </div>;
}

const features = [
  { number: "01", title: "AI Conversations", text: "Natural conversations designed to understand rather than simply respond.", kind: "conversation" },
  { number: "02", title: "Smart Reminders", text: "Arlo notices when something is worth remembering and gently offers to help.", kind: "reminder" },
  { number: "03", title: "Support When You're Stuck", text: "Feeling stuck doesn't have to stop your day. Arlo helps you choose the smallest possible next step.", kind: "support" },
  { number: "04", title: "Daily Encouragement", text: "Celebrate wins. Reflect on progress. Come back tomorrow.", kind: "welcome" },
];

function FeatureVisual({ kind }: { kind: string }) {
  if (kind === "conversation") return <div className="feature-ui feature-screenshot single-screen"><Image src="/arlo/conversation.png" alt="Arlo conversation screen offering gentle support" width={330} height={666} /></div>;
  if (kind === "reminder") return <div className="feature-ui feature-screenshot screen-triptych"><Image src="/arlo/reminder-offer.png" alt="Arlo offering to create a reminder" width={332} height={666} /><Image src="/arlo/reminder-confirmed.png" alt="Arlo reminder confirmation" width={327} height={660} /><Image src="/arlo/reminder-popup.png" alt="Set reminder screen" width={332} height={665} /></div>;
  if (kind === "support") return <div className="feature-ui feature-screenshot screen-pair"><Image src="/arlo/what-fits-now.png" alt="Arlo asking what kind of support fits now" width={329} height={709} /><Image src="/arlo/support-response.png" alt="Arlo helping after the user says they feel stuck" width={333} height={704} /></div>;
  return <div className="feature-ui feature-screenshot screen-pair"><Image src="/arlo/welcome.png" alt="Arlo welcome screen" width={333} height={707} /><Image src="/arlo/welcome-options.png" alt="Arlo daily support options" width={333} height={707} /></div>;
}

const smallWins = [
  ["✓", "One remembered appointment."],
  ["↗", "One completed task."],
  ["♡", "One encouraging conversation."],
  ["○", "One deep breath."],
  ["→", "One tiny step."],
];

export default function Home() {
  return <>
    <section className="arlo-hero">
      <div className="arlo-orb arlo-orb-one" /><div className="arlo-orb arlo-orb-two" />
      <div className="container arlo-hero-grid">
        <div className="arlo-hero-copy">
          <p className="arlo-kicker"><span /> Now available on Android</p>
          <h1>Meet Arlo<span>Your AI Companion for ADHD</span></h1>
          <p className="hero-support">Support that understands.</p>
          <p className="hero-not">Not another productivity app.<br />Just one better step, every day.</p>
          <div className="button-row">
            <a className="button arlo-primary" href={playStoreUrl} target="_blank" rel="noreferrer">Download on Google Play <span>↗</span></a>
            <Link className="button arlo-secondary" href="#why-arlo">Learn more <span>↓</span></Link>
          </div>
          <div className="hero-trust"><Image src="/arlo/app-icon.png" alt="Arlo app icon" width={48} height={48} /><p><strong>A calmer way forward</strong><span>Designed around real ADHD</span></p></div>
        </div>
        <div className="arlo-hero-art">
          <div className="meet-arlo-card"><Image src="/arlo/meet-arlo-hero.png" alt="Meet Arlo, your AI companion for ADHD" fill priority sizes="(max-width: 800px) 82vw, 560px" /></div>
          <PhoneMockup />
          <div className="calm-note">You don&apos;t have to do it all today.</div>
        </div>
      </div>
      <a className="scroll-cue" href="#why-arlo"><span>Scroll gently</span><i /></a>
    </section>

    <section id="why-arlo" className="arlo-story-section why-arlo">
      <div className="container">
        <p className="arlo-section-label">01 — Why Arlo exists</p>
        <div className="why-arlo-grid">
          <div><h2>Arlo wasn&apos;t created to make people <em>more productive.</em></h2><blockquote>It was built to help you feel able to take the next step.</blockquote></div>
          <div className="story-copy"><p>Traditional productivity tools often ask people with ADHD to think differently, work differently and organise differently.</p><p>For many people, that simply doesn&apos;t work.</p><p>Arlo takes a different approach.</p><ul><li><span>Instead of pushing harder,</span> Arlo starts by understanding.</li><li><span>Instead of adding pressure,</span> it reduces it.</li><li><span>Instead of asking you to become someone else,</span> it works alongside the way your mind already works.</li></ul><p>Whether you&apos;re feeling overwhelmed, anxious, stuck or simply trying to remember life&apos;s endless little tasks, Arlo is there to help you take one better step.</p></div>
        </div>
      </div>
    </section>

    <section className="arlo-story-section journey-section">
      <div className="container journey-grid">
        <div className="journey-sticky"><p className="arlo-section-label">02 — The journey</p><h2>It began with a simple question.</h2><blockquote>“What if remembering things didn&apos;t have to feel so hard?”</blockquote></div>
        <div className="journey-copy">
          <p className="journey-lead">Living with ADHD often means forgetting appointments, losing track of ideas, struggling to start tasks or feeling overwhelmed before the day has even begun.</p>
          <div className="journey-step"><span>01</span><div><h3>The tools were managing tasks.</h3><p>Existing tools helped manage calendars and to-do lists. Very few helped manage how people actually felt.</p></div></div>
          <div className="journey-step"><span>02</span><div><h3>So we built something different.</h3><p>Something calmer. Something kinder. Something that listens before it speaks.</p></div></div>
          <div className="journey-step"><span>03</span><div><h3>A belief became the product.</h3><p>People don&apos;t always need more information. Sometimes they simply need someone to help them take the next step.</p></div></div>
          <p className="journey-closing">That philosophy continues to shape every feature we build.</p>
        </div>
      </div>
    </section>

    <section className="arlo-features">
      <div className="container">
        <div className="arlo-title-row"><div><p className="arlo-section-label">03 — Designed around real ADHD</p><h2>Help that fits the day you&apos;re actually having.</h2></div><p>Thoughtful support, without another complicated system to manage.</p></div>
        <div className="feature-cards">{features.map(feature => <article className="arlo-feature-card" key={feature.title}><div className="feature-card-top"><span>{feature.number}</span><p>{feature.title}</p></div><FeatureVisual kind={feature.kind} /><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
      </div>
    </section>

    <section className="arlo-onboarding">
      <div className="container onboarding-grid">
        <div className="onboarding-copy"><p className="arlo-section-label">A thoughtful beginning</p><h2>Clear from the very first hello.</h2><p>Arlo starts with care: a simple welcome, honest boundaries and privacy explained in plain language. No overwhelming setup. Just enough context to make support feel personal.</p></div>
        <div className="onboarding-screens"><Image src="/arlo/setup.png" alt="Arlo first-run setup welcome" width={329} height={707} /><Image src="/arlo/setup-details.png" alt="Arlo setup explaining support and privacy" width={333} height={711} /></div>
      </div>
    </section>

    <section className="small-wins">
      <div className="container small-wins-grid">
        <div><p className="arlo-section-label">04 — Built around small wins</p><h2>Life doesn&apos;t usually change overnight.</h2><p className="small-wins-lead">It changes one small decision at a time.</p></div>
        <div className="wins-list">{smallWins.map(([icon, text]) => <div key={text}><span>{icon}</span><p>{text}</p></div>)}</div>
      </div>
      <div className="container wins-statement"><p>Those moments add up.</p><h3>That&apos;s why everything at One Better Labs is built around helping people make <em>one better decision today</em> than they did yesterday.</h3></div>
    </section>

    <section className="meet-arlo-section">
      <div className="container meet-arlo-grid">
        <div className="mascot-stage"><span className="mascot-ring mascot-ring-one" /><span className="mascot-ring mascot-ring-two" /><Image src="/arlo/arlo-mascot.png" alt="Arlo smiling" width={540} height={540} /><div className="mascot-shadow" /></div>
        <div><p className="arlo-section-label">05 — Meet Arlo</p><h2>A little support can change the shape of a day.</h2><p>Arlo isn&apos;t trying to replace friends, family or professional support.</p><p>Arlo is simply here when you need a gentle nudge. A reminder. A conversation. A moment to pause. Or someone to help you take the next step.</p><a href={playStoreUrl} target="_blank" rel="noreferrer" className="text-link-arlo">Meet Arlo on Google Play <span>↗</span></a></div>
      </div>
    </section>

    <section className="built-by-section"><div className="container built-by-card"><div><p className="arlo-section-label">06 — Built by One Better Labs</p><h2>Thoughtful AI.<br />Real human problems.</h2></div><div><p>One Better Labs exists to build beautifully simple technology that helps people make one better decision.</p><p>Arlo is our first public product. It represents the beginning of a much bigger mission.</p><p>We&apos;re building thoughtful AI that solves real problems for real people.</p><Link href="/our-story">Our story <span>→</span></Link></div></div></section>

    <section id="download" className="arlo-final-cta"><div className="container"><div className="final-cta-inner"><ArloFace /><p className="arlo-section-label">One better step</p><h2>Ready to meet Arlo?</h2><p>Download today and discover a calmer way to navigate ADHD.</p><div className="button-row"><a className="button arlo-primary" href={playStoreUrl} target="_blank" rel="noreferrer">Download on Google Play <span>↗</span></a><Link className="button arlo-secondary" href="/our-story">Learn about One Better Labs <span>→</span></Link></div></div></div></section>
  </>;
}
