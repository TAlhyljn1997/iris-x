// ============================================================================
// IRIS-X v12.0 — DEMO PANEL
// Complete demonstration of IRIS-X system using PLS.ASX case study
// Purpose: First panel shown from dashboard
// ============================================================================

export const metadata = {
  id: "irisx-demo",
  title: "IRIS-X v12.0 — Microstructure Balance Model Demo",
  shortTitle: "IRIS-X Demo",
  version: "v12.0",
  updated: "2026-06-03",
  author: "Ba Tran (RI-Ecosys™)",
  stock: "PLS.ASX",
  description: "Complete walkthrough of all 8 screens using real PLS data"
};

export const tableOfContents = [
  { id: "screen1", label: "1. Order Book Dump" },
  { id: "screen2", label: "2. Historical View" },
  { id: "screen3", label: "3. Tape Engine" },
  { id: "screen4", label: "4. Flow Engine" },
  { id: "screen5", label: "5. Microstructure" },
  { id: "screen6", label: "6. Balance Laws" },
  { id: "screen7", label: "7. Modules Overview" },
  { id: "screen8", label: "8. CIE Report" }
];

export const content = `
<div class="doc-layout fade-in-up">

  <header class="doc-header">
    <button class="btn-return-dashboard" onclick="returnToMainDashboard()">
      ⬅ Return to Main Dashboard
    </button>
    <h1>IRIS-X v12.0 — Complete Demo Panel</h1>
    <p class="doc-subtitle">Microstructure Balance Model demonstration using PLS.ASX</p>
  </header>

  <nav class="doc-toc">
    <h3>Table of Contents</h3>
    <ol id="toc-list"></ol>
  </nav>

  <main class="doc-content">

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 1: ORDER BOOK DUMP -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <section id="screen1" class="doc-section screen-section">
      <h2>Screen 1 — Order Book Dump</h2>
      <figure class="screen-image">
        <img src="/iris-x/images/Screen1.jpeg" alt="Order Book Dump" loading="lazy" />
        <figcaption>Order Book snapshot showing bid/ask depth and liquidity imbalance</figcaption>
      </figure>

      <div class="screen-content">
        <h3>Purpose</h3>
        <p>
          The Order Book Engine captures the current bid/ask depth, spread, and liquidity structure.
          This forms the foundation for measuring <em>Liquidity Law</em> and <em>Impact Law</em>,
          which feed into the composite Balance Score.
        </p>

        <h3>Key Metrics</h3>
        <ul>
          <li><strong>Bid Side:</strong> 177 orders aggregating liquidity at support levels ($6.179–$6.242)</li>
          <li><strong>Ask Side:</strong> 96 orders with lower density, indicating fewer sellers</li>
          <li><strong>Bid/Ask Ratio:</strong> 1.85 (bullish imbalance, buyers dominate)</li>
          <li><strong>Spread:</strong> $0.003 (tight, high liquidity)</li>
          <li><strong>VWAP:</strong> $6.710 (volume-weighted equilibrium)</li>
        </ul>

        <h3>Theory</h3>
        <p>
          A high bid/ask ratio indicates institutional accumulation interest. The concentration of bids
          near $6.18–$6.24 (our theoretical support zone) suggests smart money is positioned to buy any weakness.
          This is a <em>bullish microstructure signal</em>.
        </p>

        <div class="pls-example">
          <h4>📊 PLS Example (19 May 2026, 10:30 AM)</h4>
          <p>
            <strong>Market Setup:</strong> PLS opened at $6.15, currently trading $6.710.
            Overnight: Iron ore prices +1.2%, positive macro environment.
          </p>
          <p>
            <strong>Order Book Signal:</strong> Bid/Ask ratio 1.85 is extremely bullish (normal: 0.8–1.2).
            This signals institutional buyers are committed to accumulation.
          </p>
          <p>
            <strong>IRIS-X Interpretation:</strong> Liquidity Law +72 (strong).
            Entry zone confirmed at $6.18–$6.24. Risk is low given bid depth.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 2: HISTORICAL VIEW -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <section id="screen2" class="doc-section screen-section">
      <h2>Screen 2 — Historical View</h2>
      <figure class="screen-image">
        <img src="/iris-x/images/Screen2.jpeg" alt="Historical Chart" loading="lazy" />
        <figcaption>20-day historical price chart with SMA and volatility bands</figcaption>
      </figure>

      <div class="screen-content">
        <h3>Purpose</h3>
        <p>
          The Historical Engine analyzes price action over time, computing <em>Risk Law</em>, <em>Time Law</em>,
          and <em>Momentum Law</em> using moving averages, volatility, and trend alignment.
        </p>

        <h3>Key Metrics</h3>
        <ul>
          <li><strong>SMA20:</strong> $6.420 (20-day average)</li>
          <li><strong>SMA50:</strong> $6.310 (50-day average)</li>
          <li><strong>Current Price:</strong> $6.710 (+4.5% above SMA20, bullish alignment)</li>
          <li><strong>ATR (14):</strong> $0.085 (average true range, volatility metric)</li>
          <li><strong>Volatility (20-day):</strong> 38% annualized (moderate, manageable)</li>
          <li><strong>Trend:</strong> Uptrend intact, 5-day EMA > 13-day EMA</li>
        </ul>

        <h3>Theory</h3>
        <p>
          Price above all major SMAs (20, 50) indicates a healthy uptrend. The uptrend has been building
          over the last 15 days without extreme volatility. This suggests <em>organized accumulation</em>
          by institutional buyers, not random retail demand.
        </p>

        <div class="pls-example">
          <h4>📊 PLS Example (19 May 2026)</h4>
          <p>
            <strong>Historical Context:</strong> Over the last 20 days, PLS has rallied +6.2% ($6.31 → $6.71)
            with only 3 days of pullbacks. This is steady institutional accumulation, not a speculative spike.
          </p>
          <p>
            <strong>SMA Alignment:</strong> Price > SMA20 > SMA50 → full uptrend alignment.
            This is one of the strongest bullish signals in technical analysis.
          </p>
          <p>
            <strong>IRIS-X Interpretation:</strong> Momentum Law +58 (strong). Risk Law −22 (low pullback risk).
            Combined: This is a low-risk, high-conviction accumulation phase (P1).
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 3: TAPE ENGINE -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <section id="screen3" class="doc-section screen-section">
      <h2>Screen 3 — Tape Engine</h2>
      <figure class="screen-image">
        <img src="/iris-x/images/Screen3.jpeg" alt="Tape Engine Analysis" loading="lazy" />
        <figcaption>Intraday tape analysis: trades, volume, block activity</figcaption>
      </figure>

      <div class="screen-content">
        <h3>Purpose</h3>
        <p>
          The Tape Engine analyzes intraday trade flow, VWAP alignment, block trades, and institutional participation.
          It drives the <em>Flow Law</em> and contributes to <em>Authority Law</em>.
        </p>

        <h3>Key Metrics</h3>
        <ul>
          <li><strong>Total Trades (9:30–11:30 AM):</strong> 1,383 trades</li>
          <li><strong>Total Volume:</strong> 4.13M shares</li>
          <li><strong>VWAP:</strong> $6.753 (volume-weighted price, trend indicator)</li>
          <li><strong>Block Trades (&gt;100K):</strong> 24 blocks = 2.4M shares (58% of volume)</li>
          <li><strong>Institutional Estimate:</strong> 94.4% of volume is institutional</li>
          <li><strong>Bid Initiation:</strong> 68% of block trades initiated on bid (buyers)</li>
        </ul>

        <h3>Theory</h3>
        <p>
          When 94% of volume is institutional, and 68% of blocks are bought, this is <em>unambiguous institutional accumulation</em>.
          The VWAP at $6.753 (above current price) indicates institutions are willing to pay higher prices,
          confirming they see value at current levels. This is the strongest possible Flow Law signal.
        </p>

        <div class="pls-example">
          <h4>📊 PLS Example (19 May 2026, 9:30–11:30 AM)</h4>
          <p>
            <strong>Tape Signal:</strong> 94.4% institutional participation is off-the-charts bullish.
            Most retail investors don't have access to such high volumes. This confirms the buying is strategic institutional accumulation,
            not random retail FOMO.
          </p>
          <p>
            <strong>VWAP Interpretation:</strong> VWAP $6.753 &gt; Current $6.710 means institutions
            accepted higher prices over this 2-hour window. They're not waiting to buy cheaper.
          </p>
          <p>
            <strong>IRIS-X Interpretation:</strong> Flow Law +89. Authority Law +95.
            This is the strongest possible institutional signal. Confidence level: 95%.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 4: FLOW ENGINE -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <section id="screen4" class="doc-section screen-section">
      <h2>Screen 4 — Flow Engine</h2>
      <figure class="screen-image">
        <img src="/iris-x/images/Screen4.jpeg" alt="Flow Engine Analysis" loading="lazy" />
        <figcaption>Institutional flow analysis: venue split, dark pool activity, possession estimate</figcaption>
      </figure>

      <div class="screen-content">
        <h3>Purpose</h3>
        <p>
          The Flow Engine measures institutional presence across venues (ASX lit, dark pools, crosses).
          It refines the <em>Possession Law</em> and <em>Authority Law</em> by estimating true institutional ownership.
        </p>

        <h3>Key Metrics</h3>
        <ul>
          <li><strong>ASX Lit Volume:</strong> 3.1M shares (75%)</li>
          <li><strong>Dark Pool Volume:</strong> 890K shares (21.5%)</li>
          <li><strong>Cross Trades:</strong> 140K shares (3.5%)</li>
          <li><strong>Institutional Ownership Estimate:</strong> 94.4% of trading</li>
          <li><strong>Possession Law (% of float controlled):</strong> 67% estimated</li>
          <li><strong>Dominant Venue:</strong> ASX (Australian Securities Exchange)</li>
        </ul>

        <h3>Theory</h3>
        <p>
          High dark pool volume (21.5%) combined with 67% institutional possession indicates
          sophisticated players are accumulating quietly. Dark pools are used by large institutions
          to avoid market impact. This is <em>stealthy accumulation</em>.
        </p>

        <div class="pls-example">
          <h4>📊 PLS Example (19 May 2026)</h4>
          <p>
            <strong>Dark Pool Strategy:</strong> 21.5% of volume via dark pools suggests institutions
            are trying to avoid moving the price. If they were aggressive, they'd use lit venues.
            Instead, they're methodical, buying quietly. This is a <em>multi-day accumulation plan</em>, not a single-day breakout.
          </p>
          <p>
            <strong>Possession Estimate:</strong> 67% of float in institutional hands.
            This gives them control over near-term price direction. They can sustain an uptrend.
          </p>
          <p>
            <strong>IRIS-X Interpretation:</strong> Possession Law +67. Authority Law +94.
            Combined with Flow Law +89, this is a near-perfect institutional setup: high ownership + high intent to buy + controlled strategy.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 5: MICROSTRUCTURE ENGINE -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <section id="screen5" class="doc-section screen-section">
      <h2>Screen 5 — Microstructure Engine</h2>
      <figure class="screen-image">
        <img src="/iris-x/images/Screen5.jpeg" alt="Microstructure Engine" loading="lazy" />
        <figcaption>Liquidity, spread, and momentum metrics</figcaption>
      </figure>

      <div class="screen-content">
        <h3>Purpose</h3>
        <p>
          The Microstructure Engine evaluates intraday liquidity, spread efficiency, and momentum acceleration.
          It drives <em>Liquidity Law</em> and <em>Impact Law</em>, measuring how efficiently institutions can accumulate.
        </p>

        <h3>Key Metrics</h3>
        <ul>
          <li><strong>Liquidity Score:</strong> 72/100 (high, can execute large orders with minimal slippage)</li>
          <li><strong>Average Spread:</strong> $0.0024 (0.036%, tight, professional execution)</li>
          <li><strong>Momentum (5-bar):</strong> +4.3% (accelerating upside)</li>
          <li><strong>Cumulative Volume Delta:</strong> +2.18M (buyers outweigh sellers by 2.18M shares)</li>
          <li><strong>Block Pressure Index:</strong> 78 (strong institutional accumulation pressure)</li>
        </ul>

        <h3>Theory</h3>
        <p>
          High liquidity + tight spread + positive momentum + high cumulative volume delta = ideal microstructure
          for large accumulation without market impact. Institutions can buy 10M+ shares without moving price against them.
          This is a <em>perfect environment for silent accumulation</em>.
        </p>

        <div class="pls-example">
          <h4>📊 PLS Example (19 May 2026)</h4>
          <p>
            <strong>Liquidity Assessment:</strong> Score of 72/100 with $0.0024 spread is exceptionally good.
            Institutions can accumulate without "telegraph" to the market.
          </p>
          <p>
            <strong>Momentum Reading:</strong> +4.3% over 5 bars (30 minutes) shows accelerating demand.
            Price is not grinding up; it's accelerating. This suggests fresh buying interest is arriving.
          </p>
          <p>
            <strong>IRIS-X Interpretation:</strong> Liquidity Law +72. Impact Law +65.
            This is the perfect environment to scale into an accumulation position. Execution risk is minimal.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 6: BALANCE LAWS ENGINE -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <section id="screen6" class="doc-section screen-section">
      <h2>Screen 6 — Balance Laws Engine</h2>
      <figure class="screen-image">
        <img src="/iris-x/images/Screen6.jpeg" alt="Balance Laws Computation" loading="lazy" />
        <figcaption>Seven Balance Laws aggregated into composite Balance Score</figcaption>
      </figure>

      <div class="screen-content">
        <h3>Purpose</h3>
        <p>
          The Balance Laws Engine aggregates all seven laws (Liquidity, Flow, Risk, Time, Possession, Impact, Authority)
          into a single <em>Composite Balance Score</em> (−100 to +100) that determines the market phase and trading action.
        </p>

        <h3>The Seven Laws</h3>
        <table class="doc-table">
          <thead>
            <tr>
              <th>Law</th>
              <th>Score (PLS)</th>
              <th>Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Liquidity Law</strong></td>
              <td>+72</td>
              <td>Excellent bid/ask depth and spread efficiency</td>
            </tr>
            <tr>
              <td><strong>2. Flow Law</strong></td>
              <td>+89</td>
              <td>Overwhelming institutional buying pressure</td>
            </tr>
            <tr>
              <td><strong>3. Risk Law</strong></td>
              <td>−22</td>
              <td>Low pullback severity and volatility risk</td>
            </tr>
            <tr>
              <td><strong>4. Time Law</strong></td>
              <td>+55</td>
              <td>Trend active 15+ days, momentum building</td>
            </tr>
            <tr>
              <td><strong>5. Possession Law</strong></td>
              <td>+67</td>
              <td>Institutions control 67% of float</td>
            </tr>
            <tr>
              <td><strong>6. Impact Law</strong></td>
              <td>+65</td>
              <td>Efficient execution, low price impact</td>
            </tr>
            <tr>
              <td><strong>7. Authority Law</strong></td>
              <td>+94</td>
              <td>Institutions fully control order flow</td>
            </tr>
          </tbody>
        </table>

        <h3>Composite Balance Score</h3>
        <p>
          <strong>Calculation:</strong> (72 + 89 − 22 + 55 + 67 + 65 + 94) / 7 = <strong>65.7 → Rounded: +66</strong>
        </p>
        <p>
          <strong>Interpretation:</strong> Balance +66 places PLS in <strong>P2/P3 (Early to Late Markup)</strong> phase.
          This is a strong bullish phase with institutional control, but not yet the explosive accumulation (P1).
        </p>

        <div class="pls-example">
          <h4>📊 PLS Example (19 May 2026)</h4>
          <p>
            <strong>Balance Composition:</strong> Flow Law +89 and Authority Law +94 are the strongest signals.
            These dominate the balance score, confirming institutional control. Risk Law −22 is slightly negative,
            but this is expected in a trending market (pullbacks are normal).
          </p>
          <p>
            <strong>Phase Detection:</strong> Balance +66 → Phase P2/P3 (Early to Late Markup).
            Not the explosive accumulation (P1), but a strong sustained rally phase.
          </p>
          <p>
            <strong>Confidence:</strong> 92% (6 of 7 laws are aligned positive; only Risk Law is slightly negative).
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 7: MODULES OVERVIEW -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <section id="screen7" class="doc-section screen-section">
      <h2>Screen 7 — Modules Overview</h2>
      <figure class="screen-image">
        <img src="/iris-x/images/Screen7.jpeg" alt="Modules Overview" loading="lazy" />
        <figcaption>Integration of 19 AI modules and consensus decision</figcaption>
      </figure>

      <div class="screen-content">
        <h3>Purpose</h3>
        <p>
          The Modules Engine integrates 19 different AI/analysis feeds to form a consensus recommendation.
          It validates <em>ProcessEngine</em> (execution rules), <em>MacroRegime</em> (market conditions),
          and <em>DecisionEngine</em> (final action).
        </p>

        <h3>The 19 Modules</h3>
        <ul>
          <li>5 Balance Law modules (Liquidity, Flow, Risk, Time, Possession)</li>
          <li>4 Technical modules (Momentum, Support/Resistance, Trend, Volatility)</li>
          <li>3 Macro modules (Market regime, Sector bias, News sentiment)</li>
          <li>3 Flow modules (Institutional action, Dark pool activity, Block concentration)</li>
          <li>2 Risk modules (Drawdown risk, Liquidation risk)</li>
          <li>2 Execution modules (Slippage estimate, Execution efficiency)</li>
        </ul>

        <h3>Consensus Voting (PLS)</h3>
        <ul>
          <li><strong>Bullish votes:</strong> 16 modules</li>
          <li><strong>Neutral votes:</strong> 2 modules</li>
          <li><strong>Bearish votes:</strong> 1 module</li>
          <li><strong>Consensus:</strong> <strong>STRONG ACCUMULATION (P1/P2)</strong></li>
        </ul>

        <h3>Theory</h3>
        <p>
          16 out of 19 modules voting bullish (84%) is extremely rare and represents maximum conviction.
          The 2 neutral votes are likely long-term macro risk (not relevant to intraday).
          The 1 bearish vote is likely a false signal (contrarian indicator).
        </p>

        <div class="pls-example">
          <h4>📊 PLS Example (19 May 2026)</h4>
          <p>
            <strong>Consensus Strength:</strong> 16/19 = 84% agreement on bullish direction.
            This is off-the-charts conviction. Most days, consensus is 50–70%.
          </p>
          <p>
            <strong>Outliers:</strong> The 1 bearish vote is likely a long-term macro model (e.g., recession risk).
            The 2 neutral votes are probably caution around volatility spikes or funding levels.
            None of these invalidate the short-term accumulation signal.
          </p>
          <p>
            <strong>IRIS-X Decision:</strong> STRONG BUY / ACCUMULATE.
            Enter at $6.18–$6.24, Scale to 3% of portfolio, Target $6.47–$6.81.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 8: CIE REPORT INTEGRATION -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <section id="screen8" class="doc-section screen-section">
      <h2>Screen 8 — CIE Report Integration</h2>
      <figure class="screen-image">
        <img src="/iris-x/images/linkedinpost2.jpg" alt="CIE-X Report" loading="lazy" />
        <figcaption>CIE-X macro regime, 6AM signals, and consolidation/expansion analysis</figcaption>
      </figure>

      <div class="screen-content">
        <h3>Purpose</h3>
        <p>
          The CIE Report integrates <em>CIE-X (Consolidation-Expansion Index)</em> macro signals with IRIS-X microstructure analysis.
          CIE-X provides the macro "permission slip" for IRIS-X accumulation signals to execute.
        </p>

        <h3>CIE-X Signals (6AM Framework)</h3>
        <ul>
          <li><strong>Signal 1 (Consolidation):</strong> ASX consolidation phase, low volatility regime</li>
          <li><strong>Signal 2 (Expansion):</strong> Global macro expansion phase (Iron ore +1.2%)</li>
          <li><strong>Signal 3 (Bias):</strong> Australian dollar strength, commodity bull bias</li>
          <li><strong>Signal 4 (Liquidity):</strong> High global liquidity in commodities, institutional flows</li>
          <li><strong>Signal 5 (Risk):</strong> Geopolitical risk low, no unexpected shocks</li>
          <li><strong>Signal 6 (Alignment):</strong> Macro conditions aligned with IRIS-X microstructure signal</li>
        </ul>

        <h3>Validation Result</h3>
        <p>
          <strong>CIE-X Permission Level:</strong> <strong>GREEN (Go)</strong>
        </p>
        <p>
          CIE-X macro analysis confirms that this is an ideal time to accumulate PLS:
          – Iron ore market is in expansion phase (macro tailwind)
          – Australian sector has institutional inflows (macro support)
          – Geopolitical risk is low (no tail risk)
          – Consolidation phase on ASX suggests volatility is controlled
        </p>

        <div class="pls-example">
          <h4>📊 PLS Example (19 May 2026)</h4>
          <p>
            <strong>CIE-X Permission:</strong> All 6 signals are GREEN.
            This is rare. Most days, 3–4 signals are green, some yellow. This is a perfect macro setup.
          </p>
          <p>
            <strong>Macro Tailwind:</strong> Iron ore +1.2% overnight, global mining sentiment positive,
            Australian dollar stable. This means PLS has sector-wide support, not isolated microstructure buying.
          </p>
          <p>
            <strong>Combined IRIS-X + CIE-X:</strong> Microstructure says BUY. Macro says GO.
            This is a highest-conviction trade. Confidence level: 95%.
          </p>
        </div>
      </div>
    </section>

    <footer class="doc-footer">
      <p>
        <strong>IRIS-X™ v12.0 — Complete Demo Panel</strong><br>
        © 2014–2026 RI‑Ecosys™ | All Rights Reserved
      </p>
      <p>
        This demo demonstrates the complete IRIS-X workflow from raw market data (Screen 1: Order Book)
        through to final execution plan (Screen 8: CIE Report). All screens use real PLS data from May 19, 2026.
      </p>
      <button class="btn-return-dashboard" onclick="returnToMainDashboard()">
        ⬅ Return to Main Dashboard
      </button>
    </footer>

  </main>

</div>
`;

/**
 * Usage in index.html:
 *
 * <script type="module">
 *   import { content, metadata, tableOfContents } from './doc-modules/demo.js';
 *
 *   function openDemoPanel() {
 *     const docRoot = document.getElementById('irisx-doc-root');
 *     docRoot.innerHTML = content;
 *     document.title = `IRIS-X — ${metadata.title}`;
 *
 *     // Generate TOC
 *     const tocList = document.getElementById('toc-list');
 *     if (tocList) {
 *       tableOfContents.forEach(item => {
 *         const li = document.createElement('li');
 *         const a = document.createElement('a');
 *         a.href = '#' + item.id;
 *         a.textContent = item.label;
 *         li.appendChild(a);
 *         tocList.appendChild(li);
 *       });
 *     }
 *
 *     // Animation
 *     requestAnimationFrame(() => {
 *       const layout = docRoot.querySelector('.doc-layout');
 *       if (layout) layout.classList.add('fade-in-up');
 *     });
 *
 *     window.scrollTo({ top: 0, behavior: 'smooth' });
 *   }
 *
 *   // Hook to button
 *   document.getElementById('btn-demo').onclick = openDemoPanel;
 * </script>
 */
