# PAE-07 — Glossary Chính Thức & Naming Convention

**System:** RI-Ecosys / CIE-PAE  
**Authority:** Ba P. Trần  
**Status:** CANONICAL — dùng trong mọi tài liệu PAE  
**Date:** May 2026  

---

## Tên chính thức

```
CIE-PAE v2.0
ChronoImpact Engine — Portfolio Allocation Engine
```

**Cấu trúc tên:**
- `CIE` — ChronoImpact Engine (thương hiệu hệ thống)
- `PAE` — Portfolio Allocation Engine (chức năng module)
- `v2.0` — phiên bản có QP solver, γ, τ, CASH layer

**Dùng trong tài liệu:** `CIE-PAE` hoặc `PAE` khi context đã rõ là trong hệ thống CIE.

---

## Lưu ý quan trọng về công thức

Một số AI review dùng công thức sai. Công thức **chính xác đã được chạy** trong solver:

**❌ Sai (không dùng):**
```
Score_i = λ·UP_i − γ·RER_i + τ·pBlend_i
```

**✓ Đúng (canonical):**
```
Score_i = pBlend_i × UP_i − λ × RER_i
```

γ và τ **không** xuất hiện trong Score. Chúng chỉ xuất hiện trong objective function.

---

## Glossary — Nhóm 1: Core Formula

### Score_i
Điểm đánh giá risk-adjusted utility của mã i.

```
Score_i = pBlend_i × UP_i − λ × RER_i
```

- Dương: asset tốt hơn giữ cash tại mức rủi ro hiện tại
- Âm: asset tệ hơn giữ cash — không allocate thêm
- Zero: ngang cash (CASH asset luôn Score = 0)

### Objective Function
Hàm mục tiêu toàn danh mục cần maximize:

```
max_w [ Σ w_i·Score_i  −  γ·Σw_i²  −  τ·Σ|w_i − w_i_cur| ]
         ↑ alpha         ↑ diversify    ↑ churn control
```

Ba terms hoạt động độc lập — ba mục tiêu riêng biệt.

---

## Glossary — Nhóm 2: Input Variables

### Last_i
Giá thị trường hiện tại của mã i (AUD). Nguồn: broker / live feed.

### Target_i
Giá mục tiêu. Nguồn: CIE signal engine / PDMEM. Chất lượng Target quyết định chất lượng Score.

### SL_i (Stop-Loss)
Mức giá stop-loss. Nguồn: PDMEM / ELR. Không được stale quá 90 ngày.

### pBlend_i
Signal confidence tổng hợp từ CIE, giá trị trong [0, 1].  
Tổng hợp từ: CIE domain alignment, signal strength, phase score, LIL quality score.  
Không phải xác suất thắng — là chất lượng tín hiệu.

### UP_i — Upside Percentage
```
UP_i = (Target_i − Last_i) / Last_i
```
Mức tăng kỳ vọng nếu target đạt được.

### RER_i — Risk Exposure Ratio
```
RER_i = (Last_i − SL_i) / Last_i
```
Khoảng cách stop-loss tính theo % giá hiện tại. Càng cao = rủi ro càng lớn.

### w_i_cur — Current Weight
```
w_i_cur = MV_i / MV_total
```
Tỷ trọng hiện tại của mã i trong danh mục.

### MV — Market Value
Tổng giá trị thị trường toàn danh mục (AUD).

---

## Glossary — Nhóm 3: Hyperparameters

### λ (lambda) — Risk Penalty
**Vị trí:** Score function  
**Công thức:** `Score_i = pBlend_i × UP_i − λ × RER_i`  
**Default:** 0.7  
**Ý nghĩa:** Mức độ phạt rủi ro. Cao hơn = strict hơn với RER cao.

| λ | Behavior |
|---|---|
| 0.3–0.5 | Permissive — high-RER assets có thể score dương |
| 0.7 (default) | Balanced |
| 1.0+ | Conservative — chỉ low-RER assets score dương |
| f(Phase) | Tương lai: λ tự động cao hơn khi Phase P5–P6 |

### γ (gamma) — Diversification Penalty
**Vị trí:** Objective function  
**Công thức:** `−γ·Σw_i²`  
**Default:** 0.5  
**Ý nghĩa:** Phạt concentration. Càng cao = vốn phân tán đều hơn.

| γ | HHI kết quả | Max position |
|---|---|---|
| 0.0 (LP) | ~0.35 | 40%+ (corner solution) |
| 0.3 | ~0.21 | 30% |
| 0.5 (default) | ~0.16 | 25% |
| 1.0 | ~0.16 | 22% |

### τ (tau) — Churn Penalty
**Vị trí:** Objective function  
**Công thức:** `−τ·Σ|w_i − w_i_cur|`  
**Default:** 0.05  
**Ý nghĩa:** Phạt thay đổi tỷ trọng. Tạo no-trade region — engine "lười" rebalance.

| τ | Turnover | Behavior |
|---|---|---|
| 0.00 | 93–143% | Full rebalance mỗi kỳ |
| 0.05 (default) | ~2–6% | No-trade region active |
| 0.10+ | Như 0.05 | τ saturates — không thay đổi thêm |

---

## Glossary — Nhóm 4: Constraints

### Budget Constraint
```
Σ w_i = 1,   w_i ≥ 0
```
Tổng vốn = 100%, không short.

### RER Cap
```
RER_i > 12%  →  w_i ≤ 18%
```
Mã có stop quá xa (RER cao) bị giới hạn tỷ trọng tối đa.

### pBlend Gate
```
pBlend_i < 0.40  →  w_i ≤ 5%
```
Tín hiệu yếu — không được tăng tỷ trọng chủ động. Có thể giữ lại lượng nhỏ hiện có, không thêm mới.

### SL Breach
```
Last_i ≤ SL_i  →  w_i = 0
```
Stop-loss bị vi phạm — buộc exit hoàn toàn.

### HighBeta Cap (HB Cap)
```
Σ_{i ∈ HB group} w_i ≤ 0.40
```
Nhóm mã beta cao (DYL, IMU, KAR) tổng không vượt 40%.

### Individual Max
```
w_i ≤ 0.40
```
Không mã nào chiếm quá 40% danh mục.

### CASH Asset
```
Score_CASH = 0,   RER_CASH = 0,   pBlend_CASH = 1.0
```
CASH là asset thực sự trong universe — không phải placeholder. Khi tất cả cổ phiếu Score âm, engine tự allocate vào CASH. Đây là **capital selectivity**.

---

## Glossary — Nhóm 5: Output Metrics

### w_optimal
Vector tỷ trọng tối ưu cho tất cả assets. Kết quả của QP solver.

---

# 🔗 IRIS-X — GLOSSARY & TERMINOLOGY
**Added:** June 3, 2026  
**Version:** v12.0  
**Integration:** Unified Trading Analysis Platform

---

## IRIS-X Core Terms

### IRIS-X
**Intelligent Real-time Index Signal eXchange**
- Unified trading analysis platform consolidating 10 years of trading research
- Imports CSV data from Comsec (Order Book, Trades, Course of Sales)
- Auto-computes 34 structural microstructure signals
- Generates P1-P6 phase detection and CIE Reports
- Status: Production-ready, integrated with RI-ECOSYS

### CIE Report
**Cycle Intelligence Engine Report**
- Analyst-grade summary document of market analysis
- Contains: phase detection, signal metrics, macro markets, rotation analysis, news, execution plans
- Expandable sections: Top 5 Structural Signals, News List, Scan List
- Sydney datetime format for snapshots (DD/MM/YYYY, h:mm:ss AM/PM)
- Metadata: snapshot ID, UTC time, structural signal count

### Microstructure Balance Model
Framework analyzing order book dynamics, trade flows, and institutional patterns to detect execution opportunity
- Based on 10 years of trading research consolidation
- Uses CSV imports from Comsec for data input
- Auto-detects 34 structural patterns
- Produces execution-ready signals (RECOMMEND, HOLD, EXIT)

---

## IRIS-X Data Layers

### OB (Order Book Engine)
Real-time order book analysis from Comsec CSV exports
- Processes bid/ask depth
- Calculates imbalance metrics
- Detects pressure patterns
- Maps ASX vs CXA venue splits

### Trades Engine
Analysis of executed trade CSV history
- Flow pattern detection
- Institutional activity signatures
- Cascade signal computation
- Trade count aggregation

### CoS (Course of Sales)
Tick-by-tick CSV price/volume data analysis
- Price-volume correlation
- Momentum detection
- Order flow intent signals
- Volume profile generation

### Signal Computation Engine
Auto-calculates 34 structural metrics from imported data
- Dark Pool Activity (DPA)
- Block Pressure (BP)
- Cascade Intensity (CI)
- Venue Flow (VF)
- Volatility regime (VR)
- And 29 more signals

### WHY Phase Engine (P1-P6)
Determines market regime from computed signals
- **P1:** Accumulation (institutional buying)
- **P2:** Breakout (momentum acceleration)
- **P3:** Distribution (profit-taking begins)
- **P4:** Breakdown (momentum reversal)
- **P5:** Capitulation (panic selling)
- **P6:** Systemic Fracture (structural collapse)

---

## IRIS-X Signal Metrics

### Best-Core Signal
Single most important signal in current market state
- Auto-selected by impact/cascade/confidence scoring
- Displayed with WHY interpretation (domain + rationale)
- Example: "CP [Industrial metals demand] Impact:91 Cascade:6 Confidence:89%"

### Phase Probability
Likelihood distribution across P1-P6 phases
- Shows which regime is most probable
- Color-coded probability bars
- Updates per analysis cycle

### Composite Score
Risk-adjusted utility of portfolio/signal
- Combines impact, cascade, confidence
- Range: 0-100
- Used for ranking signals and stocks

### Cascade Intensity
Signal confirmation depth (0-10 scale)
- How many confirming patterns present
- Higher = stronger signal
- Part of Best-Core auto-selection logic

### Signal Impact
Measured effect of signal on price probability
- Range: 0-100
- Reflects historical predictive value
- Component of Best-Core scoring

---

## IRIS-X Workspace

### Workspace
User's saved analysis session containing:
- Imported CSV data (OB, Trades, CoS)
- Portfolio composition
- Computed signals (all 34)
- Phase detection results
- Execution plans
- Expanded portfolio (per-stock datasets)

### Workspace Export
JSON file containing full analysis state
- Preserves all computed metrics
- Includes phase history
- Can be re-imported for further analysis

### Portfolio Expansion
Auto-populates dataset containers per stock ticker
- One OB dataset per ticker
- One Trades dataset per ticker
- One CoS dataset per ticker
- One computed metrics object per ticker
- Supports unlimited stocks

---

## IRIS-X Data Input

### CSV Import
Workflow importing data from Comsec exports
- **OB Dump:** Order book depth (bid/ask levels)
- **Trade CSV:** Executed trades (time, price, volume, buyer/seller)
- **CoS CSV:** Tick-by-tick (time, price, volume, direction)
- Format: Standard Australian finance CSV
- Processing time: <1 second per stock

### Comsec Integration
Data source for IRIS-X
- Largest Australian online broker
- Market feeds: ASX (Australian Securities Exchange)
- Venue data: CXA (Chi-X Australia)
- CSV export format supported

---

## IRIS-X Output & Reporting

### CIE Toolbar
Four-button menu in CIE Report:
1. **Import json1.json** — Load market analysis data
2. **Expand Workspace** — Auto-populate per-stock datasets
3. **Export Workspace** — Save as JSON file
4. **Import CIE File** — Load prior analysis

### Snapshot Metadata
Report header information:
- **SNAPSHOT TIME (SYDNEY):** DD/MM/YYYY, h:mm:ss AM/PM format
- **UTC:** ISO8601 timestamp
- **SNAPSHOT ID:** Millisecond timestamp
- **News/Scan buttons:** Toggle sections

### Top 5 Signals Section
Expandable list of highest-impact structural signals
- Rank 1-5 by composite impact
- Per-signal: domain, impact score, cascade, confidence
- WHY interpretation for each
- Governance action (RECOMMEND/HOLD/EXIT)
- Color-coded domain borders

### News List
Headlines from json1.json data
- Up to 10 articles
- Toggle-expandable (hidden by default)
- Scrollable view (max 400px height)
- Relevant to market phase analysis

### Scan List
Rotation leaders/laggers from market analysis
- Leaders (green tags): best rotation sectors
- Laggers (red tags): worst rotation sectors
- Total structural signal count
- Toggle-expandable (hidden by default)

---

## IRIS-X Architecture Principles

### Modular Engine Design
5 independent processing engines:
1. Order Book Engine (OB)
2. Trades Engine
3. Course of Sales Engine (CoS)
4. Signal Computation Engine
5. WHY Phase Engine

Each can be updated independently without affecting others.

### Dynamic Portfolio Expansion
Auto-creates dataset containers per stock
- No hardcoded limits
- Scales to unlimited stocks
- One import file expands to N portfolios

### CSV-Based Data Flow
```
Comsec CSV Dumps
    ↓
[Import Engine]
    ↓
[OB | Trades | CoS parsers]
    ↓
[Signal Computation (34 metrics)]
    ↓
[WHY Phase Detection (P1-P6)]
    ↓
[CIE Report Generation]
    ↓
[Workspace Save/Export]
```

---

## IRIS-X Metrics Reference

| Metric | Range | Meaning |
|--------|-------|---------|
| **Phase** | P1-P6 | Market regime |
| **Impact** | 0-100 | Signal effect on probability |
| **Cascade** | 0-10 | Signal confirmation depth |
| **Confidence** | 0-100% | Statistical confidence |
| **Signal Count** | 0-34 | Active structural signals |
| **Composite** | 0-100 | Risk-adjusted score |

---

## IRIS-X Status & Capabilities

✅ **CSV import from Comsec** (OB, Trades, CoS)  
✅ **34 structural signals** (auto-computed)  
✅ **Phase detection** (P1-P6 WHY Framework)  
✅ **CIE Report generation** (analyst-grade)  
✅ **Workspace persistence** (save/load/export)  
✅ **Sydney timezone formatting** (DD/MM/YYYY h:mm:ss AM/PM)  
✅ **Expandable signals view** (Top 5 with interpretation)  
✅ **Expandable news/scan lists** (hidden by default)  
✅ **Dynamic portfolio expansion** (unlimited stocks)  
✅ **Multi-stock analysis** (parallel signal computation)  

---

## IRIS-X Integration with RI-ECOSYS

- **Parent System:** RI-ECOSYS Ecosystem
- **Related Engines:** CIE-PAE, AI-Balance, NeuroKernel
- **Data Source:** Comsec CSV exports
- **Primary Output:** CIE Reports, execution plans
- **Target Users:** Traders, portfolio managers, researchers
- **Deployment:** Standalone web app (iris-x.html)

### MaxProfit%
```
MaxProfit% = Σ w_i_opt × UP_i
```
Lợi nhuận kỳ vọng nếu tất cả targets đều đạt.

### HHI — Herfindahl-Hirschman Index
```
HHI = Σ w_i²
```
Đo concentration. Thấp hơn = đa dạng hơn.
- 1.0 = all-in một mã
- 0.143 = equal weight (7 assets)
- 0.165 = typical PAE output

### Turnover
```
Turnover = Σ |w_i_opt − w_i_cur|
```
Tổng thay đổi tỷ trọng. Proxy cho chi phí giao dịch.

### Portfolio RER
```
Port_RER = Σ w_i_opt × RER_i
```
Rủi ro bình quân gia quyền toàn danh mục.

### Action Labels

| Label | Điều kiện | Ý nghĩa |
|---|---|---|
| ▲ TARGET | w_opt > w_cur + ε | Mua thêm |
| ▼ SOURCE | w_opt < w_cur − ε | Bán bớt |
| — HOLD | \|w_opt − w_cur\| ≤ ε | Giữ nguyên (bao gồm τ no-trade) |

---

## Glossary — Nhóm 6: Governance Events

### ERL — Emergency Risk Layer
Pre-solver validation gate. Chạy trước QP solver để phát hiện rủi ro làm inputs không còn tin cậy.

### ERL States

| State | Tác động | Ví dụ |
|---|---|---|
| PASS | QP chạy bình thường | Mọi checks clear |
| FLAG | w_max giảm 50% | P5 + HighBeta mã |
| QUARANTINE | w_i = 0 (forced) | DRO — ASIC investigation |
| HARD_EXIT | w_i = 0 + khuyến nghị bán | Fraud confirmed, SL collapsed |

### G1 — Governance Breach
ASIC/SEC investigation, fraud allegation, CEO sudden exit, trading halt by regulator.

### G2 — Market Structure Failure
Stale data >24h, flash crash >15%, bid-ask spread >10%, circuit breaker.

### G3 — External Shock
Natural disaster, sanctions, geopolitical (CIE P7 event), supply chain chokepoint.

### G4 — Input Integrity
Unverified data source, stale target >90 days, pBlend from corrupted feed.

### Conflict Flag
Khi CIE domain signal và Model Score đưa ra chỉ đạo trái ngược.  
Ví dụ: DRO — CIE LEAD +6.6% (Defence/CP) vs Score −0.079.  
Resolution: Ba quyết định. Model không tự override CIE, CIE không tự override model.

---

## Glossary — Nhóm 7: CIE Integration Terms

### Phase (P1–P7)
Mức độ systemic stress từ CIE. P5 = high stress, P7 = unknown event.

### Domain
Nhóm tín hiệu macro trong CIE:
- **CP** — Chokepoint / Capital Preservation
- **KE** — Kinetic / Energy
- **MR** — Market Risk / Systemic
- **AL** — Alpha / Growth / Tech
- **EN** — Energy supply
- **COM** — Commodities / Communications
- **RG** — Regulatory / Geopolitics

### Domain Alignment
Mã được xem là "align" với domain LEAD khi:
- Sector của mã thuộc domain đang LEAD
- Ví dụ: WGX (Gold) → CP domain → align khi CP LEAD

### XDC — Cross-Domain Cascade
Hiệu ứng lan truyền khi một signal kích hoạt nhiều domains.  
Ví dụ: Intel collapse → CP (semiconductor chokepoint) → MR (tech deleveraging) → AL (growth lag).

### T1 Signal
Tín hiệu tier cao nhất trong CIE — impact cao nhất, governance action = escalate.

---

## Glossary — Nhóm 8: Architecture Terms

### Capital Selectivity
Khả năng engine giữ CASH thay vì bị ép mua assets kém chất lượng. Biểu hiện: CASH tự xuất hiện trong w_optimal khi Scores âm.

### No-Trade Region
Vùng mà ΔUtility < τ — engine không rebalance dù có signal thay đổi nhỏ. Đây là behavior đúng của institutional allocator.

### Corner Solution
Nghiệm LP (γ=0) luôn cho w_k = 100% vào mã Score cao nhất. Đây là lý do phải dùng QP (γ>0).

### τ Saturation
Điểm mà tăng τ thêm không thay đổi nghiệm. Xảy ra vì portfolio đã trong no-trade equilibrium.

### Dual Utility (Đề xuất — chưa implement)
Tách Score thành hai thành phần:
- U_T (Tactical): executable edge ngắn hạn = Score hiện tại
- U_S (Strategic): hedge value / crisis beta / convex optionality
- FU_i = α·U_T + β·U_S

Giải quyết DRO-type conflict — assets có strategic value cao nhưng tactical score âm.

---

## Version History

| Version | Date | Key changes |
|---|---|---|
| LP v1.0 | March 2026 | Linear objective, corner solution problem identified |
| QP v2.0 | April 2026 | γ added, CASH layer, τ added, ERL proposed |
| v2.1 (current) | May 2026 | ERL G1 active (DRO case), P5 validated |
| v3.0 (proposed) | TBD | Dual utility U_T + U_S, regime-aware λ, ADV constraint |

---

*Document: PAE-07-GLOSSARY.md | RI-Ecosys Internal | PDMEM Knowledge Base*  
*Canonical reference — supersedes any conflicting definitions in other documents*
