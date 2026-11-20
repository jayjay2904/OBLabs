import Image from "next/image";
import Link from "next/link";

// Copy here describes what the app does today. Keep it honest: no dates, prices or accuracy claims.

const strip = ["Built for league players, on International Rules", "No account to create", "Scores and progress stay on your phone", "Android first"];

const reasons = [
  ["Explains, not just instructs", "Every recommendation comes with the reasoning, so you build understanding instead of following arrows."],
  ["Thinks beyond the next shot", "Angles, cue-ball control and position connect your shots. CueIQ plans the route, not just the pot."],
  ["Practice with purpose", "Drills teach one thing at a time and get harder as you improve, replacing random knocking about."],
] as const;

type Screen = { src: string; alt: string };

const shot = (name: string, alt: string): Screen => ({ src: `/cueiq/app/${name}.jpg`, alt });

type Centre = { id: string; label: string; title: string; text: string; points: string[]; screens: Screen[]; note?: string };

const centres: Centre[] = [
  {
    id: "analysis", label: "Analysis Centre", screens: [shot("analysis-reading", "The Analysis Centre reading a table photo, with the rules and your balls chosen below"), shot("analysis-sequence", "The shot sequence: each shot with its instruction, power, where to strike the cue ball and the reasoning")],
    title: "One photo. A plan for the whole table.",
    text: "Photograph the table, choose the rules and which balls are yours, and CueIQ reads the layout and works out a route around it.",
    points: ["Finds the balls, the cushions and all six pockets from a single photo", "Recommends your first shot and explains why it is the right one", "Plans the cue-ball position for the shot after, and warns what to watch out for", "Lays out the whole route ball by ball, with a tip for each shot", "Plays the route back as an animation, checked with real physics"],
    note: "The table reading is an estimate. CueIQ shows how confident it is, and you can check the reconstruction against the real table before you rely on it.",
  },
  {
    id: "training", label: "Training Centre", screens: [shot("training-centre", "The Training Centre with its drill categories"), shot("drill-top-view", "A drill played from above, with the cue ball guide and power bar")],
    title: "Drills that teach one thing at a time.",
    text: "Thirty drills in five categories, from fundamentals to progressive practice, each teaching one thing at a time.",
    points: ["Every drill is an animated demonstration with the aim line, ghost ball and target zone", "A floating cue ball shows exactly where to strike it, and a power bar shows how hard", "Progressive drills have levels that make the same skill steadily harder", "Search and filter by type, skill or progress", "Record your progress and watch your mastery grow by category"],
  },
  {
    id: "shot-lab", label: "Shot Lab", screens: [shot("shotlab-top-view", "The Shot Lab from above, previewing where the white and the red will go"), shot("shotlab-try-a-shot", "The Shot Lab's three-step instructions over the table")],
    title: "Set it up. See what happens.",
    text: "Put any shot on the table yourself and see what the physics predicts before you take it.",
    points: ["Drag to aim, and drag the balls to wherever you like", "Choose the power, and where to hit the cue ball: follow, draw or side spin", "A live preview shows the white's path, the ghost ball and where each ball goes next", "Tap Shoot to watch it played, from above or from the player's eye", "Powered by the same physics engine as the drills"],
    note: "The Shot Lab shows what the physics engine predicts. Real tables, cloth and cues vary, so use it to understand a shot, not as a promise.",
  },
  {
    id: "match", label: "Match Centre", screens: [shot("match-scoreboard", "The Match Centre scoreboard with a player card for each side"), shot("match-options", "The Match Centre options: coin toss, match statistics and history")],
    title: "Scoring that keeps up with your game.",
    text: "A proper scoreboard for the match you are actually playing, with the history to look back on afterwards.",
    points: ["Race to 3, 5, 7, 10 or your own target, best of 5, 7 or 11, or just play casually", "Save your opponents and see your record against each of them", "Tap a player to award the frame, and undo if you slip", "Keep a tally of 8 balls cleared in a visit, and see it in your stats", "A shot clock with 30, 45 or 60 second timers and extensions", "A coin toss to settle who breaks", "Match statistics: matches played, win rate and frames won and lost", "Every completed match saved to a history, and an unfinished match you can resume"],
  },
];

const steps = [
  ["Photograph the table", "Stand high, keep all six pockets in shot, and take one clear photo."],
  ["Get the plan", "See the recommended shot, the reasoning behind it and the route around the table."],
  ["Practise and play", "Take the skills to the drills and the Shot Lab, then keep score when it counts."],
] as const;

type Guide = { title: string; intro?: string; steps: [string, string][] };

const guides: Guide[] = [
  { title: "Analyse a table", steps: [["Take a photo", "Stand as high above the table as you can and capture the whole table, all six pockets included."], ["Analyse the table", "Tap Analyse table. CueIQ detects every ball and reports how confident it is in the scene."], ["Check the digital twin", "The reconstruction is an estimate. Compare ball and cushion positions with the real table before using route guidance."], ["Your first shot", "See the recommended shot, why it is the right one, a cue-ball plan for position, and what to watch out for."], ["Shot sequence", "Browse the full suggested route ball by ball. Tap any shot for its own instruction, reasoning and cue-ball tip."]] },
  { title: "Take a good photo", intro: "A few seconds of care here makes a real difference.", steps: [["Get high", "Stand as high above the table as you can, straight down over the balls."], ["Show the whole table", "Keep every rail in shot, including all six pockets if possible."], ["Mind the light", "Even, bright light works best. Avoid shadows falling across the balls and heavy glare."], ["Retake if in doubt", "A steep side angle, a cropped table or a blurry shot make the table harder to read."]] },
  { title: "Practise a drill", steps: [["Pick a drill", "Browse the categories, or search and filter by type, skill or progress."], ["Watch it played", "Press Play to see the shot, with the aim line, ghost ball and target zone. Flip the table to see it from the other side."], ["Read the floating cue ball", "Its position shows where the cue ball is struck, and the bars below show how hard, from soft to full power."], ["Choose a level", "On drills with levels, tap a level to make the drill easier or harder."], ["Record your progress", "Mark a drill or level complete and watch your mastery build by category."]] },
  { title: "Use the Shot Lab", steps: [["Aim", "Drag on the table and the cue ball aims. A dotted line shows where the white goes, the ghost ball shows where it meets the red, and the lines beyond show where each ball travels next."], ["Move the balls", "Drag the white or the red anywhere you like. They rest against the cushions and cannot overlap."], ["Set the power", "Slide from Soft to Power. The preview updates as you go."], ["Choose the spin", "Drag the dot on the white ball. Above centre is follow, below is draw, left or right is side spin."], ["Shoot", "Tap Shoot to play the shot. Replay plays it again, and touching the table afterwards sets up another."], ["Change your view", "Tap Player's view to see the table from behind the white. Drag left or right to turn your aim, and tap Top view to go back."]] },
  { title: "Keep score in the Match Centre", steps: [["Start a match", "Enter your name, add an opponent and pick a format: best of frames or your own target."], ["Score a frame", "Tap a player's card to award them the frame. Tap Undo if you make a mistake."], ["Shot clock", "Open the clock during a match, tap it to start, and set a default duration in its settings."], ["Coin toss", "Settle who breaks with a tap."], ["Match statistics", "See your overall record: matches played, win rate and frames won."], ["History", "Every completed match is saved. Tap an opponent to see your record against them."], ["Finish up", "A match completes when the target is reached. Playing casually? Tap End Match to stop early."]] },
  { title: "Understand spin", intro: "Where you strike the cue ball decides how it spins.", steps: [["Follow", "Above centre: the cue ball rolls forward. Add left or right to curve it."], ["Stun", "Dead centre: no spin at all."], ["Draw", "Below centre: the cue ball draws back. Add left or right to curve it."], ["Side spin", "Left or right of centre spins the ball in that direction."], ["Avoid the miscue", "Keep contact within the middle two thirds of the cue ball."]] },
  { title: "Build your stance", intro: "A consistent stance means a consistent stroke.", steps: [["Feet", "Back foot a comfortable stride behind the front foot, weight balanced between both."], ["Body", "Lean forward from the hips, front knee softly bent, back leg braced."], ["Cue arm", "Upper arm hangs close to the body, forearm meets it at roughly a right angle at address."], ["Eyes", "Chin down, eyes directly over the cue line for a true, repeatable aim."]] },
];

const faqs = [
  ["When can I get it?", "CueIQ is heading to Android first. Follow the journey or get in touch and we will let you know when it is ready."],
  ["Do I need an account?", "No. CueIQ does not ask you to create one."],
  ["Which rules does it use?", "CueIQ currently uses International Rules, with reds, yellows and the black. In the Analysis Centre you choose the rules and which of the balls are yours."],
  ["Does it work without a photo?", "Yes. The Training Centre, the Shot Lab and the Match Centre do not need a photo at all, and they run on your phone. Only the Analysis Centre needs an internet connection, to read your photo."],
  ["How accurate is the table reading?", "No reading of a photo is perfect. CueIQ shows how confident it is, and you can check the reconstruction against the real table before you rely on the route."],
  ["What happens to my table photo?", "It is sent securely to CueIQ's analysis service, read, and turned into a result. CueIQ does not keep the photo. Match scores and drill progress stay on your phone."],
  ["Does the Shot Lab guarantee the result?", "No. It shows what the physics engine predicts. Real tables, cloth and cues vary, so it is there to help you understand a shot."],
] as const;

function Phone({ src, alt, priority }: Screen & { priority?: boolean }) {
  return <div className="cqPhone"><div className="cqPhoneScreen"><Image src={src} alt={alt} width={540} height={1054} priority={priority} sizes="(max-width:900px) 45vw, 230px" /></div></div>;
}

// Two phones side by side, the second dropped a little, so a row of screens reads as a pair rather than a copy.
function Duo({ screens, priority }: { screens: Screen[]; priority?: boolean }) {
  return <div className="cqDuo">{screens.map(screen => <Phone key={screen.src} {...screen} priority={priority} />)}</div>;
}

export function CueIqProductPage() {
  return <div className="cq">
    <section className="cqHero"><div className="container cqHeroGrid">
      <div className="cqHeroCopy">
        <p className="cqLabel">Coming soon to Android</p>
        <h1>Meet CueIQ<span>Your AI-powered pool coach</span></h1>
        <p className="cqSupport">See the table differently.</p>
        <p>Photograph a table and see the shot. Practise it with drills built on real physics. Try any shot yourself. Keep score when it counts.</p>
        <div className="button-row"><Link className="button cqButton" href="/contact">Follow the journey <span>↗</span></Link><a className="button cqGhost" href="#inside">See what&apos;s inside <span>↓</span></a></div>
      </div>
      <div className="cqHeroVisual"><Duo priority screens={[shot("home", "The CueIQ home screen: Analysis, Training, Shot Lab and Match Centre"), shot("route-players-view", "A route around the table in the player's eye view, with the shot previewed")]} /></div>
    </div></section>

    <section className="cqStrip"><div className="container">{strip.map(item => <span key={item}>{item}</span>)}</div></section>

    <section id="why" className="cqSection"><div className="container cqSplit">
      <div><p className="cqLabel">Why CueIQ exists</p><h2>Knocking balls around is fun. It isn&apos;t always how you get better.</h2></div>
      <div className="cqBody"><p>Most tools focus on one shot at a time. Real improvement comes from the angles, the cue-ball control and the position that connect your shots.</p><p>CueIQ is built to show you why a shot works, not just whether it went in, and to turn every session into a chance to get a little better.</p></div>
    </div>
    <div className="container cqReasons">{reasons.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section id="inside" className="cqSection cqInside"><div className="container">
      <div className="cqHeading"><p className="cqLabel">Inside CueIQ</p><h2>Four ways to play smarter.</h2></div>
      {centres.map((centre, index) => <article className={`cqCentre${index % 2 ? " cqFlip" : ""}`} id={centre.id} key={centre.id}>
        <div className="cqCentreCopy">
          <p className="cqLabel">{centre.label}</p><h3>{centre.title}</h3><p className="cqLead">{centre.text}</p>
          <ul>{centre.points.map(point => <li key={point}>{point}</li>)}</ul>
          {centre.note ? <p className="cqNote">{centre.note}</p> : null}
        </div>
        <div className="cqCentreVisual"><Duo screens={centre.screens} /></div>
      </article>)}
    </div></section>

    <section className="cqSection cqEye"><div className="container"><div className="cqSplit">
      <div><p className="cqLabel">The player&apos;s eye</p><h2>Stand where the player stands.</h2></div>
      <div className="cqBody"><p>Every drill, route and Shot Lab shot can be switched from the view from above to the view from behind the cue ball, looking down the line of the shot, the way you see it when you are bent over the table.</p><p>It is a quick way to learn what a shot actually looks like at the table, and to see where the cue ball is going before you take it.</p></div>
    </div><div className="cqEyeShots"><Duo screens={[shot("drill-players-view", "A drill from the player’s eye, behind the cue ball"), shot("shotlab-players-view", "The Shot Lab from the player’s eye, with the shot previewed")]} /></div></div></section>

    <section className="cqSection cqSteps"><div className="container">
      <div className="cqHeading"><p className="cqLabel">How it works</p><h2>From photo to better shot in three steps.</h2></div>
      <div className="cqStepGrid">{steps.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section id="how-to" className="cqSection"><div className="container">
      <div className="cqHowHead"><div className="cqHeading"><p className="cqLabel">How to use CueIQ</p><h2>Everything you need to get started.</h2><p className="cqLead">Guides like these are built into the app too, so help is always one tap away.</p></div><Phone {...shot("how-to-use", "The How to use CueIQ list inside the app")} /></div>
      <div className="cqGuides">{guides.map(guide => <details className="cqGuide" key={guide.title}>
        <summary>{guide.title}<span aria-hidden="true">+</span></summary>
        {guide.intro ? <p className="cqGuideIntro">{guide.intro}</p> : null}
        <ol>{guide.steps.map(([title, text]) => <li key={title}><strong>{title}</strong><span>{text}</span></li>)}</ol>
      </details>)}</div>
    </div></section>

    <section className="cqSection cqHonest"><div className="container cqSplit">
      <div><p className="cqLabel">Honest by design</p><h2>It tells you what it knows, and how sure it is.</h2></div>
      <div className="cqBody"><p>Coaching you cannot trust is worse than no coaching. CueIQ reports how confident it is in a table reading, labels its reconstruction as an estimate, and describes the Shot Lab as a prediction, not a promise.</p><p>There is no account to create. A table photo is sent securely to be read and is not kept, and your match scores and drill progress stay on your phone.</p></div>
    </div></section>

    <section className="cqSection"><div className="container">
      <div className="cqHeading"><p className="cqLabel">Questions</p><h2>Good questions.</h2></div>
      <div className="cqFaq">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </div></section>

    <section className="cqCta"><div className="container"><Image src="/cueiq/logo.png" alt="CueIQ, AI powered pool coach" width={340} height={117} className="cqCtaLogo" />
      <h2>See the table differently.</h2><p>CueIQ is coming to Android. Follow the journey, or get in touch to hear when it is ready.</p>
      <div className="button-row"><Link className="button cqButton" href="/contact">Follow the journey <span>↗</span></Link><Link className="button cqGhost" href="/our-story">Meet One Better Labs <span>→</span></Link></div>
    </div></section>
  </div>;
}
