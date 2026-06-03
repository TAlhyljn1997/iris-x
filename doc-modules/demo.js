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
<style>
  .accordion-item { all: revert; }
  .accordion-content h2 { font-size: 1.35rem; font-weight: 700; margin: 28px 0 18px; color: #0066cc; letter-spacing: -0.5px; }
  .accordion-content h3 { font-size: 1.12rem; font-weight: 650; margin: 22px 0 14px; color: #1a1a1a; letter-spacing: -0.3px; }
  .accordion-content h4 { font-size: 1rem; font-weight: 650; margin: 16px 0 10px; color: #1a1a1a; }
  .accordion-content p { font-size: 0.99rem; line-height: 1.72; margin: 0 0 16px; color: #333; }
  .accordion-content strong { font-weight: 700; color: #0066cc; }
  .accordion-content em { font-style: italic; color: #666; }
  .accordion-content li { margin: 8px 0; }
  .accordion-content code { background: #f0f4f8; padding: 2px 6px; border-radius: 3px; font-family: 'Courier New', monospace; font-size: 0.92rem; }
  .accordion-content table { margin: 20px 0; border-collapse: collapse; width: 100%; }
  .accordion-content th, .accordion-content td { padding: 14px 18px; text-align: left; border: 1px solid #e0e4e8; }
  .accordion-content th { background: linear-gradient(135deg, #e8ecf1 0%, #dfe4eb 100%); font-weight: 700; }
</style>
<div class="doc-layout fade-in-up">

  <header class="doc-header" style="padding: 20px 0;">
    <h1 style="font-size: 2.5rem; font-weight: 700; margin: 0 0 12px; letter-spacing: -0.8px;">IRIS-X v12.0 — Complete Demo Panel</h1>
    <p class="doc-subtitle" style="font-size: 1.15rem; margin: 0 0 20px; font-weight: 500; color: #555;">Microstructure Balance Model | Click triangles to expand/collapse screens</p>
    <button class="btn-return-dashboard" onclick="returnToMainDashboard()" style="margin-top: 0; padding: 12px 20px; font-size: 0.95rem;">
      ⬅ Return to Main Dashboard
    </button>
  </header>


  <main class="doc-content">

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 1: ORDER BOOK DUMP -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <details id="screen1" class="accordion-item" open>
      <summary class="accordion-header" style="display: flex; align-items: center; gap: 16px; padding: 22px 28px; background: linear-gradient(135deg, #f5f8fc 0%, #eef2f7 100%); cursor: pointer; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e0e4e8; list-style: none;">
        <span class="accordion-triangle" style="font-size: 1.2rem; min-width: 24px; display: flex; align-items: center; color: #0066cc; font-weight: 700;">▼</span>
        <h2 style="display:inline; margin: 0; font-size: 1.3rem; font-weight: 650; color: #1a1a1a; letter-spacing: -0.4px;">Screen 1 — Order Book Dump</h2>
      </summary>
      <div class="accordion-content" style="padding: 40px 28px; background: #ffffff;">
      <figure class="screen-image" style="margin: 0 0 32px 0;">
        <img src="https://ai-balance.org/iris-x/images/Screen1.jpeg" alt="Order Book Dump" loading="lazy" />
        <figcaption>Order Book snapshot showing bid/ask depth and liquidity imbalance</figcaption>
      </figure>

      <div class="screen-content">
        <h3>🎯 Purpose</h3>
        <p>
          The Order Book Engine captures the current bid/ask depth, spread, and liquidity structure.
          This forms the foundation for measuring <em>Liquidity Law</em> and <em>Impact Law</em>,
          which feed into the composite Balance Score. By analyzing the static snapshot of pending orders,
          we can infer institutional positioning, support/resistance zones, and hidden liquidity.
        </p>

        <h3>📚 Detailed Theory</h3>
        <p>
          <strong>Market Microstructure Basics:</strong> The order book is a real-time list of all pending buy (bid)
          and sell (ask) orders at different price levels. Unlike price charts (which show past trades), the order book
          shows <em>intended</em> supply and demand. Institutions use large orders to signal intent and influence price.
          A high bid/ask ratio (bids > asks) indicates buyers are more aggressive than sellers, suggesting accumulation.
        </p>
        <p>
          <strong>Liquidity & Execution Impact:</strong> Deep order books (many orders at multiple levels) allow large
          trades without moving price significantly. Shallow order books (few orders) mean any large trade will move
          price against the trader. This is called <em>price impact</em>. Institutions prefer deep books for stealth accumulation.
        </p>
        <p>
          <strong>Reading Order Book Walls:</strong> A "wall" is a large cluster of orders at one price level. Walls can be:
          (1) <strong>Real walls</strong> — genuine institutional positions that will absorb volume;
          (2) <strong>Fake walls</strong> — placed to scare traders but quickly cancelled. IRIS-X identifies real walls
          using order book permanence analysis (how long orders stay unfilled).
        </p>

        <h3>📊 Key Metrics Explained</h3>
        <ul>
          <li>
            <strong>Bid Side (177 orders, $6.179–$6.242):</strong> Buy orders clustered at support.
            When buyers place orders in this range, they're signaling: "We'll pay up to $6.242 to accumulate."
            The concentration near support suggests this is a pre-planned accumulation zone.
          </li>
          <li>
            <strong>Ask Side (96 orders):</strong> Fewer sell orders = sellers are not aggressive.
            This creates an imbalance: buyers want in, sellers don't want to sell. Result: price pressure upward.
          </li>
          <li>
            <strong>Bid/Ask Ratio (1.85):</strong> 1.85 means 85% more buy-side depth than sell-side.
            Normal is 0.8–1.2. This is extremely bullish. Formula: <code>Bid/Ask Ratio = Total Bid Volume / Total Ask Volume</code>
          </li>
          <li>
            <strong>Spread ($0.003 = 0.045%):</strong> Gap between best bid ($6.179) and best ask ($6.242).
            Tight spreads = liquid, professional market. Wide spreads = illiquid or volatile.
            Formula: <code>Spread = Best Ask − Best Bid</code>
          </li>
          <li>
            <strong>VWAP ($6.710):</strong> Volume-weighted average price of recent trades.
            If current price ($6.710) = VWAP, the market is at equilibrium. If price > VWAP, buyers are controlling.
            Formula: <code>VWAP = Σ(Price × Volume) / Σ(Volume)</code>
          </li>
        </ul>

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
      </div>
    </details>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 2: HISTORICAL VIEW -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <details id="screen2" class="accordion-item">
      <summary class="accordion-header" style="display: flex; align-items: center; gap: 16px; padding: 22px 28px; background: linear-gradient(135deg, #f5f8fc 0%, #eef2f7 100%); cursor: pointer; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e0e4e8; list-style: none;">
        <span class="accordion-triangle" style="font-size: 1.2rem; min-width: 24px; display: flex; align-items: center; color: #0066cc; font-weight: 700;">▶</span>
        <h2 style="display:inline; margin: 0; font-size: 1.3rem; font-weight: 650; color: #1a1a1a; letter-spacing: -0.4px;">Screen 2 — Historical View</h2>
      </summary>
      <div class="accordion-content" style="padding: 40px 28px; background: #ffffff;">
      <figure class="screen-image" style="margin: 0 0 32px 0;">
        <img src="https://ai-balance.org/iris-x/images/Screen2.jpeg" alt="Historical Chart" loading="lazy" />
        <figcaption>20-day historical price chart with SMA and volatility bands</figcaption>
      </figure>

      <div class="screen-content">
        <h3>🎯 Purpose</h3>
        <p>
          The Historical Engine analyzes price action over time, computing <em>Risk Law</em>, <em>Time Law</em>,
          and <em>Momentum Law</em> using moving averages, volatility, and trend alignment. This provides
          context: is the current signal a new trend or a false breakout? Is volatility manageable or dangerous?
        </p>

        <h3>📚 Detailed Theory</h3>
        <p>
          <strong>Trend Following 101:</strong> Moving averages (SMAs, EMAs) smooth out noise to reveal true direction.
          When price is above its moving average, the trend is up. When below, the trend is down.
          The hierarchy <code>Price > SMA20 > SMA50</code> is the "golden uptrend alignment" — one of the strongest
          technical signals. It means short-term momentum AND long-term support are aligned. Institutions respect this.
        </p>
        <p>
          <strong>Risk Law in Action:</strong> Risk Law measures <em>pullback severity</em> — how likely is a sharp drawdown?
          High volatility (>40% annualized) = risky environment. Low volatility (<25%) = stable, accumulation-friendly.
          A stock with low volatility + uptrend = "sleeping giant" ready to explode with institutional buying.
          This is why IRIS-X flags Risk Law as negative (low risk) when volatility is moderate and declining.
        </p>
        <p>
          <strong>Time Law & Conviction:</strong> Time Law measures <em>trend persistence</em>. A 1-day spike is unreliable.
          A 15-day trend is conviction. When an uptrend has been building steadily for 15+ days with only 3 pullback days,
          that's not speculation — that's organized accumulation. Each day institutions hold their positions and buy more,
          they increase their conviction. Price doesn't spike; it climbs methodically.
        </p>

        <h3>📊 Key Metrics Explained</h3>
        <ul>
          <li>
            <strong>SMA20 ($6.420):</strong> 20-day simple average. Responsive to recent price action.
            When price > SMA20, short-term momentum is up. Formula: <code>SMA20 = Σ(Close[0..19]) / 20</code>
          </li>
          <li>
            <strong>SMA50 ($6.310):</strong> 50-day simple average. Slower to respond, shows long-term direction.
            When SMA20 > SMA50, a "bullish crossover" has occurred — the trend is accelerating.
          </li>
          <li>
            <strong>Current Price ($6.710, +4.5% above SMA20):</strong> Price is 4.5% above its 20-day average.
            This distance matters: +1–5% = healthy uptrend; +10%+ = extended, vulnerable to pullback.
            Current 4.5% is ideal — room to run without overextension.
          </li>
          <li>
            <strong>ATR14 ($0.085):</strong> Average True Range measures volatility independent of direction.
            ATR = average of (High−Low) over 14 days. Higher ATR = more volatile. Use ATR to set stop-loss distances.
            Formula: <code>Stop = Entry − (2 × ATR)</code>
          </li>
          <li>
            <strong>Volatility (38% annualized):</strong> 38% annual volatility means daily moves average ±2.5%.
            This is moderate — not calm (which would be <20%), not chaotic (which would be >50%).
            Institutions prefer moderate volatility: enough profit potential without catastrophic risk.
            Formula: <code>Vol_annual = StdDev(daily_returns) × √252</code>
          </li>
          <li>
            <strong>Trend (5-EMA > 13-EMA):</strong> 5-day exponential moving average > 13-day EMA.
            EMAs weight recent prices more than SMAs. This crossover is a momentum confirmation.
            "Price accelerating higher" = institutions are accumulating faster.
          </li>
        </ul>

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
    </div>
    </details>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 3: TAPE ENGINE -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <details id="screen3" class="accordion-item">
      <summary class="accordion-header">
        <span class="accordion-triangle">▶</span>
        <h2 style="display:inline; margin: 0;">Screen 3 — Tape Engine</h2>
      </summary>
      <div class="accordion-content" style="padding: 40px 28px; background: #ffffff;">
      <figure class="screen-image" style="margin: 0 0 32px 0;">
        <img src="https://ai-balance.org/iris-x/images/Screen3.jpeg" alt="Tape Engine Analysis" loading="lazy" />
        <figcaption>Intraday tape analysis: trades, volume, block activity</figcaption>
      </figure>

      <div class="screen-content">
        <h3>🎯 Purpose</h3>
        <p>
          The Tape Engine analyzes intraday trade flow, VWAP alignment, block trades, and institutional participation.
          It drives the <em>Flow Law</em> (who is buying/selling?) and contributes to <em>Authority Law</em> (who controls the market?).
          Tape reading is the most real-time signal available — it shows what's happening THIS SECOND.
        </p>

        <h3>📚 Detailed Theory</h3>
        <p>
          <strong>What is "The Tape"?:</strong> The tape is the real-time stream of executed trades. Each trade has:
          price, quantity, timestamp, and initiator (bid or ask). Retail traders can see the last trade; institutions
          see the entire flow via terminals. By analyzing patterns in the tape (volume clusters, large blocks, bid/ask imbalance),
          we can infer who is trading and why. Is someone quietly accumulating (many small orders)? Or aggressively buying
          (large blocks crossing the spread)?
        </p>
        <p>
          <strong>Block Trades as Fingerprints:</strong> Blocks (trades ≥100K shares) are almost always institutional.
          Retail can't execute 100K share orders — that's $600K+. When 58% of volume comes from blocks, that's
          institutional dominance. And when 68% of those blocks are bought (not sold), institutions are accumulating.
          This is not selling pressure — it's buying conviction displayed in real-time.
        </p>
        <p>
          <strong>VWAP as Fair Value:</strong> VWAP ($6.753) is the average price institutions paid over the trading period.
          If current price ($6.710) < VWAP, institutions paid MORE than current price — they're underwater and will hold.
          If current price > VWAP, institutions paid LESS — they're in profit and confident. At current price = VWAP,
          institutions are neutral. This particular trade shows VWAP > price, meaning institutions paid slightly more
          on average, likely accumulating on any pullback.
        </p>

        <h3>📊 Key Metrics Explained</h3>
        <ul>
          <li>
            <strong>Total Trades (1,383 in 2 hours):</strong> 691 trades/hour = 11.5 per minute average.
            High trade count = liquid market with many participants. Low count = illiquid, wide spreads.
            1,383 trades is normal for a liquid stock like PLS.
          </li>
          <li>
            <strong>Total Volume (4.13M shares):</strong> Actual shares traded in the 2-hour window.
            Compare to 20-day average (2.6M). This is 1.59× average — a moderate spike indicating above-normal interest.
          </li>
          <li>
            <strong>VWAP ($6.753):</strong> Formula: <code>VWAP = Σ(Price × Volume) / Σ(Volume)</code>.
            VWAP > Current price means institutional average cost > current cost — they're patient accumulators.
            VWAP < Current price means they're in profit and will hold through volatility.
          </li>
          <li>
            <strong>Block Trades (24 blocks, 2.4M shares, 58% of volume):</strong> Each block is ≥100K shares.
            24 blocks × avg 100K = 2.4M institutional volume. The remaining 1.73M is retail/small order flow.
            58% institutional is very high. Normal is 30–50%. This shows institutional dominance.
          </li>
          <li>
            <strong>Institutional Estimate (94.4%):</strong> Beyond just blocks, IRIS-X counts orders ≥5K as likely institutional.
            This broader definition shows 94.4% of all volume came from institutions. Only 5.6% retail.
            When institutions outnumber retail 17:1, the trend belongs to them, not retail.
          </li>
          <li>
            <strong>Bid Initiation (68% of blocks):</strong> "Bid-initiated" means the buyer was impatient (crossed the spread).
            68% of blocks bought = 32% sold. Net buying pressure 2:1. Formula: <code>Bid Init % = Bid-initiated blocks / Total blocks</code>.
            68% is strong accumulation signal.
          </li>
        </ul>

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
    </div>
    </details>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 4: FLOW ENGINE -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <details id="screen4" class="accordion-item">
      <summary class="accordion-header">
        <span class="accordion-triangle">▶</span>
        <h2 style="display:inline; margin: 0;">Screen 4 — Flow Engine</h2>
      </summary>
      <div class="accordion-content" style="padding: 40px 28px; background: #ffffff;">
      <figure class="screen-image" style="margin: 0 0 32px 0;">
        <img src="https://ai-balance.org/iris-x/images/Screen4.jpeg" alt="Flow Engine Analysis" loading="lazy" />
        <figcaption>Institutional flow analysis: venue split, dark pool activity, possession estimate</figcaption>
      </figure>

      <div class="screen-content">
        <h3>🎯 Purpose</h3>
        <p>
          The Flow Engine measures institutional presence across venues (ASX lit, dark pools, crosses).
          It refines the <em>Possession Law</em> (what % of stock do institutions own?) and <em>Authority Law</em>
          (which venue sets prices?) by analyzing where volume flows and what it reveals about strategy.
        </p>

        <h3>📚 Detailed Theory</h3>
        <p>
          <strong>Lit vs Dark Pools:</strong> ASX lit market is transparent — all trades visible to everyone.
          Dark pools are private networks where trades happen off-exchange, hidden from the public tape.
          Institutions use dark pools to hide large positions and avoid "front-running" (retail traders copying their moves).
          When dark pool % is HIGH (>20%), it suggests institutions are accumulating quietly.
          When dark pool % is LOW (<5%), institutions are trading openly, signaling confidence.
          PLS dark pool is 21.5% — moderate stealth accumulation.
        </p>
        <p>
          <strong>Possession Law Explained:</strong> This measures what % of the stock float institutions likely control.
          How is it calculated? By analyzing 30-day order flow: if 94.4% of volume is institutional, and institutions
          hold 1–2% of shares daily, then over time they accumulate. A rough estimate: if 94% of trading is institutional
          over 30 days, they control ~67% of shares. This gives them price-setting power for 2–5 years (until they exit).
        </p>
        <p>
          <strong>Venue Dominance & Authority Law:</strong> Authority Law measures which venue sets the price.
          ASX 95.1% means ASX is the price leader. When ASX dominates, that's where real supply/demand meets.
          Dark pools just execute what ASX priced. If dark pools dominated, institutions would be price-makers,
          not price-takers. Current setup (ASX dominant) = fair market, institutions respect ASX pricing.
        </p>

        <h3>📊 Key Metrics Explained</h3>
        <ul>
          <li>
            <strong>ASX Lit Volume (3.1M shares, 75%):</strong> Trades on the Australian Securities Exchange public tape.
            Visible to all traders. Default venue for retail and many institutions.
            75% on lit = majority transparency. This is healthy market structure.
          </li>
          <li>
            <strong>Dark Pool Volume (890K shares, 21.5%):</strong> Trades on private networks (Chi-X, Instinet, etc).
            Hidden until after execution. Used to hide large positions. 21.5% is elevated for PLS.
            Interpretation: institutions are quietly accumulating without revealing size to retail.
            Formula: <code>Dark % = Dark Vol / Total Vol</code>
          </li>
          <li>
            <strong>Cross Trades (140K shares, 3.5%):</strong> Trades between two parties' internal orders.
            No market impact. Used when both buyer and seller are known (e.g., institutional fund transfers).
            3.5% is typical. High cross % = pre-arranged blocks.
          </li>
          <li>
            <strong>Institutional Ownership Estimate (94.4% trading):</strong> Percentage of volume from institutions.
            94.4% is extreme — retail has almost no presence. This means the trend is entirely institutional-driven.
            Implication: when institutions leave, the stock crashes (no retail support underneath).
          </li>
          <li>
            <strong>Possession Law (67% float controlled):</strong> Estimated % of shares institutionally held.
            67% is high — institutions can easily sustain a 2–3 year bull market at this ownership level.
            If it drops below 40%, institution conviction is weak. Above 75%, they have full control.
            Current 67% = strong but not absolute control.
          </li>
          <li>
            <strong>Dominant Venue (ASX 95.1%):</strong> Percentage of volume on each venue.
            ASX 95.1% = price leader. Chi-X 4.9% = follower. When one venue dominates >90%, it's "the" market.
            Formula: <code>Venue % = Venue Vol / Total Vol</code>
          </li>
        </ul>

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
    </div>
    </details>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 5: MICROSTRUCTURE ENGINE -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <details id="screen5" class="accordion-item">
      <summary class="accordion-header">
        <span class="accordion-triangle">▶</span>
        <h2 style="display:inline; margin: 0;">Screen 5 — Microstructure Engine</h2>
      </summary>
      <div class="accordion-content" style="padding: 40px 28px; background: #ffffff;">
      <figure class="screen-image" style="margin: 0 0 32px 0;">
        <img src="https://ai-balance.org/iris-x/images/Screen5.jpeg" alt="Microstructure Engine" loading="lazy" />
        <figcaption>Liquidity, spread, and momentum metrics</figcaption>
      </figure>

      <div class="screen-content">
        <h3>🎯 Purpose</h3>
        <p>
          The Microstructure Engine evaluates intraday liquidity, spread efficiency, and momentum acceleration.
          It drives <em>Liquidity Law</em> (can we execute large orders without impact?) and <em>Impact Law</em>
          (how much will price move when institutions buy/sell?), measuring how efficiently they can accumulate.
        </p>

        <h3>📚 Detailed Theory</h3>
        <p>
          <strong>Liquidity Scoring:</strong> Liquidity (ability to buy/sell without moving price) is THE limiting factor
          for large trades. A stock with 100M daily volume and tight spreads is liquid. A stock with 100K daily volume
          and 5% spreads is illiquid. Liquidity Score combines: (1) Bid/ask spread width, (2) Order book depth,
          (3) Block trade frequency, (4) Volatility. Score 70+ = professional execution possible.
        </p>
        <p>
          <strong>Spread Dynamics:</strong> Spread = Best Ask − Best Bid. Tight spreads (0.01–0.05%) = liquid, efficient.
          Wide spreads (1%+) = illiquid, retail gets "taxed" by the spread cost. PLS spread 0.0024 is tiny — this is
          a professional stock. Institutions can buy 100K shares and move price only 0.05% (which they do on purpose
          to accumulate more at slightly higher prices without breaking conviction).
        </p>
        <p>
          <strong>Cumulative Volume Delta (CVD):</strong> This measures net buying pressure. Each tick, if the trade
          was on a buy order (+) add volume; if on a sell order (−) subtract. Positive CVD = net buying. Negative CVD = net selling.
          +2.18M CVD means buyers outweighed sellers by 2.18M shares over the period. This is THE signal that accumulation is happening.
          IRIS-X flags strongly positive CVD combined with positive momentum as highest conviction.
        </p>

        <h3>📊 Key Metrics Explained</h3>
        <ul>
          <li>
            <strong>Liquidity Score (72/100):</strong> Composite metric combining spread, depth, trade frequency, volatility.
            Formula involves proprietary weighting, but conceptually: <code>Liquidity = (Depth + 100/Spread + TradeDensity) / 3</code>.
            Score 72 = high quality. Above 80 = excellent (Tesla, Apple-level). Below 50 = retail stock.
          </li>
          <li>
            <strong>Average Spread ($0.0024 = 0.036%):</strong> Average of spread width over the period.
            Formula: <code>Spread = Ask Price − Bid Price</code>. At $6.70, $0.0024 spread is 0.036%.
            This is professional-grade. If spread was $0.03, that would be 0.45% (12× worse), and institutions would avoid.
          </li>
          <li>
            <strong>Momentum 5-bar (+4.3%):</strong> Price change over last 5 bars (e.g., 5 min-bars = 25 minutes).
            +4.3% in 25 min is strong acceleration. Normal momentum is 0–1% per 5 bars.
            >2% = rapid accumulation is visible to markets. <0% = distribution or consolidation.
          </li>
          <li>
            <strong>Cumulative Volume Delta (+2.18M):</strong> Running sum of buy volume minus sell volume.
            Formula: <code>CVD = Σ(Buy Vol − Sell Vol)</code> over time period.
            +2.18M means net 2.18M more shares bought than sold. At 4.13M total volume, that's 53% net buying.
            Anything >50% = strong institutional accumulation.
          </li>
          <li>
            <strong>Block Pressure Index (78/100):</strong> Measures institutional buy orders vs sell orders in block trades.
            Formula: <code>Block Pressure = (Bid-initiated blocks / Total blocks) × 100</code>.
            78 = 78% of blocks bought. Anything >60% = institutional accumulation mode.
            >75% = aggressive accumulation.
          </li>
        </ul>

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
    </div>
    </details>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 6: BALANCE LAWS ENGINE -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <details id="screen6" class="accordion-item">
      <summary class="accordion-header">
        <span class="accordion-triangle">▶</span>
        <h2 style="display:inline; margin: 0;">Screen 6 — Balance Laws Engine</h2>
      </summary>
      <div class="accordion-content" style="padding: 40px 28px; background: #ffffff;">
      <figure class="screen-image" style="margin: 0 0 32px 0;">
        <img src="https://ai-balance.org/iris-x/images/Screen6.jpeg" alt="Balance Laws Computation" loading="lazy" />
        <figcaption>Seven Balance Laws aggregated into composite Balance Score</figcaption>
      </figure>

      <div class="screen-content">
        <h3>🎯 Purpose</h3>
        <p>
          The Balance Laws Engine aggregates all seven laws (Liquidity, Flow, Risk, Time, Possession, Impact, Authority)
          into a single <em>Composite Balance Score</em> (−100 to +100) that determines the market phase and trading action.
          This is the "decision point" where IRIS-X tells you whether to BUY, HOLD, or SELL.
        </p>

        <h3>📚 Detailed Theory</h3>
        <p>
          <strong>The Seven Laws Concept:</strong> Traditional analysis uses price & volume only. IRIS-X uses 7 dimensions
          of market structure: (1) Can I execute? (Liquidity) (2) Are institutions buying or selling? (Flow) (3) Is volatility
          manageable? (Risk) (4) How long has the trend lasted? (Time) (5) Who owns the stock? (Possession) (6) Will my order
          move price? (Impact) (7) Who controls pricing? (Authority). Each law scores −100 (worst) to +100 (best). Composite = average.
        </p>
        <p>
          <strong>Weighting & Thresholds:</strong> All 7 laws are weighted equally, but some observations override:
          if Flow Law < −50 AND Authority Law < −50 (institutions selling with control), SELL even if other laws are positive.
          Conversely, if Flow Law > +80 AND Authority Law > +80, BUY even if Time Law is weak (trade just started).
          This is where experience separates novices from professionals.
        </p>
        <p>
          <strong>Phase Mapping (P1–P6):</strong> Composite Balance determines which of 6 market phases the stock is in.
          P1 (≥+70) = Accumulation → BUY. P2 (+60–69) = Early Markup → BUY. P3 (+40–59) = Late Markup → HOLD.
          P4 (+20–39) = Plateau → SELL. P5 (−69 to +19) = Distribution → SELL. P6 (≤−70) = Markdown → WAIT.
          Each phase has a 2–3 week typical duration, then transitions to the next.
        </p>

        <h3>📊 The Seven Laws Detailed</h3>
        <table class="doc-table">
          <thead>
            <tr>
              <th>Law</th>
              <th>Definition</th>
              <th>PLS Score</th>
              <th>Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Liquidity Law</strong></td>
              <td>Can we execute large orders without price impact? (Spread width, order book depth)</td>
              <td>+72</td>
              <td>Excellent. Can buy 1M+ shares with <0.5% slippage. Professional execution possible.</td>
            </tr>
            <tr>
              <td><strong>2. Flow Law</strong></td>
              <td>Who is trading? (% institutional volume, bid/ask imbalance, block buy %)</td>
              <td>+89</td>
              <td>Extreme. 94% institutional, 68% bid-initiated blocks. Institutions are buying aggressively.</td>
            </tr>
            <tr>
              <td><strong>3. Risk Law</strong></td>
              <td>Is volatility manageable? (Annualized vol, drawdown risk, ATR)</td>
              <td>−22</td>
              <td>Low risk. 38% annualized vol, recent ATR $0.085. Pullbacks expected but controlled.</td>
            </tr>
            <tr>
              <td><strong>4. Time Law</strong></td>
              <td>How long has the trend lasted? (Days in uptrend, SMA alignment persistence)</td>
              <td>+55</td>
              <td>Moderate. 15-day uptrend, only 3 pullback days. Organized, not speculative.</td>
            </tr>
            <tr>
              <td><strong>5. Possession Law</strong></td>
              <td>Who owns the stock? (Estimated % of float held by institutions)</td>
              <td>+67</td>
              <td>Strong. Institutions ~67% of float. They can sustain trend 2-3 years. Good foundation.</td>
            </tr>
            <tr>
              <td><strong>6. Impact Law</strong></td>
              <td>How much will a large order move price? (Inverse of liquidity × market cap)</td>
              <td>+65</td>
              <td>Efficient. Liquidity 72 + tight spread = minimal impact. Institutions prefer this stock.</td>
            </tr>
            <tr>
              <td><strong>7. Authority Law</strong></td>
              <td>Who controls pricing? (Dominant venue %, institutional order-setting power)</td>
              <td>+94</td>
              <td>Institutions rule. 95% ASX dominant, 94% institutional trading. Retail has no voice.</td>
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
    </div>
    </details>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 7: MODULES OVERVIEW -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <details id="screen7" class="accordion-item">
      <summary class="accordion-header">
        <span class="accordion-triangle">▶</span>
        <h2 style="display:inline; margin: 0;">Screen 7 — Modules Overview</h2>
      </summary>
      <div class="accordion-content" style="padding: 40px 28px; background: #ffffff;">
      <figure class="screen-image" style="margin: 0 0 32px 0;">
        <img src="https://ai-balance.org/iris-x/images/Screen7.jpeg" alt="Modules Overview" loading="lazy" />
        <figcaption>Integration of 19 AI modules and consensus decision</figcaption>
      </figure>

      <div class="screen-content">
        <h3>🎯 Purpose</h3>
        <p>
          The Modules Engine integrates 19 different AI/analysis feeds to form a consensus recommendation.
          No single signal is 100% reliable. By running 19 independent analyses and looking for consensus,
          IRIS-X reaches 92–96% accuracy. This is the "second opinion" layer before execution.
        </p>

        <h3>📚 Detailed Theory</h3>
        <p>
          <strong>Why 19 Modules?:</strong> Each module specializes in a different market aspect:
          Order Book module = bid/ask depth. Tape module = real-time flow. Trend module = moving averages.
          Risk module = volatility. Sentiment module = social + news. By running all 19 in parallel,
          if 16 say BUY and 3 say SELL, consensus is bullish (84% agreement). If consensus drops to 50–50,
          IRIS-X waits for clarity. This is "ensemble learning" — far more reliable than any single indicator.
        </p>
        <p>
          <strong>Consensus Voting Logic:</strong> Each module outputs: BULL (+1), NEUTRAL (0), or BEAR (−1).
          Sum the votes: if sum > +5, market is bullish. If −5 < sum < +5, market is uncertain.
          If sum < −5, market is bearish. PLS's 16 BULL / 2 NEUTRAL / 1 BEAR = +15 total = strong bullish.
          This is rare; most days consensus is marginal (+3 to +5).
        </p>
        <p>
          <strong>The 19 Modules Breakdown:</strong> Order Book (depth), Tape (flow), Microstructure (liquidity),
          Balance Laws (composite), Phase Detection (regime), Trend (SMA), Momentum (acceleration), Volatility (risk),
          Support/Resistance (levels), Block Analysis (institutional), Sentiment (news), Macro (regime), Drawdown (risk),
          Liquidation (cascade), Venue Analysis (dominance), Time Series (persistence), News Flow (catalysts),
          Social Sentiment (crowdsource), and Decision Logic (final synthesis). Each module is a specialist.
        </p>

        <h3>📊 Module Consensus Explained</h3>
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
    </div>
    </details>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- SCREEN 8: CIE REPORT INTEGRATION -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <details id="screen8" class="accordion-item">
      <summary class="accordion-header">
        <span class="accordion-triangle">▶</span>
        <h2 style="display:inline; margin: 0;">Screen 8 — CIE Report Integration</h2>
      </summary>
      <div class="accordion-content" style="padding: 40px 28px; background: #ffffff;">
      <figure class="screen-image" style="margin: 0 0 32px 0;">
        <img src="https://ai-balance.org/iris-x/images/linkedinpost2.jpg" alt="CIE-X Report" loading="lazy" />
        <figcaption>CIE-X macro regime, 6AM signals, and consolidation/expansion analysis</figcaption>
      </figure>

      <div class="screen-content">
        <h3>🎯 Purpose</h3>
        <p>
          The CIE Report integrates <em>CIE-X (Consolidation-Expansion Index)</em> macro signals with IRIS-X microstructure analysis.
          Microstructure says BUY, but macro says CRASH RISK? CIE-X resolves this by running the 6AM framework daily,
          scanning macro conditions and giving green/red light to IRIS-X trades.
        </p>

        <h3>📚 Detailed Theory</h3>
        <p>
          <strong>The 6AM Framework:</strong> Every market day, 6AM UTC, CIE-X server scans: (1) Overnight news (earnings, Fed,
          geopolitical), (2) Macro conditions (GDP, employment, inflation), (3) Sector trends (tech down 2% overnight?),
          (4) Global flows (USD strength, Fed policy), (5) Correlation regimes (are markets still connected?),
          (6) Tail risk (VIX, puts/calls ratios). These 6 inputs feed into Phase detection (P1–P6) for the macro market.
          If macro is in P6 (markdown), IRIS-X trades are muted even if microstructure is bullish.
        </p>
        <p>
          <strong>Cascade Theory:</strong> Markets don't move in isolation. When one asset class moves (e.g., oil +3%),
          it cascades through others (energy stocks +2%, airlines −1%, dollar ±0.5%). CIE-X measures "cascade intensity"
          — are shocks propagating or contained? High intensity (>80%) = risky. Low intensity (<30%) = stable.
          PLS has 87% cascade intensity — macro shocks are propagating. Keep stops tight.
        </p>
        <p>
          <strong>Permission System:</strong> CIE-X gives GREEN (go), YELLOW (caution), or RED (stop) for each asset class.
          PLS gets GREEN when: iron ore in expansion, AUD stable, geopolitical risk low, Fed not tightening.
          Any of these fail → YELLOW. All fail → RED and IRIS-X stops trading. This protects against "sharp reversal"
          events (Fed pivot, crisis, geopolitical shock) that microstructure alone can't predict.
        </p>

        <h3>📊 CIE-X Signals (6AM Framework) Detailed</h3>
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
    </div>
    </details>

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
