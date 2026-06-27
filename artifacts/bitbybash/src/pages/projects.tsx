import { Layout } from "../components/layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "1",
      description: "1",
      tags: ["A", "B", "C"],
      stars: 0,
      forks: 0,
    },
    {
      name: "2",
      description: "2",
      tags: ["A", "B", "C"],
      stars: 0,
      forks: 0,
    },
    {
      name: "3",
      description: "3",
      tags: ["A", "B", "C"],
      stars: 0,
      forks: 0,
    },
    {
      name: "4",
      description: "4",
      tags: ["A", "B", "C"],
      stars: 0,
      forks: 0,
    },
    {
      name: "5",
      description: "5",
      tags: ["A", "B", "C"],
      stars: 0,
      forks: 0,
    },
    {
      name: "6",
      description: "6",
      tags: ["A", "B", "C"],
      stars: 0,
      forks: 0,
    }
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-mono tracking-tighter">
            <span className="text-muted-foreground mr-4">$</span>
            ls -la ./projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Open source tools, scripts, and configurations I've built. Mostly solving my own problems, occasionally useful to others.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.name} className="rounded-none border-border bg-card hover:bg-accent/5 transition-colors flex flex-col h-full" data-testid={`card-project-${project.name}`}>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="font-mono text-lg font-bold">
                    <a href="#" className="hover:underline flex items-center gap-2 group">
                      <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      {project.name}
                    </a>
                  </CardTitle>
                </div>
                <CardDescription className="text-sm text-foreground/80 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-4 flex-grow-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="rounded-none font-mono text-xs border border-border">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
