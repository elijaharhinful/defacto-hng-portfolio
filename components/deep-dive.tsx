import React from "react"

export default function FeaturedDeepDive() {
  return (
    <section className="container mx-auto px-4 py-12" id="deep-dive">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-6 flex flex-col items-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║          FEATURED PROJECT DEEP DIVE            ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="border-2 border-border bg-card p-6 md:p-8 hover:border-accent transition-colors duration-300">
          <div className="font-mono text-xs md:text-sm space-y-8">
            {/* Project Header */}
            <div className="border-b border-border pb-4">
              <span className="text-accent text-lg font-bold">[ INSIGHTA LABS+ ]</span>
              <span className="text-muted-foreground ml-2">// Demographic Intelligence System</span>
            </div>

            {/* The Problem */}
            <div className="space-y-2">
              <div className="text-accent font-bold">╔═══ THE PROBLEM IT SOLVED</div>
              <div className="text-foreground pl-4 border-l border-border py-1 leading-relaxed">
                Analysts needed a way to query demographic data using plain English, while administrators needed the ability to upload massive datasets without crashing the system or slowing down ongoing queries for other users.
              </div>
              <div className="text-accent text-xs">╚══════════════════════════════════════════════</div>
            </div>

            {/* Architecture / Request Flow */}
            <div className="space-y-4">
              <div className="text-accent font-bold">╔═══ ARCHITECTURE & REQUEST FLOW</div>
              
              <div className="pl-4 border-l border-border space-y-4">
                {/* Read Flow */}
                <div className="space-y-2">
                  <div className="text-accent font-semibold flex items-center gap-2">
                    <span>[01]</span> READ FLOW (Natural Language Query)
                  </div>
                  <div className="text-muted-foreground pl-6 space-y-1">
                    <div>1. User submits a natural language query <span className="text-foreground">(e.g., &quot;young males from nigeria&quot;)</span></div>
                    <div>2. Rule-based parser maps keywords to deterministic filters</div>
                    <div>3. Query normalizer generates a canonical cache key</div>
                    <div>4. System checks cache; on miss, executes optimized SQL query</div>
                    <div>5. Returns paginated payload to the interface</div>
                  </div>
                </div>

                {/* Write Flow */}
                <div className="space-y-2">
                  <div className="text-accent font-semibold flex items-center gap-2">
                    <span>[02]</span> WRITE FLOW (Large CSV Ingestion)
                  </div>
                  <div className="text-muted-foreground pl-6 space-y-1">
                    <div>1. Administrator uploads file via endpoint</div>
                    <div>2. System streams data in concurrent, memory-efficient chunks</div>
                    <div>3. Validates required fields and deduplicates against the database</div>
                    <div>4. Performs high-performance batch SQL inserts</div>
                    <div>5. Logs partial failures and returns a detailed execution summary</div>
                  </div>
                </div>
              </div>

              <div className="text-accent text-xs">╚══════════════════════════════════════════════</div>
            </div>

            {/* Key Endpoints */}
            <div className="space-y-2">
              <div className="text-accent font-bold">╔═══ KEY ENDPOINTS & MODULES</div>
              <div className="pl-4 border-l border-border space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-border p-3 hover:border-accent transition-colors bg-background/50">
                    <div className="text-accent font-bold mb-1">GET /api/profiles/search</div>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Custom NLP parser. Converts plain English search strings into combinable SQL filters dynamically.
                    </p>
                  </div>
                  <div className="border border-border p-3 hover:border-accent transition-colors bg-background/50">
                    <div className="text-accent font-bold mb-1">POST /api/profiles</div>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Handles single record ingestion with idempotency rules to prevent duplicate data points.
                    </p>
                  </div>
                </div>
                <div className="border border-border p-3 hover:border-accent transition-colors bg-background/50">
                  <div className="text-accent font-bold mb-1">OAuth & Auth Module</div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Manages secure multi-interface (CLI/Browser) access using GitHub OAuth with PKCE, JWT tokens in HTTP-only cookies, and CSRF protection.
                  </p>
                </div>
              </div>
              <div className="text-accent text-xs">╚══════════════════════════════════════════════</div>
            </div>

            {/* Technical Challenge */}
            <div className="space-y-2">
              <div className="text-accent font-bold">╔═══ THE TECHNICAL CHALLENGE</div>
              <div className="text-foreground pl-4 border-l border-border py-1 leading-relaxed">
                Ingesting a massive 500,000-row CSV file threatened to exhaust server memory and block the database, causing severe latency or total denial of service for other active users trying to read queries.
              </div>
              <div className="text-accent text-xs">╚══════════════════════════════════════════════</div>
            </div>

            {/* The Solution */}
            <div className="space-y-2">
              <div className="text-accent font-bold">╔═══ THE SOLUTION (ENGINEERED RESPONSE)</div>
              <div className="text-foreground pl-4 border-l-2 border-accent py-1 leading-relaxed bg-accent/5 p-4 rounded-sm">
                I abandoned loading the entire file into memory and instead implemented a **streaming chunk processor**. 
                The system was configured to process records concurrently in optimized batch sizes while enforcing real-time validation rules (skipping invalid ages or duplicate names). 
                By keeping database transactions brief and decoupled, the API successfully maintained a **sub-500ms read latency** even during intense ingestion events, providing a detailed breakdown of inserted vs. skipped rows upon completion.
              </div>
              <div className="text-accent text-xs">╚══════════════════════════════════════════════</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
