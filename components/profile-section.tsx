import { Award, BookOpenText, GraduationCap, Languages as LanguagesIcon } from "lucide-react";

import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AnimatedLink } from "@/components/ui/skiper-ui/skiper40";
import {
  credentials,
  education,
  languages,
  research,
  strengths,
} from "@/lib/portfolio-data";

export function ProfileSection() {
  const paper = research[0];

  return (
    <section id="profile" className="section-shell border-b bg-card/35">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Profile"
          title="Education, inquiry, and continuous practice."
          description="Formal study is complemented by research, focused credentials, and a working style grounded in collaboration."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-5">
            <MotionReveal>
              <Card className="classic-corners paper-surface gap-0 rounded-lg border py-0 ring-0">
                <CardHeader className="flex flex-row items-center gap-3 border-b px-5 py-5 sm:px-6">
                  <span className="flex size-10 items-center justify-center rounded-md border bg-background text-brand">
                    <GraduationCap className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="section-kicker">Education</p>
                    <h3 className="mt-1 font-display text-xl font-bold">Academic foundation</h3>
                  </div>
                </CardHeader>
                <CardContent className="px-5 py-2 sm:px-6">
                  {education.map((item, index) => (
                    <div key={item.degree}>
                      <article className="grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:gap-6">
                        <div>
                          <h4 className="font-display text-lg font-bold text-foreground">{item.degree}</h4>
                          <p className="mt-1 leading-6 text-muted-foreground">{item.institution}</p>
                        </div>
                        <div className="sm:text-right">
                          <p className="font-mono text-[0.67rem] font-semibold tracking-[0.06em] text-brand uppercase">
                            {item.period}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-foreground">{item.result}</p>
                        </div>
                      </article>
                      {index < education.length - 1 ? <Separator /> : null}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </MotionReveal>

            <MotionReveal delay={0.08}>
              <Card className="paper-surface gap-0 rounded-lg border py-0 ring-0">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-background text-brand">
                      <BookOpenText className="size-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="section-kicker">Research</p>
                      <h3 className="mt-3 font-display text-xl font-bold leading-8 text-foreground">
                        {paper.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{paper.authors}</p>
                      <AnimatedLink
                        href={paper.paperUrl}
                        target="_blank"
                        className="mt-5 font-mono text-[0.68rem] font-semibold tracking-[0.06em] text-foreground uppercase"
                      >
                        Read the paper
                      </AnimatedLink>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionReveal>
          </div>

          <div className="grid gap-5">
            <MotionReveal direction="left">
              <Card className="classic-corners paper-surface gap-0 rounded-lg border py-0 ring-0">
                <CardHeader className="flex flex-row items-center gap-3 border-b px-5 py-5 sm:px-6">
                  <span className="flex size-10 items-center justify-center rounded-md border bg-background text-brand">
                    <Award className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="section-kicker">Credentials</p>
                    <h3 className="mt-1 font-display text-xl font-bold">Selected learning record</h3>
                  </div>
                </CardHeader>
                <CardContent className="px-5 py-2 sm:px-6">
                  {credentials.map((credential, index) => (
                    <div key={`${credential.title}-${credential.year}`}>
                      <article className="py-5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-display text-base font-bold text-foreground">
                            {credential.title}
                          </h4>
                          <Badge
                            variant="outline"
                            className="h-auto rounded-sm px-2 py-1 font-mono text-[0.58rem] tracking-[0.06em] uppercase"
                          >
                            {credential.year}
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm font-semibold text-brand">{credential.issuer}</p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {credential.description}
                        </p>
                        {"href" in credential ? (
                          <AnimatedLink
                            href={credential.href}
                            target="_blank"
                            className="mt-3 font-mono text-[0.64rem] font-semibold text-foreground uppercase"
                          >
                            Verify credential
                          </AnimatedLink>
                        ) : null}
                      </article>
                      {index < credentials.length - 1 ? <Separator /> : null}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </MotionReveal>

            <MotionReveal direction="left" delay={0.08}>
              <Card className="paper-surface gap-0 rounded-lg border py-0 ring-0">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <LanguagesIcon className="size-5 text-brand" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="font-display text-lg font-bold">Language and working style</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {languages.map((language) => (
                      <Badge key={language} className="h-auto rounded-sm bg-primary px-2.5 py-1.5">
                        {language}
                      </Badge>
                    ))}
                  </div>
                  <Separator className="my-5" />
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    {strengths.map((strength) => (
                      <li key={strength} className="flex items-center gap-2">
                        <span className="size-1 rounded-full bg-brand" aria-hidden="true" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
