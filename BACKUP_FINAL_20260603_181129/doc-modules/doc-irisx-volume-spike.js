// ============================================================================
// IRIS-X Volume Spike Theory Module
// Purpose: Complete volume spike analysis + practical detection methods
// ============================================================================

export const metadata = {
  id: "irisx-volume-spike",
  title: "Volume Spike Theory - Complete Research",
  description: "Advanced volume spike detection and interpretation for institutional accumulation",
  version: "v12.0",
  updated: "2026-06-03",
  author: "Ba Tran (RI-Ecosys™)"
};

export const tableOfContents = [
  { id: "what-is-spike", label: "What is a Volume Spike?" },
  { id: "why-spikes-matter", label: "Why Spikes Matter" },
  { id: "types-of-spikes", label: "Types of Volume Spikes" },
  { id: "detection-methods", label: "Detection Methods" },
  { id: "practical-trading", label: "Practical Trading Rules" },
  { id: "case-studies", label: "Real Case Studies" }
];

export const content = `
<div class="doc-layout fade-in-up">

  <header class="doc-header">
    <button class="btn-return-dashboard" onclick="returnToMainDashboard()">
      ⬅ Return to Main Dashboard
    </button>
    <h1>Volume Spike Theory — Complete Research</h1>
    <p class="doc-subtitle">Advanced volume spike detection and institutional accumulation signals</p>
  </header>

  <nav class="doc-toc">
    <h3>Table of Contents</h3>
    <ol id="toc-list"></ol>
  </nav>

  <main class="doc-content">

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- WHAT IS A VOLUME SPIKE -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="what-is-spike" class="doc-section">
      <h2>What is a Volume Spike?</h2>

      <p>
        <strong>Definition:</strong> A volume spike occurs when current trading volume significantly exceeds
        the historical average (typically 20-day or 50-day moving average).
      </p>

      <h3>Threshold Definitions</h3>
      <ul>
        <li><strong>Normal Volume:</strong> Current Vol = 0.8x–1.2x MA (typical daily trading)</li>
        <li><strong>Light Spike:</strong> Current Vol = 1.2x–1.5x MA (25% above average)</li>
        <li><strong>Moderate Spike:</strong> Current Vol = 1.5x–2.5x MA (50–150% above average)</li>
        <li><strong>Strong Spike:</strong> Current Vol = 2.5x–4.0x MA (150–300% above average)</li>
        <li><strong>Extreme Spike:</strong> Current Vol > 4.0x MA (300%+ above average)</li>
      </ul>

      <div class="pls-example">
        <h4>📊 PLS Volume Spike Example</h4>
        <p>
          <strong>20-day MA Volume:</strong> 2.6M shares<br>
          <strong>Current Volume (May 19):</strong> 4.13M shares<br>
          <strong>Ratio:</strong> 4.13M / 2.6M = 1.59x (59% above average)<br>
          <strong>Classification:</strong> Moderate Spike (1.5x–2.5x range)
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- WHY SPIKES MATTER -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="why-spikes-matter" class="doc-section">
      <h2>Why Volume Spikes Matter</h2>

      <h3>Volume = Institutional Activity</h3>
      <p>
        Retail traders trade in small amounts. Only institutions can move volume significantly.
        When volume spikes, institutions are active. The question is: buying or selling?
      </p>

      <h3>Volume Spike as Regime Change Signal</h3>
      <p>
        Normal days: supply ≈ demand. Volume balanced around MA.
        Spike days: supply ≠ demand. One side (buyers or sellers) dominates.
      </p>

      <ul>
        <li><strong>Spike + Price Up:</strong> Institutional buyers winning (accumulation)</li>
        <li><strong>Spike + Price Stable:</strong> Buyers and sellers balanced, testing levels</li>
        <li><strong>Spike + Price Down:</strong> Institutional sellers winning (distribution)</li>
      </ul>

      <h3>Rule of Thumb</h3>
      <p style="background: #d4edda; padding: 15px; border-radius: 6px; border-left: 5px solid #28a745;">
        <strong>✓ Moderate to Strong Spike (1.5x–2.5x MA) = institutional accumulation is starting.</strong><br>
        <strong>✗ Extreme Spike (4x+ MA) with price down = panic selling (often reverses).</strong>
      </p>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- TYPES OF SPIKES -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="types-of-spikes" class="doc-section">
      <h2>Types of Volume Spikes</h2>

      <h3>Type 1: Accumulation Spike (Bullish)</h3>
      <p>
        <strong>Pattern:</strong> Spike + Price stable or up + Bid-initiated volume<br>
        <strong>Meaning:</strong> Institutions buying quietly or openly<br>
        <strong>Action:</strong> BUY (if Balance Laws align)
      </p>

      <h3>Type 2: Distribution Spike (Bearish)</h3>
      <p>
        <strong>Pattern:</strong> Spike + Price down + Ask-initiated volume<br>
        <strong>Meaning:</strong> Institutions liquidating position<br>
        <strong>Action:</strong> SELL or AVOID
      </p>

      <h3>Type 3: Breakout Spike (Volatile)</h3>
      <p>
        <strong>Pattern:</strong> Spike + Price breaks support/resistance + Both sides active<br>
        <strong>Meaning:</strong> Consensus breaking down, new direction forming<br>
        <strong>Action:</strong> CAREFULLY TRADE (high risk/reward)
      </p>

      <h3>Type 4: Panic/Capitulation Spike (Mean Reversion)</h3>
      <p>
        <strong>Pattern:</strong> Extreme spike + Large price drop + Sellers overwhelming buyers<br>
        <strong>Meaning:</strong> Bottom forming, likely reversal coming<br>
        <strong>Action:</strong> BUY (after confirmation of reversal)
      </p>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- DETECTION METHODS -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="detection-methods" class="doc-section">
      <h2>Volume Spike Detection Methods</h2>

      <h3>Method 1: Simple MA Ratio (Easiest)</h3>
      <p>
        <strong>Calculation:</strong> Current Vol / 20-day MA<br>
        <strong>Signal:</strong> If ratio > 1.5, spike detected<br>
        <strong>Advantage:</strong> Simple, works on any chart
      </p>

      <h3>Method 2: Standard Deviation (Most Accurate)</h3>
      <p>
        <strong>Calculation:</strong> (Current Vol − MA) / Std Dev<br>
        <strong>Signal:</strong> If Z-score > 2, spike is statistically significant<br>
        <strong>Advantage:</strong> Accounts for volatility in volume itself
      </p>

      <h3>Method 3: IRIS-X Volume Law (Integrated)</h3>
      <p>
        <strong>Calculation:</strong> Balance Laws automatically detect and weigh volume spikes<br>
        <strong>Signal:</strong> Volume Law component integrated into Composite Balance<br>
        <strong>Advantage:</strong> Combines with other signals for context
      </p>

      <div class="callout callout-info">
        <strong>📌 Pro Tip:</strong> Don't trade on volume spike alone. Combine with:
        <ul>
          <li>Balance Laws (confirm institutional intent)</li>
          <li>Price action (up, down, or stable?)</li>
          <li>Bid/Ask imbalance (who initiated?)</li>
          <li>News/events (catalyst?)</li>
        </ul>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- PRACTICAL TRADING RULES -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="practical-trading" class="doc-section">
      <h2>Practical Volume Spike Trading Rules</h2>

      <h3>Rule 1: Require Confirmation</h3>
      <p>
        Never trade volume spike alone. Wait for confirmation from:
      </p>
      <ul>
        <li>Balance Laws (≥ +50 for bullish)</li>
        <li>Bid/Ask ratio (>1.2 for bullish buying)</li>
        <li>Price above VWAP (buyers controlling)</li>
      </ul>

      <h3>Rule 2: Position Sizing by Spike Type</h3>
      <ul>
        <li><strong>Accumulation Spike (+Balance, +price):</strong> 2–3% position</li>
        <li><strong>Breakout Spike (new high, heavy volume):</strong> 1–2% position (higher risk)</li>
        <li><strong>Panic Spike (down, extreme volume):</strong> Wait for reversal confirmation first</li>
      </ul>

      <h3>Rule 3: Exit Rules for Spike Trades</h3>
      <ul>
        <li><strong>If spike creates trend:</strong> Use trailing stop (let profits run)</li>
        <li><strong>If spike reverses:</strong> Exit quickly (spike failed, re-assess)</li>
        <li><strong>If next day volume normal:</strong> Monitor for continuation, take profits if formed</li>
      </ul>

      <h3>Rule 4: Avoid False Spikes</h3>
      <p>
        Some spikes are manipulation or options expiration, not institutional accumulation:
      </p>
      <ul>
        <li>Monthly/Quarterly options expiration (fake volatility)</li>
        <li>Index rebalancing (mechanical buying, may reverse)</li>
        <li>Bankruptcy/delisting news (one-time event, no recurring pattern)</li>
      </ul>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- CASE STUDIES -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="case-studies" class="doc-section pls-example-section">
      <h2>Real Case Studies</h2>

      <h3>Case 1: PLS Accumulation Spike (May 19, 2026)</h3>
      <p>
        <strong>Volume Spike:</strong> 4.13M (1.59x MA) — Moderate spike<br>
        <strong>Price Action:</strong> +2% from open, stable throughout day<br>
        <strong>Bid/Ask:</strong> 1.85x (85% more buy orders)<br>
        <strong>Balance Laws:</strong> +66 (P2/P3 phase)<br>
        <strong>Outcome:</strong> +11.9% over 5 days (successful accumulation)
      </p>

      <h3>Case 2: Typical Distribution Spike</h3>
      <p>
        <strong>Volume Spike:</strong> 3x MA — Strong spike<br>
        <strong>Price Action:</strong> −4% from open, selling pressure all day<br>
        <strong>Bid/Ask:</strong> 0.6x (60% more sell orders)<br>
        <strong>Balance Laws:</strong> −65 (P5 distribution phase)<br>
        <strong>Outcome:</strong> −15% over 7 days (sharp decline, sell signal correct)
      </p>

      <h3>Case 3: Panic Spike (Mean Reversion)</h3>
      <p>
        <strong>Volume Spike:</strong> 5x MA — Extreme spike<br>
        <strong>Price Action:</strong> −8% from open, capitulation selling<br>
        <strong>Bid/Ask:</strong> Very unbalanced (sellers in panic)<br>
        <strong>Balance Laws:</strong> −85 (P6 markdown)<br>
        <strong>Outcome:</strong> −12% day 1, +20% reversal days 2–10 (short-term bounce)
      </p>
    </section>

    <footer class="doc-footer">
      <p>
        <strong>IRIS-X™ Volume Spike Theory | v12.0</strong><br>
        © 2014–2026 RI‑Ecosys™ | All Rights Reserved
      </p>
      <button class="btn-return-dashboard" onclick="returnToMainDashboard()">
        ⬅ Return to Main Dashboard
      </button>
    </footer>

  </main>

</div>
`;
