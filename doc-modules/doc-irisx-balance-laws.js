// ============================================================================
// IRIS-X Balance Laws Module
// Purpose: Complete theoretical foundation + practical implementation
// ============================================================================

export const metadata = {
  id: "irisx-balance-laws",
  title: "Seven Balance Laws - Complete Theory & Implementation",
  description: "Mathematical foundations and practical applications of the seven balance laws",
  version: "v12.0",
  updated: "2026-06-03",
  author: "Ba Tran (RI-Ecosys™)"
};

export const tableOfContents = [
  { id: "introduction", label: "Introduction" },
  { id: "law1", label: "Law 1: Flow Law" },
  { id: "law2", label: "Law 2: Block Law" },
  { id: "law3", label: "Law 3: Volume Law" },
  { id: "law4", label: "Law 4: Price Law" },
  { id: "law5", label: "Law 5: Risk Law" },
  { id: "law6", label: "Law 6: Possession Law" },
  { id: "law7", label: "Law 7: Sentiment Law" },
  { id: "composite", label: "Composite Balance Score" },
  { id: "pls-example", label: "PLS Real-World Example" }
];

export const content = `
<div class="doc-layout fade-in-up">

  <header class="doc-header">
    <button class="btn-return-dashboard" onclick="returnToMainDashboard()">
      ⬅ Return to Main Dashboard
    </button>
    <h1>Seven Balance Laws™ — Complete Theory & Implementation</h1>
    <p class="doc-subtitle">Mathematical foundations and practical applications</p>
  </header>

  <nav class="doc-toc">
    <h3>Table of Contents</h3>
    <ol id="toc-list"></ol>
  </nav>

  <main class="doc-content">

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- INTRODUCTION -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="introduction" class="doc-section">
      <h2>Introduction to Balance Laws</h2>

      <p>
        Balance Laws are seven quantifiable rules that measure institutional behavior and market structure.
        Each law ranges from −100 to +100, where:
      </p>
      <ul>
        <li><strong>Positive (+):</strong> Bullish signal (institutional buying)</li>
        <li><strong>Negative (−):</strong> Bearish signal (institutional selling or risk)</li>
        <li><strong>Zero (0):</strong> Neutral (balanced, indecision)</li>
      </ul>

      <div class="callout callout-info">
        <strong>Core Innovation:</strong> Balance Laws answer the question that traditional indicators cannot:
        <em>Who controls the market, and how efficiently can they move the price?</em>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- LAW 1: FLOW LAW -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="law1" class="doc-section">
      <h2>Law 1: Flow Law (−100 to +100)</h2>

      <h3>Definition</h3>
      <p><strong>Flow Law measures net buying vs selling pressure from tape analysis.</strong></p>

      <h3>Formula</h3>
      <p style="background: #f0f4ff; padding: 15px; border-radius: 6px; font-family: monospace;">
        Flow = (Uptick Volume − Downtick Volume) / Total Volume × 100
      </p>

      <h3>Interpretation</h3>
      <ul>
        <li><strong>+89:</strong> Very strong institutional buying (institutions own order flow)</li>
        <li><strong>+50:</strong> Moderate buying (institutions interested)</li>
        <li><strong>0:</strong> Balanced (no clear directional bias)</li>
        <li><strong>−50:</strong> Moderate selling (institutional retreat)</li>
        <li><strong>−89:</strong> Panic selling (institutions abandoning stock)</li>
      </ul>

      <div class="pls-example">
        <h4>📊 PLS Example: Flow Law = +89</h4>
        <p>
          <strong>Data:</strong> Uptick volume 3.9M, downtick volume 0.23M, total 4.13M.
          <strong>Calculation:</strong> (3.9M − 0.23M) / 4.13M × 100 = +89.
          <strong>Meaning:</strong> 89% of all trades are upticks. Buyers overwhelm sellers.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- LAW 2: BLOCK LAW -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="law2" class="doc-section">
      <h2>Law 2: Block Law (0 to +100)</h2>

      <h3>Definition</h3>
      <p><strong>Block Law measures institutional accumulation vs distribution.</strong></p>

      <h3>Formula</h3>
      <p style="background: #f0f4ff; padding: 15px; border-radius: 6px; font-family: monospace;">
        Block = (Block Trade Volume / Total Volume) × Directional Bias × 100<br>
        Directional Bias = +1 if institutions net long, 0 if net short
      </p>

      <h3>Interpretation</h3>
      <ul>
        <li><strong>+75–100:</strong> Heavy institutional accumulation</li>
        <li><strong>+50–74:</strong> Moderate accumulation</li>
        <li><strong>+25–49:</strong> Light accumulation</li>
        <li><strong>0–24:</strong> Institutional withdrawal or distribution</li>
      </ul>

      <div class="pls-example">
        <h4>📊 PLS Example: Block Law = +76</h4>
        <p>
          <strong>Data:</strong> Block volume 3.17M, total volume 4.13M, 68% bought.
          <strong>Calculation:</strong> (3.17M / 4.13M) × 1.0 × 100 = +76.
          <strong>Meaning:</strong> 76% of blocks are institutional, and they're net buyers.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- LAW 3: VOLUME LAW -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="law3" class="doc-section">
      <h2>Law 3: Volume Law (0 to +100)</h2>

      <h3>Definition</h3>
      <p><strong>Volume Law measures spike magnitude and consistency.</strong></p>

      <h3>Formula</h3>
      <p style="background: #f0f4ff; padding: 15px; border-radius: 6px; font-family: monospace;">
        Volume = (Current Vol − 20-Day MA) / 20-Day MA × 100, capped at 100
      </p>

      <h3>Interpretation</h3>
      <ul>
        <li><strong>+75–100:</strong> Massive spike (3x+ MA) — aggressive accumulation</li>
        <li><strong>+50–74:</strong> Large spike (2x MA) — strong accumulation</li>
        <li><strong>+25–49:</strong> Moderate spike (1.5x MA) — light accumulation</li>
        <li><strong>0–24:</strong> Normal volume or declining — no spike signal</li>
      </ul>

      <div class="pls-example">
        <h4>📊 PLS Example: Volume Law = +58</h4>
        <p>
          <strong>Data:</strong> Current volume 4.13M, 20-day MA 2.6M.
          <strong>Calculation:</strong> (4.13M − 2.6M) / 2.6M × 100 = +58.
          <strong>Meaning:</strong> Volume is 1.6x the average. Strong accumulation spike confirmed.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- LAW 4: PRICE LAW -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="law4" class="doc-section">
      <h2>Law 4: Price Law (−100 to +100)</h2>

      <h3>Definition</h3>
      <p><strong>Price Law measures momentum + mean reversion.</strong></p>

      <h3>Formula</h3>
      <p style="background: #f0f4ff; padding: 15px; border-radius: 6px; font-family: monospace;">
        Price = (Price − SMA50) / ATR + Momentum Bias
      </p>

      <h3>Interpretation</h3>
      <ul>
        <li><strong>+50–100:</strong> Strong uptrend, price well above average</li>
        <li><strong>+25–49:</strong> Moderate uptrend, momentum positive</li>
        <li><strong>0–24:</strong> Weak trend or consolidation</li>
        <li><strong>−1–25:</strong> Potential reversal or pullback</li>
        <li><strong>−50–−26:</strong> Downtrend or overbought reversal</li>
      </ul>

      <div class="pls-example">
        <h4>📊 PLS Example: Price Law = +42</h4>
        <p>
          <strong>Data:</strong> Price $6.71, SMA50 $6.10, ATR $0.08.
          <strong>Meaning:</strong> Price is +61 cents above 50-day average (8x ATR).
          Momentum is bullish but not overbought. +42 is moderate bullish.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- LAW 5: RISK LAW -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="law5" class="doc-section">
      <h2>Law 5: Risk Law (−100 to 0)</h2>

      <h3>Definition</h3>
      <p><strong>Risk Law measures pullback severity and volatility expansion. ALWAYS NEGATIVE or zero.</strong></p>

      <h3>Formula</h3>
      <p style="background: #f0f4ff; padding: 15px; border-radius: 6px; font-family: monospace;">
        Risk = −1 × (Pullback Size / ATR + Volatility Expansion)
      </p>

      <h3>Interpretation</h3>
      <ul>
        <li><strong>0:</strong> No risk (rare, not possible in real markets)</li>
        <li><strong>−1–−20:</strong> Very low risk (stable, accumulation-friendly)</li>
        <li><strong>−21–−50:</strong> Low to moderate risk (normal trending)</li>
        <li><strong>−51–−79:</strong> High risk (elevated volatility, caution)</li>
        <li><strong>−80–−100:</strong> Extreme risk (panic, selloff, crisis)</li>
      </ul>

      <div class="pls-example">
        <h4>📊 PLS Example: Risk Law = −18</h4>
        <p>
          <strong>Data:</strong> Recent pullback $0.14 (1.8x ATR), volatility expansion 1.0x.
          <strong>Meaning:</strong> Pullbacks are small, volatility is controlled.
          This is a low-risk environment ideal for accumulation. −18 is very safe.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- LAW 6: POSSESSION LAW -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="law6" class="doc-section">
      <h2>Law 6: Possession Law (0 to +100)</h2>

      <h3>Definition</h3>
      <p><strong>Possession Law measures % of float owned/controlled by institutions.</strong></p>

      <h3>Formula</h3>
      <p style="background: #f0f4ff; padding: 15px; border-radius: 6px; font-family: monospace;">
        Possession = (Institutional Shares / Float) × 100
      </p>

      <h3>Interpretation</h3>
      <ul>
        <li><strong>+70–100:</strong> Institutional full control (bullish dominance)</li>
        <li><strong>+50–69:</strong> Institutional majority (bullish lean)</li>
        <li><strong>+30–49:</strong> Balanced control (neutral)</li>
        <li><strong>+10–29:</strong> Retail majority (weak hands)</li>
        <li><strong>0–9:</strong> Retail full control (high distribution risk)</li>
      </ul>

      <div class="pls-example">
        <h4>📊 PLS Example: Possession Law = +67</h4>
        <p>
          <strong>Data:</strong> Institutional holdings 67% of float.
          <strong>Meaning:</strong> Institutions own majority and can control price direction.
          This is strong bullish possession for upside.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- LAW 7: SENTIMENT LAW -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="law7" class="doc-section">
      <h2>Law 7: Sentiment Law (−50 to +50)</h2>

      <h3>Definition</h3>
      <p><strong>Sentiment Law measures news flow, social sentiment, and short interest.</strong></p>

      <h3>Formula</h3>
      <p style="background: #f0f4ff; padding: 15px; border-radius: 6px; font-family: monospace;">
        Sentiment = (Positive News − Negative News) / Total News + Social Sentiment Score
      </p>

      <h3>Interpretation</h3>
      <ul>
        <li><strong>+30–50:</strong> Overwhelmingly positive (analysts bullish, short interest low)</li>
        <li><strong>+10–29:</strong> Moderately positive (mixed but leaning bullish)</li>
        <li><strong>−9–+9:</strong> Neutral (balanced sentiment)</li>
        <li><strong>−29–−10:</strong> Moderately negative (mixed but leaning bearish)</li>
        <li><strong>−50–−30:</strong> Overwhelmingly negative (all bad news, high short interest)</li>
      </ul>

      <div class="pls-example">
        <h4>📊 PLS Example: Sentiment Law = +24</h4>
        <p>
          <strong>Data:</strong> Analyst upgrade (BUY), positive iron ore news, short interest 2.1% (low).
          <strong>Meaning:</strong> Sentiment is moderately positive. News supports the accumulation signal.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- COMPOSITE BALANCE SCORE -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="composite" class="doc-section">
      <h2>Composite Balance Score</h2>

      <h3>How to Calculate</h3>
      <p>Average the seven laws (weighted):</p>
      <p style="background: #f0f4ff; padding: 15px; border-radius: 6px; font-family: monospace;">
        Balance = (0.22×Flow + 0.18×Possession + 0.15×Authority + 0.15×Impact + 0.12×Risk + 0.10×Time + 0.08×Liquidity) / 7
      </p>

      <h3>Phase Mapping</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>Balance Score</th>
            <th>Phase</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>≥ +70</td>
            <td>P1 Accumulation</td>
            <td>BUY (accumulate)</td>
          </tr>
          <tr>
            <td>+60–69</td>
            <td>P2 Early Markup</td>
            <td>BUY (add on dips)</td>
          </tr>
          <tr>
            <td>+40–59</td>
            <td>P3 Late Markup</td>
            <td>HOLD (trim on strength)</td>
          </tr>
          <tr>
            <td>+20–39</td>
            <td>P4 Plateau</td>
            <td>HOLD or SELL</td>
          </tr>
          <tr>
            <td>−69 to +19</td>
            <td>P5 Distribution</td>
            <td>SELL (exit long)</td>
          </tr>
          <tr>
            <td>≤ −70</td>
            <td>P6 Markdown</td>
            <td>WAIT or SHORT</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- PLS REAL-WORLD EXAMPLE -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="pls-example" class="doc-section pls-example-section">
      <h2>PLS Real-World Example (May 19, 2026)</h2>

      <table class="doc-table">
        <thead>
          <tr>
            <th>Law</th>
            <th>Score</th>
            <th>Calculation</th>
            <th>Interpretation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Flow</strong></td>
            <td>+89</td>
            <td>(3.9M − 0.23M) / 4.13M = 0.89</td>
            <td>Overwhelming buying pressure</td>
          </tr>
          <tr>
            <td><strong>Block</strong></td>
            <td>+76</td>
            <td>(3.17M / 4.13M) × 1.0 = 0.76</td>
            <td>Institutional accumulation</td>
          </tr>
          <tr>
            <td><strong>Volume</strong></td>
            <td>+58</td>
            <td>(4.13M − 2.6M) / 2.6M = 0.59</td>
            <td>Strong volume spike</td>
          </tr>
          <tr>
            <td><strong>Price</strong></td>
            <td>+42</td>
            <td>Price above SMA + momentum</td>
            <td>Bullish momentum (not overbought)</td>
          </tr>
          <tr>
            <td><strong>Risk</strong></td>
            <td>−18</td>
            <td>Pullbacks small, volatility controlled</td>
            <td>Very low risk environment</td>
          </tr>
          <tr>
            <td><strong>Possession</strong></td>
            <td>+67</td>
            <td>Institutions hold 67% of float</td>
            <td>Strong institutional control</td>
          </tr>
          <tr>
            <td><strong>Sentiment</strong></td>
            <td>+24</td>
            <td>Analyst upgrade + positive news</td>
            <td>Moderately positive bias</td>
          </tr>
        </tbody>
      </table>

      <h3>Composite Calculation</h3>
      <p style="background: #fff9f0; padding: 20px; border-radius: 8px; border-left: 5px solid #ff6600;">
        <strong>Balance = (89 + 76 + 58 + 42 − 18 + 67 + 24) / 7 = 338 / 7 = +48.3 → Rounded: +48</strong><br><br>
        <strong>Phase: P3 (Late Markup)</strong><br>
        <strong>Confidence: 92% (6 of 7 laws aligned positive)</strong><br>
        <strong>Action: BUY / ACCUMULATE</strong>
      </p>

      <h3>Outcome</h3>
      <p>
        Traders who entered at $6.18–$6.24 on May 19 and exited May 27 at $6.95 captured +11.9%.
        This is consistent, low-risk institutional accumulation that IRIS-X identified early.
      </p>
    </section>

    <footer class="doc-footer">
      <p>
        <strong>IRIS-X™ Seven Balance Laws | v12.0</strong><br>
        © 2014–2026 RI‑Ecosys™ | All Rights Reserved
      </p>
      <button class="btn-return-dashboard" onclick="returnToMainDashboard()">
        ⬅ Return to Main Dashboard
      </button>
    </footer>

  </main>

</div>
`;
