import { Layout } from "../components/layout";
import { SiYoutube, SiInstagram, SiTiktok, SiX, SiGithub, SiKaggle, SiMedium, SiFacebook } from "react-icons/si";
import portraitSrc from "../assets/portrait.jpeg";

export default function Links() {
  const links = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@BitByBash",
      description: "Weekly videos on Linux, hosting, and open source.",
      icon: SiYoutube,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bitbybash",
      description: "Behind the scenes, gear, and quick tech snaps.",
      icon: SiInstagram,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@bitbybash",
      description: "Short-form Linux and VPS tips for the terminal crowd.",
      icon: SiTiktok,
    },
    {
      name: "X",
      url: "https://x.com/BitByBash",
      description: "Hot takes on tech and quick tips.",
      icon: SiX,
    },
    {
      name: "GitHub",
      url: "https://github.com/bitbybash",
      description: "My dotfiles, scripts, and open source projects.",
      icon: SiGithub,
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/bitbybash",
      description: "Datasets, notebooks, and data science experiments.",
      icon: SiKaggle,
    },
    {
      name: "Medium",
      url: "https://medium.com/@bitbybash",
      description: "Long-form articles on Linux, self-hosting, and the open web.",
      icon: SiMedium,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/bitbybash",
      description: "Community updates and longer-form discussion.",
      icon: SiFacebook,
    },
  ];

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-12">
        <section className="text-center space-y-4">
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 border-2 border-foreground">
            <img
              src={portraitSrc}
              alt="BitByBash portrait"
              className="w-full h-full object-cover"
              data-testid="img-logo-links"
            />
          </div>
          <h1 className="text-3xl font-mono font-bold tracking-tighter">@BitByBash</h1>
          <p className="text-muted-foreground font-mono text-sm">
            echo "connect with me across the web"
          </p>
        </section>

        <div className="space-y-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                className="group block w-full p-4 border bg-card hover:bg-foreground hover:text-background transition-all duration-200"
                data-testid={`link-social-${link.name.toLowerCase().replace(/[^a-z]/g, "")}`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-background border group-hover:bg-foreground group-hover:border-background transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-mono font-bold text-lg">{link.name}</h2>
                    <p className="text-sm text-muted-foreground group-hover:text-background/80 transition-colors">
                      {link.description}
                    </p>
                  </div>
                  <div className="font-mono text-xl opacity-0 group-hover:opacity-100 transition-opacity pr-4">
                    →
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
