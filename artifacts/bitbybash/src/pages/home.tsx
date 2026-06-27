import { Layout } from "../components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Play, Terminal, Server, Code } from "lucide-react";

// ─── VIDEOS ──────────────────────────────────────────────────────────────────
//  update a video:
//   url       paste the YouTube link here
//   thumbnail  paste the YouTube thumbnail URL here
//               (e.g. https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)
//   duration  update the runtime shown on the card
// ─────────────────────────────────────────────────────────────────────────────
const videos = [
  {
    url: "https://www.youtube.com/@BitByBash",           // replace with video URL
    thumbnail: "",                                        // replace with thumbnail URL
    duration: "00:00",
    title: "?????",
    description: "We are just getting started.",
  },
  {
    url: "https://www.youtube.com/@BitByBash",           // replace with video URL
    thumbnail: "",                                        // replace with thumbnail URL
    duration: "00:00",
    title: "?????",
    description: "the video...",
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono mb-4 border">
            STATUS: ONLINE_
          </div>
          <h1 className="text-4xl md:text-6xl font-mono tracking-tighter">
            <span className="text-muted-foreground mr-4">$</span>
            <span className="blink-cursor">whoami</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I'm <strong className="text-foreground font-mono">BitByBash</strong>. A beginner Linux server administrator, Open Source advocate, and tech creator. I build projects on Virtual Private Servers, make how-to videos, and create stuff with Python.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/projects" className="inline-flex h-10 items-center justify-center bg-primary text-primary-foreground px-8 font-mono text-sm font-medium hover:bg-primary/90 transition-colors border border-transparent hover:border-primary">
              ./view_projects.sh
            </Link>
            <Link href="/links" className="inline-flex h-10 items-center justify-center border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 font-mono text-sm font-medium transition-colors">
              cat links.txt
            </Link>
          </div>
        </section>

        {/* Featured Videos */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 border-b pb-4">
            <Play className="h-5 w-5" />
            <h2 className="text-2xl font-mono">A_FEW_VIDEOS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <a
                key={video.title}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                data-testid={`link-video-${video.title.toLowerCase().replace(/\s+/g, "-").slice(0, 30)}`}
              >
                <Card className="rounded-none border-border overflow-hidden bg-card hover:border-foreground/50 transition-colors h-full">
                  <div className="aspect-video bg-muted relative flex items-center justify-center border-b overflow-hidden">
                    {video.thumbnail ? (
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <Play className="h-12 w-12 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                    )}
                    <div className="absolute bottom-2 right-2 bg-background/90 px-2 py-1 text-xs font-mono border">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4 space-y-2">
                    <h3 className="font-bold line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
          
          <div className="flex justify-end">
            <Link href="/links" className="text-sm font-mono flex items-center gap-1 hover:underline text-muted-foreground hover:text-foreground">
              SUBSCRIBE ON YOUTUBE <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Skills/About Block */}
        <section className="border bg-card p-6 md:p-8 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-foreground/10" />
          <h2 className="text-xl font-mono mb-6 flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            /etc/motd
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                BitByBash exists to help people learn how to perform certain tasks, as well as helping me learn as I do. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My philosophy: No bloated tutorials. No unnecessary graphical tools when a CLI command is faster. Just raw, practical engineering.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Server className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h4 className="font-bold font-mono">INFRASTRUCTURE</h4>
                  <p className="text-muted-foreground mt-1">Docker, Kubernetes, Proxmox.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h4 className="font-bold font-mono">MAIN_LANGUAGES</h4>
                  <p className="text-muted-foreground mt-1">Bash, Python, R.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
