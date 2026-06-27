import { Layout } from "../components/layout";
import { Mail } from "lucide-react";
import portraitSrc from "../assets/portrait.jpeg";

const emails = [
  { address: "root@bitbybash.com", label: "primary" },
  { address: "bitbybash@protonmail.com", label: "protonmail" },
  { address: "bitbybash@gmail.com", label: "gmail" },
  { address: "bitbybash@outlook.com", label: "outlook" },
];

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-mono tracking-tighter">
            <span className="text-muted-foreground mr-4">$</span>
            ping bitbybash
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a question, or just want to talk? Send a packet.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Portrait card */}
          <div className="border border-border font-mono">
            {/* Terminal title bar */}
            <div className="bg-muted/30 border-b border-border px-4 py-2 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-foreground/20 block" />
                <span className="w-3 h-3 rounded-full bg-foreground/20 block" />
                <span className="w-3 h-3 rounded-full bg-foreground/20 block" />
              </div>
              <span className="text-xs text-muted-foreground tracking-widest ml-1">
                whoami --verbose <span className="text-foreground font-bold">Mr_BitByBash</span>
              </span>
            </div>

            {/* Portrait */}
            <img
              src={portraitSrc}
              alt="Mr BitByBash"
              className="w-full object-cover object-top"
              style={{ aspectRatio: "3/4" }}
              data-testid="portrait-image"
            />

            {/* Footer bar */}
            <div className="bg-muted/10 border-t border-border px-4 py-2 text-xs text-muted-foreground tracking-wider">
              <span className="text-foreground">root@bitbybash</span>:~$ uid=1000(mr_bitbybash)
            </div>
          </div>

          {/* Email contact section */}
          <div className="space-y-6">
            <div className="border border-border font-mono">
              <div className="bg-muted/30 border-b border-border px-4 py-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground tracking-widest">
                  cat /etc/contact/addresses.conf
                </span>
              </div>
              <div className="divide-y divide-border">
                {emails.map(({ address, label }) => (
                  <a
                    key={address}
                    href={`mailto:${address}`}
                    className="flex items-center justify-between px-4 py-4 group hover:bg-muted/20 transition-colors"
                    data-testid={`link-email-${label}`}
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs text-muted-foreground tracking-widest uppercase">
                        {label}
                      </div>
                      <div className="text-sm text-foreground group-hover:underline underline-offset-4 decoration-muted-foreground break-all">
                        {address}
                      </div>
                    </div>
                    <span className="text-muted-foreground text-xs ml-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      &gt;_
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="border border-border font-mono text-xs text-muted-foreground px-4 py-4 space-y-1 leading-relaxed bg-muted/5">
              <p>
                <span className="text-foreground">$</span> # Invitations, collabs, and general
              </p>
              <p>
                <span className="text-foreground">$</span> # Linux and Python chatter welcome.
              </p>
              <p>
                <span className="text-foreground">$</span> # Response times vary — I run on caffeine
              </p>
              <p>
                <span className="text-foreground">$</span> # and kernel patches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
