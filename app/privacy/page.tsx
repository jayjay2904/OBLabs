import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How One Better Labs and the CueIQ app handle your information: no accounts, no tracking, and table photos that are never stored.",
};

export default function Page() {
  return (
    <LegalPage title="Privacy policy" updated="24 November 2026">
      <p>
        This policy explains what information the CueIQ app and this website handle, what happens to it, and the
        choices you have. It is written to be read. If anything is unclear, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        <strong>Who we are:</strong> One Better Labs (“we”, “us”) is a sole trader business that makes CueIQ and runs
        this website. We decide how the information described below is used.
      </p>

      <h2 id="cueiq">The CueIQ app</h2>

      <h3>The short version</h3>
      <ul>
        <li>CueIQ has no account, sign-in, name or email address to give us.</li>
        <li>
          When you analyse a table, the photo you chose is sent to our server, read, and then discarded. We do not
          save it, share it or use it to train anything.
        </li>
        <li>Your scores, opponents and drill progress stay on your phone.</li>
        <li>There are no adverts, no analytics and no tracking in the app, and we do not sell information about you.</li>
      </ul>

      <h3>What the app sends when you analyse a photo</h3>
      <p>Each time you tap “Analyse table”, the app sends one request to our server containing:</p>
      <ul>
        <li>the photo you took or picked, shrunk to at most 2048 pixels on its longest side;</li>
        <li>
          the choices you made for that analysis: which colour of balls is yours (reds or yellows), the rule set, and
          which side of the table the photo was taken from.
        </li>
      </ul>
      <p>
        It does not send your name, email address, phone number, contacts, a device or advertising identifier, or
        your location. Photos taken on a phone often carry hidden details such as where and when they were taken and
        the phone model. The app removes these before the photo is sent, and our server removes them again on
        arrival, so they are never used or kept. (Older versions of the app did not remove them before sending; the
        server has always discarded them on arrival and never stores them.) The connection is encrypted (HTTPS).
      </p>

      <h3>What happens to the photo</h3>
      <ul>
        <li>
          Our server reads the photo in its memory to find the table and balls and to work out the shot, then sends
          the result back to the app as ball positions and a route. The photo itself is not sent back.
        </li>
        <li>The photo is never written to disk, a database or file storage.</li>
        <li>
          It is not passed to any other company. The models that read the photo run on our own server.
        </li>
        <li>It is not used to train or improve any model.</li>
        <li>
          The server keeps a short-lived record of recent <em>results</em> (ball positions and routes, never the
          picture) in memory so a repeat of the same photo is quick. It is cleared whenever the server restarts.
        </li>
      </ul>
      <p>
        A table photo can occasionally include people. The photo is only used to read the table and is not kept. You
        are responsible for the photos you take and send with CueIQ, including making sure anyone in a photo is happy
        for it to be taken. Where you can, please frame the photo on the table and avoid including other people.
      </p>

      <h3>Technical logs</h3>
      <p>
        To keep the service running and fix problems, our server logs each request’s time, outcome, how long it took,
        and the size of the image. These logs do not contain the photo, the ball positions or your choices. To
        prevent abuse, the server also looks at the sender’s IP address in memory to limit how many requests one
        address can make; it does not save it.
      </p>
      <p>
        Our server is hosted by Render (render.com), which, as the hosting provider, keeps its own request logs that
        can include IP addresses. Render keeps these for a limited time (no more than 30 days). We use them only for
        security and keeping the service running.
      </p>
      <p>
        The server may be located outside the UK. Photos are only processed there, in memory, and are never stored, so
        no photos are held outside your phone.
      </p>

      <h3>What stays on your phone</h3>
      <p>
        Match Centre scores, history and the player and opponent names you type, your drill progress, and settings
        such as your chosen ball colour and table view are stored in the app’s private storage on your phone. They are
        not uploaded to us. Uninstalling the app, or clearing its storage in your phone’s settings, deletes them.
      </p>

      <h3>Permissions the app asks for</h3>
      <ul>
        <li>
          <strong>Camera</strong> and <strong>photos</strong>: only to take or choose a table photo to analyse.
        </li>
        <li>
          <strong>Internet</strong> and <strong>network state</strong>: to send the photo and receive the result.
        </li>
        <li>
          <strong>Vibration</strong>: for feedback in the app.
        </li>
      </ul>
      <p>The app does not ask for your location, contacts, microphone or calendar.</p>

      <h3>Why we handle the photo, and your rights</h3>
      <p>
        We handle the photo only because you asked CueIQ to analyse it: it is needed to give you the result. Because
        we do not keep the photo and have no account or name linked to it, we generally hold no personal information
        about you that we could look up, correct or delete. If you think we do, or you want to ask a question or
        exercise any right you have under data protection law (including access, deletion and objection), email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. If you are in the UK you can also complain to the
        Information Commissioner’s Office (ico.org.uk).
      </p>

      <h3>Children</h3>
      <p>CueIQ is not designed for children under 13 and we do not knowingly collect information from them.</p>

      <h2 id="website">This website</h2>
      <p>
        This website has no accounts, no analytics and no advertising or tracking cookies; see the{" "}
        <a href="/cookies/">cookie policy</a>. Like any website, the servers that deliver its pages (GitHub Pages)
        record technical details such as IP address and the pages requested when a page is loaded. We do not use these
        to identify you.
      </p>
      <p>
        If you email us, we use your email address and what you tell us only to reply and to keep a record of the
        conversation, and we do not share it. Ask us at any time and we will delete it.
      </p>
      <p>We will update this page before the website starts collecting anything else, such as an early-access sign-up list.</p>

      <h2>Changes to this policy</h2>
      <p>
        If CueIQ or the website changes in a way that affects your information, such as saving photos, adding
        accounts, or adding analytics, we will update this policy first and change the date at the top.
      </p>

      <h2>Contact</h2>
      <p>
        One Better Labs, <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  );
}
