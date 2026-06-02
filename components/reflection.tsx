import React from "react"

export default function LearningReflection() {
  return (
    <section className="container mx-auto px-4 py-12" id="reflection">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-6 flex flex-col items-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║              LEARNING REFLECTION               ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="border-2 border-border p-6 md:p-8 bg-card hover:border-accent transition-colors duration-300">
          <div className="font-mono text-xs md:text-sm leading-relaxed space-y-4">
            <div className="text-accent mb-4 border-b border-border pb-2 flex items-center justify-between">
              <span>[ HNG INTERNSHIP REFLECTION ]</span>
              <span className="text-muted-foreground text-xxs hidden md:inline">SYSTEM STATUS: COMPLETED</span>
            </div>

            <div className="space-y-3">
              <p className="text-foreground">
                <span className="text-accent font-bold">&gt;&gt; LOG: </span>
                During the HNG Internship, I transitioned from simply writing code that works to architecting systems that survive in production.
              </p>
              
              <p className="text-foreground">
                <span className="text-accent font-bold">&gt;&gt; LOG: </span>
                I learned the critical importance of writing Request for Comments (RFCs) to validate ideas before touching code, and how to rigorously plan for edge cases—like network timeouts, race conditions, and malformed inputs.
              </p>

              <p className="text-foreground">
                <span className="text-accent font-bold">&gt;&gt; LOG: </span>
                By building an append-only database from scratch and optimizing a high-traffic query engine, I significantly deepened my understanding of database internals, memory management, and what it truly takes to scale a backend application reliably.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-muted-foreground text-xxs">
              <div>// FOCUS: CLEAN ARCHITECTURE & RESILIENCE</div>
              <div>// LEVEL: JUNIOR -&gt; PRODUCTION-READY</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
