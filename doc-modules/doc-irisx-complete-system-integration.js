// ============================================================================
// IRIS-X Complete System Integration Module
// Purpose: Full system architecture + integration flow + real-world workflow
// ============================================================================

export const metadata = {
  id: "irisx-system-integration",
  title: "Complete System Integration - Architecture & Workflow",
  description: "Full IRIS-X system architecture with integration flows and real-world execution",
  version: "v12.0",
  updated: "2026-06-03",
  author: "Ba Tran (RI-Ecosys™)"
};

export const tableOfContents = [
  { id: "system-overview", label: "System Overview" },
  { id: "data-flow", label: "Data Flow Pipeline" },
  { id: "five-engines", label: "Five Processing Engines" },
  { id: "phase-detection", label: "Phase Detection System" },
  { id: "decision-engine", label: "Decision Engine" },
  { id: "execution-plan", label: "Execution Plan" },
  { id: "risk-management", label: "Risk Management" },
  { id: "workflow-example", label: "Complete Workflow Example" }
];

export const content = `
<div class="doc-layout fade-in-up">

  <header class="doc-header">
    <button class="btn-return-dashboard" onclick="returnToMainDashboard()">
      ⬅ Return to Main Dashboard
    </button>
    <h1>Complete System Integration — Architecture & Workflow</h1>
    <p class="doc-subtitle">Full IRIS-X system architecture with integration flows and execution plans</p>
  </header>

  <nav class="doc-toc">
    <h3>Table of Contents</h3>
    <ol id="toc-list"></ol>
  </nav>

  <main class="doc-content">

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- SYSTEM OVERVIEW -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="system-overview" class="doc-section">
      <h2>System Overview</h2>

      <p>
        IRIS-X v12.0 is a complete microstructure analysis system combining five engines,
        seven balance laws, real-time data processing, and automated decision-making.
      </p>

      <h3>System Components</h3>
      <ul>
        <li><strong>Data Ingestion:</strong> Tape, order book, news, sentiment feeds</li>
        <li><strong>Signal Processing:</strong> 5 engines extracting microstructure signals</li>
        <li><strong>Analysis Layer:</strong> 7 balance laws measuring institutional behavior</li>
        <li><strong>Phase Detection:</strong> Mapping to P1–P6 market phases</li>
        <li><strong>Decision Engine:</strong> Generating trading decisions (BUY/HOLD/SELL)</li>
        <li><strong>Execution Layer:</strong> Position sizing, entry/exit, risk management</li>
      </ul>

      <div class="callout callout-info">
        <strong>Core Promise:</strong> Identify institutional accumulation (P1–P2) before price spikes,
        enabling low-risk, high-probability trades.
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- DATA FLOW PIPELINE -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="data-flow" class="doc-section">
      <h2>Data Flow Pipeline</h2>

      <h3>Stage 1: Data Collection</h3>
      <ul>
        <li><strong>Tape Data:</strong> Trade-by-trade execution (timestamp, price, size, initiator)</li>
        <li><strong>Order Book:</strong> Bid/ask levels, depth, spread (real-time L2)</li>
        <li><strong>OHLCV Bars:</strong> 1-min, 5-min candles (price + volume aggregates)</li>
        <li><strong>News/Events:</strong> Announcements, analyst ratings, economic data</li>
        <li><strong>Sentiment:</strong> Social media, short interest, VIX</li>
      </ul>

      <h3>Stage 2: Signal Extraction (5 Engines)</h3>
      <p>
        Raw data → Microstructure signals via five processing engines:
      </p>
      <ol>
        <li><strong>Order Book Engine:</strong> Bid/ask depth, spread, liquidity imbalance</li>
        <li><strong>Tape Engine:</strong> Block trades, flow direction, institutional participation</li>
        <li><strong>Microstructure Engine:</strong> Liquidity score, impact, momentum acceleration</li>
        <li><strong>Balance Laws Engine:</strong> 7 laws calculated independently</li>
        <li><strong>Phase Engine:</strong> Phase mapping (P1–P6)</li>
      </ol>

      <h3>Stage 3: Analysis & Aggregation</h3>
      <p>
        Signals → Composite analysis:
      </p>
      <ul>
        <li>Weighting each law by importance</li>
        <li>Computing composite balance score</li>
        <li>Detecting phase + confidence level</li>
        <li>Generating trading recommendation</li>
      </ul>

      <h3>Stage 4: Decision & Execution</h3>
      <p>
        Recommendation → Action:
      </p>
      <ul>
        <li>Position sizing (based on balance score + confidence)</li>
        <li>Entry zone (support levels from order book)</li>
        <li>Target prices (resistance levels + expected move)</li>
        <li>Stop loss (technical breakdown level)</li>
      </ul>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- FIVE ENGINES -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="five-engines" class="doc-section">
      <h2>Five Processing Engines — Detailed</h2>

      <h3>Engine 1: Order Book Engine</h3>
      <p>
        <strong>Input:</strong> Bid/ask orders at each price level<br>
        <strong>Process:</strong> Calculate depth imbalance, spread, liquidity concentration<br>
        <strong>Output:</strong> Liquidity Law score, support/resistance levels
      </p>

      <h3>Engine 2: Tape Engine</h3>
      <p>
        <strong>Input:</strong> Individual trade records (price, size, initiator)<br>
        <strong>Process:</strong> Classify trades as block/retail, bid/ask initiated, calculate VWAP<br>
        <strong>Output:</strong> Flow Law score, institutional participation estimate
      </p>

      <h3>Engine 3: Microstructure Engine</h3>
      <p>
        <strong>Input:</strong> Aggregate liquidity + price impact metrics<br>
        <strong>Process:</strong> Model how large orders move the market, measure execution quality<br>
        <strong>Output:</strong> Impact Law score, efficiency rating
      </p>

      <h3>Engine 4: Balance Laws Engine</h3>
      <p>
        <strong>Input:</strong> Output from engines 1–3 + technical data<br>
        <strong>Process:</strong> Compute all 7 balance laws, weight and aggregate<br>
        <strong>Output:</strong> Composite balance score (−100 to +100)
      </p>

      <h3>Engine 5: Phase Detection Engine</h3>
      <p>
        <strong>Input:</strong> Composite balance score<br>
        <strong>Process:</strong> Map balance to phase (P1–P6), calculate confidence<br>
        <strong>Output:</strong> Phase classification, confidence %, recommended action
      </p>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- PHASE DETECTION SYSTEM -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="phase-detection" class="doc-section">
      <h2>Phase Detection System</h2>

      <h3>Phase Detection Algorithm</h3>
      <p>
        Balance Score → Phase Mapping:
      </p>
      <table class="doc-table">
        <thead>
          <tr>
            <th>Balance Range</th>
            <th>Phase</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>≥ +70</td>
            <td>P1</td>
            <td>Institutional buying, low price, high commitment</td>
            <td>BUY (accumulate)</td>
          </tr>
          <tr>
            <td>+60–69</td>
            <td>P2</td>
            <td>Price starting to rise, institutions still buying</td>
            <td>BUY (add on dips)</td>
          </tr>
          <tr>
            <td>+40–59</td>
            <td>P3</td>
            <td>Strong rally, first sellers, profit-taking</td>
            <td>HOLD (trim on strength)</td>
          </tr>
          <tr>
            <td>+20–39</td>
            <td>P4</td>
            <td>Plateau, indecision, range-bound</td>
            <td>HOLD / AVOID</td>
          </tr>
          <tr>
            <td>−69 to +19</td>
            <td>P5</td>
            <td>Distribution, institutions selling, price rolling</td>
            <td>SELL (exit long)</td>
          </tr>
          <tr>
            <td>≤ −70</td>
            <td>P6</td>
            <td>Panic selling, capitulation, potential bounce</td>
            <td>WAIT / SHORT</td>
          </tr>
        </tbody>
      </table>

      <h3>Confidence Calculation</h3>
      <p>
        Confidence = % of laws aligned with phase signal
      </p>
      <ul>
        <li><strong>92%+ confidence:</strong> 6–7 laws aligned (very high conviction)</li>
        <li><strong>70–91% confidence:</strong> 5 laws aligned (high conviction)</li>
        <li><strong>50–69% confidence:</strong> 3–4 laws aligned (moderate, mixed signals)</li>
        <li><strong><50% confidence:</strong> Fewer than 3 laws aligned (avoid trading)</li>
      </ul>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- DECISION ENGINE -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="decision-engine" class="doc-section">
      <h2>Decision Engine</h2>

      <h3>Decision Logic</h3>
      <pre style="background: #f0f4ff; padding: 15px; border-radius: 6px; overflow-x: auto;">
if Balance ≥ +70 AND Confidence ≥ 80%:
  DECISION = BUY (P1 Accumulation)
  CONVICTION = Very High

elif Balance +60 to +69 AND Confidence ≥ 70%:
  DECISION = BUY (P2 Early Markup)
  CONVICTION = High

elif Balance +40 to +59 AND Confidence ≥ 60%:
  DECISION = HOLD (P3 Late Markup)
  CONVICTION = Moderate

elif Balance +20 to +39:
  DECISION = HOLD / AVOID
  CONVICTION = Low

elif Balance -69 to +19:
  DECISION = SELL (P5 Distribution)
  CONVICTION = Moderate to High

elif Balance ≤ -70:
  DECISION = WAIT / SHORT (P6 Markdown)
  CONVICTION = High to Very High
      </pre>

      <h3>Edge Cases & Overrides</h3>
      <ul>
        <li><strong>If macro regime RED (CIE-X):</strong> Override to SELL/AVOID even if Balance bullish</li>
        <li><strong>If news catalyst (bankruptcy, scandal):</strong> Exit immediately regardless of balance</li>
        <li><strong>If technical breakdown (key support breaks):</strong> Exit even if balance still positive</li>
      </ul>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- EXECUTION PLAN -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="execution-plan" class="doc-section">
      <h2>Execution Plan</h2>

      <h3>Position Sizing Rules</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>Decision</th>
            <th>Confidence</th>
            <th>Position Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BUY (P1)</td>
            <td>≥ 90%</td>
            <td>2–3% of portfolio</td>
          </tr>
          <tr>
            <td>BUY (P2)</td>
            <td>70–89%</td>
            <td>1.5–2% of portfolio</td>
          </tr>
          <tr>
            <td>HOLD (P3)</td>
            <td>60–70%</td>
            <td>Hold existing, no new entry</td>
          </tr>
          <tr>
            <td>SELL (P5)</td>
            <td>70–90%</td>
            <td>Exit 50–100% of position</td>
          </tr>
          <tr>
            <td>WAIT/SHORT (P6)</td>
            <td>≥ 80%</td>
            <td>0.5–2% short (if shorting)</td>
          </tr>
        </tbody>
      </table>

      <h3>Entry & Exit Rules</h3>
      <p>
        <strong>Entry:</strong> Use limit orders at support levels identified by Order Book Engine<br>
        <strong>Scale-In:</strong> Divide position into 3 equal tranches, enter over 2–3 bars<br>
        <strong>Exit:</strong> 1/3 at Target 1 (+3–5%), 1/3 at Target 2 (+7–10%), 1/3 trailing<br>
        <strong>Stop Loss:</strong> Place immediately at technical support (−2–3% from entry)
      </p>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- RISK MANAGEMENT -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="risk-management" class="doc-section">
      <h2>Risk Management</h2>

      <h3>Core Rules</h3>
      <ul>
        <li><strong>Max Risk Per Trade:</strong> 1% of portfolio</li>
        <li><strong>Max Daily Loss:</strong> 2% (stop trading if hit)</li>
        <li><strong>Max Sector Exposure:</strong> 10% total</li>
        <li><strong>Position Limit:</strong> Never more than 5 open positions</li>
      </ul>

      <h3>Dynamic Stop Loss Management</h3>
      <ul>
        <li><strong>Initial Stop:</strong> Place at technical support (−2–3%)</li>
        <li><strong>After +1.5% gain:</strong> Move stop to breakeven (protect principal)</li>
        <li><strong>After +5% gain:</strong> Move stop to +2% (lock profits)</li>
        <li><strong>Trailing Stop:</strong> Let winners run with 3–5% trailing stop</li>
      </ul>

      <h3>Phase Reversal Risk</h3>
      <p>
        <strong>Emergency Exit:</strong> If Balance drops below 0 (phase reversal), exit immediately.
        Institutional support is gone.
      </p>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!-- WORKFLOW EXAMPLE -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="workflow-example" class="doc-section pls-example-section">
      <h2>Complete Workflow Example: PLS (May 19, 2026)</h2>

      <h3>Step 1: Data Arrival (9:30 AM Open)</h3>
      <p>
        Market opens. Systems ingest: tape data, order book, 1-min candle, news (iron ore +1.2%).
      </p>

      <h3>Step 2: Engine Processing (9:31 AM)</h3>
      <ul>
        <li><strong>Order Book Engine:</strong> Bid/ask ratio 1.85 → Liquidity Law +72</li>
        <li><strong>Tape Engine:</strong> 94% institutional, 68% bought → Flow Law +89, Block Law +76</li>
        <li><strong>Microstructure Engine:</strong> Liquidity 72, impact low → Liquidity Law confirmed</li>
        <li><strong>Balance Laws Engine:</strong> Calculates Flow +89, Block +76, Volume +58, Price +42, Risk −18, Possession +67, Sentiment +24</li>
        <li><strong>Phase Engine:</strong> Composite = +62 → P2 (Early Markup), Confidence 92%</li>
      </ul>

      <h3>Step 3: Decision (9:32 AM)</h3>
      <p>
        <strong>Decision Engine Output:</strong>
      </p>
      <ul>
        <li><strong>Action:</strong> BUY (P2 phase)</li>
        <li><strong>Conviction:</strong> Very High (92% confidence)</li>
        <li><strong>Position Size:</strong> 2% of portfolio</li>
        <li><strong>Entry Zone:</strong> $6.18–$6.24 (support from order book)</li>
        <li><strong>Targets:</strong> $6.47 (short), $6.81 (medium), $7.20 (upside)</li>
        <li><strong>Stop:</strong> $6.02 (−2.6%)</li>
      </ul>

      <h3>Step 4: Execution (9:45–11:30 AM)</h3>
      <p>
        Trader places limit orders:
      </p>
      <ul>
        <li>10:45 AM: Buy 1/3 at $6.21</li>
        <li>11:15 AM: Buy 1/3 at $6.19</li>
        <li>11:30 AM: Buy 1/3 at $6.22</li>
        <li><strong>Average Entry:</strong> $6.207</li>
      </ul>

      <h3>Step 5: Monitoring (Ongoing)</h3>
      <p>
        Daily updates:
      </p>
      <ul>
        <li><strong>May 22:</strong> Price $6.38, Balance still +55 (P3 now). Move stop to $6.18.</li>
        <li><strong>May 23:</strong> Price $6.47, Balance +42. Sell 1/3 at target (+3.9%).</li>
        <li><strong>May 24:</strong> Price $6.73, Balance +38 (P3 late). Hold remaining 2/3.</li>
        <li><strong>May 27:</strong> Price $6.95, Balance +10 (P4 plateau). Exit trailing stop.</li>
      </ul>

      <h3>Final Outcome</h3>
      <p>
        <strong>Entry:</strong> $6.207 (average)<br>
        <strong>Exit:</strong> $6.95 (average across 3 sales)<br>
        <strong>Profit:</strong> +$0.74 per share = +11.9%<br>
        <strong>On 2% portfolio allocation:</strong> +0.24% net portfolio gain
      </p>

      <div class="callout callout-success">
        <strong>✓ Success Metrics:</strong>
        <ul>
          <li>Entered early (P2 phase before explosive rally)</li>
          <li>Took profits systematically (1/3 at each target)</li>
          <li>Managed risk (2% position, clear stop loss)</li>
          <li>Consistent, repeatable process (not luck)</li>
        </ul>
      </div>
    </section>

    <footer class="doc-footer">
      <p>
        <strong>IRIS-X™ Complete System Integration | v12.0</strong><br>
        © 2014–2026 RI‑Ecosys™ | All Rights Reserved
      </p>
      <button class="btn-return-dashboard" onclick="returnToMainDashboard()">
        ⬅ Return to Main Dashboard
      </button>
    </footer>

  </main>

</div>
`;
