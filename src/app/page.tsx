import { Logo } from "@/components/Logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Box,
  Code,
  Database,
  Lock,
  MessageSquare,
  Palette,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Logo width={150} height={150} className="mb-8" />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                NextBest
              </h1>
              <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl/none">
                A Next.js Best Practices Laboratory
              </h2>
              <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
                Welcome to NextBest, an evolving repository dedicated to
                exploring and discovering best practices in modern web
                development using Next.js and its ecosystem.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="#get-started">Get Started</Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href="https://github.com/rubenschwan/nextbest"
                  target="_blank"
                >
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Database className="h-10 w-10 mb-4 text-primary" />}
              title="Database Integration"
              description="Seamless Prisma and PostgreSQL integration for efficient data management."
              status="implemented"
            />
            <FeatureCard
              icon={<Lock className="h-10 w-10 mb-4 text-primary" />}
              title="Authentication"
              description="Robust authentication system powered by Auth.js for secure user management."
              status="todo"
            />
            <FeatureCard
              icon={<Palette className="h-10 w-10 mb-4 text-primary" />}
              title="UI Components"
              description="Beautiful, responsive components using shadcn and Tailwind CSS."
              status="implemented"
            />
            <FeatureCard
              icon={<Box className="h-10 w-10 mb-4 text-primary" />}
              title="Dev container mx-autos"
              description="Consistent development environments with container mx-autoization support."
              status="implemented"
            />
            <FeatureCard
              icon={<Code className="h-10 w-10 mb-4 text-primary" />}
              title="Typed APIs"
              description="Strongly typed APIs for improved reliability and developer experience."
              status="todo"
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 mb-4 text-primary" />}
              title="Advanced Forms"
              description="Powerful forms with built-in validation and error handling."
              status="todo"
            />
          </div>
        </div>
      </section>

      <section id="future" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Future Plans
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We&apos;re excited to announce upcoming features that will
                enhance collaboration and knowledge sharing within the NextBest
                community.
              </p>
            </div>
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Community Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Soon, you&apos;ll be able to log in and engage in discussions
                  about implementing best practices. Share your insights, vote
                  on approaches, and collaborate with fellow developers to
                  refine and improve Next.js development techniques.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="get-started"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get Started with NextBest
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Ready to elevate your Next.js development? Clone the repository
                and start exploring the best practices today!
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button asChild className="w-full">
                <Link
                  href="https://github.com/rubenschwan/nextbest"
                  target="_blank"
                >
                  Clone Repository
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: "implemented" | "todo";
}

function FeatureCard({ icon, title, description, status }: FeatureCardProps) {
  return (
    <Card
      className={`flex flex-col h-full ${
        status === "todo" ? "opacity-60" : ""
      }`}
    >
      <CardHeader>
        <CardTitle className="flex flex-col items-center">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <CardDescription className="text-center flex-grow">
          {description}
        </CardDescription>
        <div className="mt-4 flex justify-center">
          <Badge variant={status === "implemented" ? "default" : "secondary"}>
            {status === "implemented" ? "Implemented" : "Coming Soon"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
