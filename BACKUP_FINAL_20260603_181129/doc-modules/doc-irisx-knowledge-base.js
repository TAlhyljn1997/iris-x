// ============================================================================
// IRIS-X Knowledge Base Module
// Purpose: Comprehensive concept reference with practical examples
// ============================================================================

export const metadata = {
  id: "irisx-knowledge-base",
  title: "IRIS-X Knowledge Base",
  description: "Comprehensive concept reference with definitions, examples, and applications",
  version: "v12.0",
  updated: "2026-06-03",
  author: "Ba Tran (RI-Ecosys™)"
};

export const tableOfContents = [
  { id: "core-concepts", label: "Core Concepts" },
  { id: "market-phases", label: "Market Phases (P1-P6)" },
  { id: "institutional-behavior", label: "Institutional Behavior" },
  { id: "microstructure-signals", label: "Microstructure Signals" },
  { id: "practical-applications", label: "Practical Applications" },
  { id: "common-mistakes", label: "Common Mistakes to Avoid" }
];

export const content = `
<div class="doc-layout fade-in-up">

  <header class="doc-header">
    <button class="btn-return-dashboard" onclick="returnToMainDashboard()">
      ⬅ Return to Main Dashboard
    </button>
    <h1>IRIS-X Knowledge Base</h1>
    <p class="doc-subtitle">Comprehensive concept reference with definitions and practical examples</p>
  </header>

  <nav class="doc-toc">
    <h3>Table of Contents</h3>
    <ol id="toc-list"></ol>
  </nav>

  <main class="doc-content">

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- CORE CONCEPTS -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="core-concepts" class="doc-section">
      <h2>Core Concepts</h2>

      <h3>What is Microstructure?</h3>
      <p>
        Microstructure refers to the mechanics of how orders are matched and prices are discovered
        in financial markets. It goes beyond price and volume to understand:
      </p>
      <ul>
        <li><strong>Who</strong> trades (institutions vs retail)</li>
        <li><strong>How much</strong> they trade (block sizes, concentration)</li>
        <li><strong>Where</strong> they trade (venues, dark pools)</li>
        <li><strong>How</strong> they trade (methods, execution quality)</li>
        <li><strong>When</strong> they trade (intraday patterns, seasonality)</li>
      </ul>

      <div class="pls-example">
        <h4>📊 Microstructure Example</h4>
        <p>
          <strong>Traditional View:</strong> PLS closes up 2% on 5M volume. Looks bullish.
        </p>
        <p>
          <strong>Microstructure View:</strong> Of 5M volume, 4.5M is institutional (90% of volume).
          94% of blocks are bought (not sold). Institutions control 67% of float.
          This is institutional accumulation, not retail FOMO.
        </p>
        <p>
          <strong>Conclusion:</strong> Price move is intentional and backed by smart money, not an accident.
        </p>
      </div>

      <h3>Balance Laws vs Traditional Analysis</h3>
      <p>
        Traditional technical analysis (RSI, MACD, moving averages) tells you the direction.
        Balance Laws tell you <em>why</em> the direction will continue.
      </p>

      <table class="doc-table">
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Traditional Analysis</th>
            <th>Balance Laws (IRIS-X)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Input</strong></td>
            <td>Price + Volume</td>
            <td>Microstructure + Institutional Flow</td>
          </tr>
          <tr>
            <td><strong>Measures</strong></td>
            <td>Momentum, Trend, Volatility</td>
            <td>Who controls the market + How efficiently</td>
          </tr>
          <tr>
            <td><strong>False signals?</strong></td>
            <td>Common (whipsaws, traps)</td>
            <td>Rare (backed by institutional positioning)</td>
          </tr>
          <tr>
            <td><strong>Best for</strong></td>
            <td>Identifying direction</td>
            <td>Confirming institutional intent</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- MARKET PHASES -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="market-phases" class="doc-section">
      <h2>Market Phases (P1–P6)</h2>

      <h3>The Six Phases</h3>
      <p>
        Every stock cycles through 6 phases. Each phase has different characteristics and trading actions.
      </p>

      <h4>P1: Accumulation (Balance ≥ +70)</h4>
      <p>
        <strong>What's happening:</strong> Institutions quietly buying, price stable or drifting down.
        <strong>Who's in control:</strong> Institutions (retail unaware).
        <strong>Your action:</strong> BUY (accumulate into weakness).
        <strong>Example:</strong> PLS on May 19, 2026 at $6.18–$6.24.
      </p>

      <h4>P2: Early Markup (Balance +60–69)</h4>
      <p>
        <strong>What's happening:</strong> Price starts rising, volume increasing, institutions still buying.
        <strong>Your action:</strong> BUY (add on dips, ride the wave).
      </p>

      <h4>P3: Late Markup (Balance +40–59)</h4>
      <p>
        <strong>What's happening:</strong> Strong rally, volatility rising, first sellers appear.
        <strong>Your action:</strong> HOLD or TRIM (take some profits on strength).
      </p>

      <h4>P4: Plateau (Balance +20–39)</h4>
      <p>
        <strong>What's happening:</strong> Range-bound, indecision, profit-taking.
        <strong>Your action:</strong> HOLD or WAIT (avoid new entries).
      </p>

      <h4>P5: Distribution (Balance −69 to +19)</h4>
      <p>
        <strong>What's happening:</strong> Institutions selling, price rolling over, volume expanding.
        <strong>Your action:</strong> SELL (exit long positions, establish shorts).
      </p>

      <h4>P6: Markdown (Balance ≤ −70)</h4>
      <p>
        <strong>What's happening:</strong> Panic selling, capitulation, potential bounce.
        <strong>Your action:</strong> WAIT or SHORT (watch for reversal).
      </p>

      <div class="callout callout-warning">
        <strong>⚠️ Phase Risk:</strong> Most traders buy in P4/P5 (late, expensive) and sell in P6 (panic, loss).
        IRIS-X helps you buy in P1/P2 (early, profitable) and sell in P3/P4 (strategic, protected).
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- INSTITUTIONAL BEHAVIOR -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="institutional-behavior" class="doc-section">
      <h2>Institutional Behavior</h2>

      <h3>Why Institutions Matter</h3>
      <p>
        Institutions (pension funds, hedge funds, ETFs) control the majority of trading volume.
        Their behavior is predictable because they follow rules, not emotions.
      </p>

      <h3>Institutional Accumulation Pattern</h3>
      <ul>
        <li><strong>Phase 1:</strong> Quiet buying via dark pools (no market impact)</li>
        <li><strong>Phase 2:</strong> Increase volume gradually (test if retail is watching)</li>
        <li><strong>Phase 3:</strong> Aggressive buying on lit venues (signal to others + accumulate remaining shares)</li>
        <li><strong>Phase 4:</strong> Reduce purchases (accumulation complete, wait for momentum)</li>
        <li><strong>Phase 5:</strong> Price appreciates (they sit back and watch)</li>
        <li><strong>Phase 6:</strong> Distribution (sell into strength)</li>
      </ul>

      <h3>Institutional Distribution Pattern</h3>
      <p>Reverse of accumulation: selling starts quietly, increases gradually, then becomes aggressive.</p>

      <div class="pls-example">
        <h4>📊 PLS: Institutional Buying Pattern</h4>
        <p>
          <strong>May 19 (Day 1):</strong> 94% institutional volume at $6.18–$6.24 (quiet accumulation).
          <strong>May 20–21:</strong> Institutions continue buying, price $6.38–$6.47 (phase 2).
          <strong>May 22–24:</strong> Price rallies to $6.73–$6.95 (phase 3, momentum accelerates).
          <strong>May 27+:</strong> Institutions begin profit-taking (phase 5).
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- MICROSTRUCTURE SIGNALS -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="microstructure-signals" class="doc-section">
      <h2>Microstructure Signals</h2>

      <h3>Key Signals IRIS-X Monitors</h3>

      <h4>1. Block Trade Concentration</h4>
      <p>
        <strong>What it means:</strong> Large trades (≥100K shares) cluster on bid side = buying pressure.
        <strong>Signal:</strong> If 70%+ of blocks are bid-initiated, institutions are accumulating.
        <strong>Example:</strong> PLS: 68% of blocks bought = strong bullish signal.
      </p>

      <h4>2. VWAP Alignment</h4>
      <p>
        <strong>What it means:</strong> If price > VWAP, buyers are winning.
        <strong>Signal:</strong> Price $6.71 > VWAP $6.753 still positive (buyers paid premium = conviction).
      </p>

      <h4>3. Bid-Ask Imbalance</h4>
      <p>
        <strong>What it means:</strong> More buy orders than sell orders at key levels.
        <strong>Signal:</strong> Bid/ask ratio 1.85 = 85% more bid volume (very bullish).
      </p>

      <h4>4. Dark Pool Activity</h4>
      <p>
        <strong>What it means:</strong> Institutions avoiding lit venue to hide size.
        <strong>Signal:</strong> High dark pool % = stealth accumulation (very bullish).
        <strong>Note:</strong> Low dark pool % during selling = panic (very bearish).
      </p>

      <h4>5. Possession Shift</h4>
      <p>
        <strong>What it means:</strong> % of float owned by institutions changing.
        <strong>Signal:</strong> Possession increasing from 61% to 67% = institutions buying.
      </p>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- PRACTICAL APPLICATIONS -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="practical-applications" class="doc-section">
      <h2>Practical Applications</h2>

      <h3>Real-World Entry & Exit Rules</h3>

      <h4>Entry Rules</h4>
      <ul>
        <li><strong>Balance ≥ +70:</strong> P1 Accumulation. Enter with 2–3% position size. Scale in over 3 trades.</li>
        <li><strong>Balance +60–69:</strong> P2 Early Markup. Enter with 1–2% position size. Add on dips.</li>
        <li><strong>Balance +40–59:</strong> P3 Late Markup. Enter with 0.5–1% position size. Avoid new entries.</li>
        <li><strong>Balance +20–39:</strong> P4 Plateau. HOLD existing, avoid new entries.</li>
        <li><strong>Balance < +20:</strong> Avoid (wait for next opportunity).</li>
      </ul>

      <h4>Exit Rules</h4>
      <ul>
        <li><strong>Target 1 (Quick Profit):</strong> +3–5% from entry. Sell 1/3 position.</li>
        <li><strong>Target 2 (Medium Profit):</strong> +7–10% from entry. Sell 1/3 position.</li>
        <li><strong>Target 3 (Upside):</strong> +15%+ from entry. Hold 1/3 with trailing stop.</li>
        <li><strong>Stop Loss:</strong> −2–3% from entry. Always set this first.</li>
        <li><strong>Emergency Exit:</strong> Balance drops below 0 (phase reversal). Exit immediately.</li>
      </ul>

      <h4>Position Sizing</h4>
      <p>
        Never risk more than 1% of portfolio per trade.
      </p>
      <ul>
        <li>High confidence (Balance ≥ +70, 6+ laws aligned): 2–3% position</li>
        <li>Medium confidence (Balance +40–69, 4–5 laws aligned): 1–2% position</li>
        <li>Low confidence (Balance < +40, <4 laws aligned): 0.5–1% position</li>
      </ul>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- COMMON MISTAKES -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="common-mistakes" class="doc-section">
      <h2>Common Mistakes to Avoid</h2>

      <h3>Mistake 1: Ignoring Balance Laws</h3>
      <p>
        <strong>Error:</strong> "Price is up 2%, RSI looks good, I'll buy."
        <strong>Problem:</strong> Traditional indicators don't confirm institutional intent.
        <strong>Solution:</strong> Check Balance Score first. If it's negative, wait even if price looks good.
      </p>

      <h3>Mistake 2: Entering Too Late (P3–P4)</h3>
      <p>
        <strong>Error:</strong> Buying after price has already rallied 5–10%.
        <strong>Problem:</strong> Risk/reward is poor. Too much upside used, limited profit potential.
        <strong>Solution:</strong> Only enter P1–P2. If you missed it, wait for next stock.
      </p>

      <h3>Mistake 3: Holding Through Distribution (P5–P6)</h3>
      <p>
        <strong>Error:</strong> "It went up 10%, it will go up more. Hold."
        <strong>Problem:</strong> Institutions are selling. Price will reverse.
        <strong>Solution:</strong> Sell 1/3 at Target 1, use trailing stop for remainder.
      </p>

      <h3>Mistake 4: Averaging Down on Weak Signals</h3>
      <p>
        <strong>Error:</strong> "Price dropped, I'll buy more to average down."
        <strong>Problem:</strong> If Balance dropped too, trend is reversing.
        <strong>Solution:</strong> Check Balance before averaging. If negative, exit instead.
      </p>

      <h3>Mistake 5: Revenge Trading After Loss</h3>
      <p>
        <strong>Error:</strong> Hit stop loss, immediately re-enter same stock.
        <strong>Problem:</strong> Emotional trading. Thesis already broke.
        <strong>Solution:</strong> Wait 1–2 bars. Let emotions settle. Re-check Balance.
      </p>

      <div class="callout callout-warning">
        <strong>⚠️ Golden Rule:</strong> If you entered on high Balance and it drops below +30, exit.
        Don't wait for the "bounce." Institutional support is gone.
      </div>
    </section>

    <footer class="doc-footer">
      <p>
        <strong>IRIS-X™ Knowledge Base | v12.0</strong><br>
        © 2014–2026 RI‑Ecosys™ | All Rights Reserved
      </p>
      <button class="btn-return-dashboard" onclick="returnToMainDashboard()">
        ⬅ Return to Main Dashboard
      </button>
    </footer>

  </main>

</div>
`;
