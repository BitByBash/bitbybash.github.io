import { Link, useLocation } from "wouter";
import { Moon, Sun, Terminal } from "lucide-react";
import { useTheme } from "../hooks/use-theme";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "~/home" },
    { href: "/projects", label: "~/projects" },
    { href: "/links", label: "~/links" },
    { href: "/contact", label: "~/contact" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors" data-testid="link-home-logo">
            <Terminal className="h-5 w-5" />
            <span className="font-mono font-bold text-lg">BitByBash</span>
          </Link>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden sm:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-sm font-mono transition-colors hover:text-foreground ${location === link.href ? "text-foreground font-bold" : "text-muted-foreground"}`}
                  data-testid={`link-nav-${link.label.replace('~/', '')}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center border-l pl-4 sm:pl-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                title="Toggle Theme"
                data-testid="button-theme-toggle"
                className="h-9 w-9 rounded-none"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav (keeping it simple for now) */}
      <div className="sm:hidden border-b bg-muted/30 overflow-x-auto">
        <nav className="flex items-center px-4 py-3 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-xs font-mono whitespace-nowrap ${location === link.href ? "text-foreground font-bold" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
        {children}
      </main>

      <footer className="border-t py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground font-mono space-y-3">
          <p>© {new Date().getFullYear()} BitByBash. ALL RIGHTS RESERVED.</p>
          <p className="opacity-50">echo "EOF" &gt; /dev/null</p>
          <a
            href="https://github.com/bitbybash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center hover:text-foreground transition-colors"
            data-testid="link-footer-github"
            aria-label="GitHub"
          >
            <SiGithub className="w-4 h-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}
