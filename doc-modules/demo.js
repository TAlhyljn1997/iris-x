// ============================================================================
// IRIS-X v12.0 — DEMO PANEL (TABBED INTERFACE WITH ANIMATIONS)
// Complete demonstration of IRIS-X system using PLS.ASX case study
// Features: Tabbed interface, Image animations, EN/VI language support, Smaller fonts
// ============================================================================

export const metadata = {
  id: "irisx-demo",
  title: "IRIS-X v12.0 — Microstructure Balance Model Demo",
  shortTitle: "IRIS-X Demo",
  version: "v12.0",
  updated: "2026-06-03",
  author: "Ba Tran (RI-Ecosys™)",
  stock: "PLS.ASX",
  description: "Interactive 8-screen walkthrough with tabbed interface, image animations, and full EN/VI support"
};

export const tableOfContents = [
  { id: "screen1", label: "1. Order Book Dump", labelVi: "1. Lệnh Xuất" },
  { id: "screen2", label: "2. Historical View", labelVi: "2. Xem Lịch Sử" },
  { id: "screen3", label: "3. Tape Engine", labelVi: "3. Tape Engine" },
  { id: "screen4", label: "4. Flow Engine", labelVi: "4. Flow Engine" },
  { id: "screen5", label: "5. Microstructure", labelVi: "5. Cấu Trúc Vi Mô" },
  { id: "screen6", label: "6. Balance Laws", labelVi: "6. Luật Cân Bằng" },
  { id: "screen7", label: "7. Modules Overview", labelVi: "7. Tổng Quan Mô-đun" },
  { id: "screen8", label: "8. CIE Report", labelVi: "8. Báo Cáo CIE" }
];

export const content = `
<style>
  /* TAB INTERFACE STYLING */
  .tab-wrapper { display: flex; flex-direction: column; }

  .demo-tabs-header {
    padding: 16px 28px;
    background: linear-gradient(135deg, #f5f8fc 0%, #eef2f7 100%);
    border-bottom: 2px solid #e0e4e8;
    margin-bottom: 0;
  }

  .demo-tabs {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 8px;
    flex-wrap: wrap;
  }

  .demo-tab-btn {
    padding: 10px 14px;
    background: white;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
    color: #0066cc;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s;
    white-space: nowrap;
  }

  .demo-tab-btn:hover {
    background: #f0f4ff;
    border-color: #0066cc;
    color: #004499;
  }

  .demo-tab-btn.active {
    background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
    color: white;
    border-color: #0066cc;
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
  }

  /* CONTENT STYLING */
  .demo-content-wrapper {
    padding: 36px 28px;
    background: white;
    border: 1px solid #e0e4e8;
    border-top: none;
    animation: fadeInContent 0.4s ease-in;
  }

  @keyframes fadeInContent {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .demo-screen { display: none; }
  .demo-screen.active { display: block; }

  .demo-screen h2 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 14px 0;
    color: #0066cc;
    letter-spacing: -0.3px;
    border-bottom: 2px solid #0066cc;
    padding-bottom: 8px;
  }

  .demo-screen h3 {
    font-size: 1.02rem;
    font-weight: 650;
    margin: 18px 0 10px 0;
    color: #1a1a1a;
    letter-spacing: -0.2px;
  }

  .demo-screen p {
    font-size: 0.92rem;
    line-height: 1.68;
    margin: 0 0 12px 0;
    color: #333;
  }

  .demo-screen strong { font-weight: 700; color: #0066cc; }
  .demo-screen em { font-style: italic; color: #666; }

  .demo-screen ul, .demo-screen ol {
    margin: 12px 0 12px 22px;
    padding-left: 0;
  }

  .demo-screen li {
    margin: 6px 0;
    line-height: 1.6;
    color: #333;
    font-size: 0.92rem;
  }

  .screen-image {
    margin: 0 0 20px 0;
    text-align: center;
  }

  .screen-image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    animation: fadeInSlideUp 0.6s ease-out;
    transition: all 0.3s;
  }

  .screen-image img:hover {
    filter: brightness(1.05) drop-shadow(0 12px 28px rgba(0, 0, 0, 0.18));
  }

  .screen-image figcaption {
    font-size: 0.82rem;
    color: #666;
    margin-top: 6px;
    font-style: italic;
  }

  @keyframes fadeInSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* DARK MODE */
  @media (prefers-color-scheme: dark) {
    .demo-tabs-header {
      background: linear-gradient(135deg, #1c2128 0%, #16191d 100%);
      border-bottom-color: #30363d;
    }

    .demo-tab-btn {
      background: #0d1117;
      border-color: #30363d;
      color: #58a6ff;
    }

    .demo-tab-btn:hover {
      background: #161b22;
      color: #79c0ff;
    }

    .demo-tab-btn.active {
      background: linear-gradient(135deg, #0e7a0e 0%, #00c408 100%);
      border-color: #58a6ff;
      color: white;
    }

    .demo-content-wrapper {
      background: #0d1117;
      border-color: #30363d;
      color: #e5e7eb;
    }

    .demo-screen h2, .demo-screen h3 { color: #58a6ff; }
    .demo-screen p { color: #c9d1d9; }
    .demo-screen strong { color: #58a6ff; }
    .demo-screen li { color: #c9d1d9; }
  }
</style>

<div class="tab-wrapper">
  <header class="doc-header" style="padding: 16px 28px; background: white; border-bottom: 2px solid #e0e4e8;">
    <h1 style="font-size: 1.85rem; font-weight: 700; margin: 0 0 6px 0; color: #0066cc; letter-spacing: -0.4px;">
      📊 <span class="t-en">IRIS-X v12.0 — Interactive Demo</span><span class="t-vi">IRIS-X v12.0 — Demo Tương Tác</span>
    </h1>
    <p style="font-size: 0.88rem; margin: 0 0 12px 0; color: #666; font-weight: 500;">
      <span class="t-en">Microstructure Balance Model | Real PLS Case Study | May 19-24, 2026</span>
      <span class="t-vi">Mô Hình Cân Bằng Microstructure | Trường Hợp Thực PLS | 19-24 Tháng 5, 2026</span>
    </p>
    <button class="btn-return-dashboard" onclick="returnToMainDashboard()" style="padding: 9px 14px; font-size: 0.85rem;">
      ⬅ <span class="t-en">Return to Dashboard</span><span class="t-vi">Quay lại Bảng Điều Khiển</span>
    </button>
  </header>

  <div class="demo-tabs-header">
    <div class="demo-tabs" id="demo-tabs-container"></div>
  </div>

  <div class="demo-content-wrapper">
    <!-- SCREEN 1: ORDER BOOK DUMP -->
    <div id="screen1" class="demo-screen active">
      <h2>📦 <span class="t-en">Screen 1 — Order Book Dump</span><span class="t-vi">Màn Hình 1 — Lệnh Xuất</span></h2>
      <div class="screen-image">
        <img src="https://ai-balance.org/iris-x/images/Screen1.jpeg" alt="Order Book" loading="lazy" />
        <figcaption><span class="t-en">Order Book snapshot: bid/ask depth and liquidity structure</span><span class="t-vi">Ảnh chụp sổ lệnh: độ sâu bid/ask và cấu trúc tính thanh khoản</span></figcaption>
      </div>
      <h3 class="t-en">🎯 Purpose</h3>
      <h3 class="t-vi">🎯 Mục Đích</h3>
      <p class="t-en">
        The Order Book Engine captures bid/ask depth, spread, and liquidity structure. This forms the foundation
        for measuring <strong>Liquidity Law</strong> and <strong>Impact Law</strong>, feeding into the composite Balance Score.
      </p>
      <p class="t-vi">
        Order Book Engine ghi lại độ sâu bid/ask, spread và cấu trúc tính thanh khoản. Đây là nền tảng để đo lường
        <strong>Luật Tính Thanh Khoản</strong> và <strong>Luật Tác Động</strong>, cung cấp cho Điểm Cân Bằng tổng hợp.
      </p>
      <h3 class="t-en">📊 Key Metrics</h3>
      <h3 class="t-vi">📊 Chỉ Số Chính</h3>
      <ul>
        <li><strong class="t-en">Bid/Ask Ratio:</strong> <span class="t-en">1.85 means 85% more buy-side depth than sell-side — extremely bullish</span> <span class="t-vi">1.85 có nghĩa là 85% độ sâu mua nhiều hơn phía bán — cực kỳ tăng giá</span></li>
        <li><strong class="t-en">Spread:</strong> <span class="t-en">$0.063 between best bid ($6.242) and best ask ($6.305) — tight, competitive market</span> <span class="t-vi">$0.063 giữa lệnh mua tốt nhất ($6.242) và lệnh bán tốt nhất ($6.305) — thị trường sát chặt, cạnh tranh</span></li>
        <li><strong class="t-en">Order Concentration:</strong> <span class="t-en">177 buy orders vs 96 sell orders — institutional buyers dominate</span> <span class="t-vi">177 lệnh mua so với 96 lệnh bán — người mua tổ chức thống trị</span></li>
      </ul>
    </div>

    <!-- SCREEN 2: HISTORICAL VIEW -->
    <div id="screen2" class="demo-screen">
      <h2>📈 <span class="t-en">Screen 2 — Historical View</span><span class="t-vi">Màn Hình 2 — Xem Lịch Sử</span></h2>
      <div class="screen-image">
        <img src="https://ai-balance.org/iris-x/images/Screen2.jpeg" alt="Historical View" loading="lazy" />
        <figcaption><span class="t-en">5-day price and volume history showing accumulation phase</span><span class="t-vi">Lịch sử giá và khối lượng 5 ngày cho thấy giai đoạn tích lũy</span></figcaption>
      </div>
      <h3 class="t-en">📊 Analysis</h3>
      <h3 class="t-vi">📊 Phân Tích</h3>
      <p class="t-en">
        Volume spikes 150-200% above the 20-day average on 5/22-5/23, signaling institutional accumulation.
        Price holds support at $6.20 despite volume, indicating buyer control.
      </p>
      <p class="t-vi">
        Khối lượng tăng 150-200% so với trung bình 20 ngày vào 5/22-5/23, báo hiệu tích lũy tổ chức.
        Giá duy trì hỗ trợ ở $6.20 bất chấp khối lượng, cho thấy kiểm soát người mua.
      </p>
    </div>

    <!-- SCREEN 3: TAPE ENGINE -->
    <div id="screen3" class="demo-screen">
      <h2>🎛️ <span class="t-en">Screen 3 — Tape Engine</span><span class="t-vi">Màn Hình 3 — Tape Engine</span></h2>
      <div class="screen-image">
        <img src="https://ai-balance.org/iris-x/images/Screen3.jpeg" alt="Tape Engine" loading="lazy" />
        <figcaption><span class="t-en">Trade flow analysis: 1,246 trades, 31% institutional block trades</span><span class="t-vi">Phân tích dòng giao dịch: 1.246 giao dịch, 31% giao dịch khối tổ chức</span></figcaption>
      </div>
      <h3 class="t-en">🔍 Interpretation</h3>
      <h3 class="t-vi">🔍 Diễn Giải</h3>
      <p class="t-en">
        Block trades (≥100K shares) represent 31% of total volume — signature of institutional buying.
        Most blocks cluster near support, suggesting deliberate accumulation rather than panic buying.
      </p>
      <p class="t-vi">
        Giao dịch khối (≥100K cổ phiếu) chiếm 31% khối lượng tổng cộng — dấu hiệu của mua tổ chức.
        Hầu hết các khối tập trung gần hỗ trợ, cho thấy tích lũy cố ý thay vì mua hoảng loạn.
      </p>
    </div>

    <!-- SCREEN 4: FLOW ENGINE -->
    <div id="screen4" class="demo-screen">
      <h2>💰 <span class="t-en">Screen 4 — Flow Engine</span><span class="t-vi">Màn Hình 4 — Flow Engine</span></h2>
      <div class="screen-image">
        <img src="https://ai-balance.org/iris-x/images/Screen4.jpeg" alt="Flow Engine" loading="lazy" />
        <figcaption><span class="t-en">Buy-side cumulative volume leading sell-side by 45M shares</span><span class="t-vi">Khối lượng tích lũy phía mua dẫn phía bán 45M cổ phiếu</span></figcaption>
      </div>
      <h3 class="t-en">📌 Key Observation</h3>
      <h3 class="t-vi">📌 Quan Sát Chính</h3>
      <p class="t-en">
        Cumulative buy volume exceeds sell volume by 45M shares — extremely strong buying pressure.
        VWAP at $6.28 above current market, indicating buyers willing to pay premium prices.
      </p>
      <p class="t-vi">
        Khối lượng mua tích lũy vượt khối lượng bán 45M cổ phiếu — áp lực mua cực mạnh.
        VWAP ở $6.28 cao hơn thị trường hiện tại, cho thấy người mua sẵn sàng trả giá cao hơn.
      </p>
    </div>

    <!-- SCREEN 5: MICROSTRUCTURE ENGINE -->
    <div id="screen5" class="demo-screen">
      <h2>🔬 <span class="t-en">Screen 5 — Microstructure Engine</span><span class="t-vi">Màn Hình 5 — Cấu Trúc Vi Mô</span></h2>
      <div class="screen-image">
        <img src="https://ai-balance.org/iris-x/images/Screen5.jpeg" alt="Microstructure" loading="lazy" />
        <figcaption><span class="t-en">Liquidity depth, impact, and elasticity metrics</span><span class="t-vi">Độ sâu tính thanh khoản, tác động và độ co dãn</span></figcaption>
      </div>
      <h3 class="t-en">🧮 Calculations</h3>
      <h3 class="t-vi">🧮 Tính Toán</h3>
      <ul>
        <li><strong class="t-en">Price Impact (1M shares):</strong> <span class="t-en">$0.042 — efficient, deep market favors large trades</span> <span class="t-vi">$0.042 — thị trường sâu hiệu quả ưu tiên giao dịch lớn</span></li>
        <li><strong class="t-en">Elasticity:</strong> <span class="t-en">1.18 — one-time normal elasticity (institutional market behavior)</span> <span class="t-vi">1.18 — độ co dãn bình thường một lần (hành vi thị trường tổ chức)</span></li>
        <li><strong class="t-en">Liquidity Depth:</strong> <span class="t-en">$4.2M on each side of spread — strong support/resistance</span> <span class="t-vi">$4.2M trên mỗi phía của spread — hỗ trợ/kháng cự mạnh</span></li>
      </ul>
    </div>

    <!-- SCREEN 6: BALANCE LAWS ENGINE -->
    <div id="screen6" class="demo-screen">
      <h2>⚖️ <span class="t-en">Screen 6 — Balance Laws Engine</span><span class="t-vi">Màn Hình 6 — Luật Cân Bằng</span></h2>
      <div class="screen-image">
        <img src="https://ai-balance.org/iris-x/images/Screen6.jpeg" alt="Balance Laws" loading="lazy" />
        <figcaption><span class="t-en">Seven balance law scores combining all signals</span><span class="t-vi">Bảy điểm luật cân bằng kết hợp tất cả các tín hiệu</span></figcaption>
      </div>
      <h3 class="t-en">⚡ Composite Score: +62</h3>
      <h3 class="t-vi">⚡ Điểm Tổng Hợp: +62</h3>
      <ul>
        <li><strong>Flow Law:</strong> +89 <span class="t-en">(Strong institutional buying)</span> <span class="t-vi">(Mua tổ chức mạnh)</span></li>
        <li><strong>Block Law:</strong> +76 <span class="t-en">(Accumulation in progress)</span> <span class="t-vi">(Tích lũy đang diễn ra)</span></li>
        <li><strong>Volume Law:</strong> +58 <span class="t-en">(Spike confirmed)</span> <span class="t-vi">(Spike được xác nhận)</span></li>
        <li><strong>Price Law:</strong> +42 <span class="t-en">(Bullish momentum)</span> <span class="t-vi">(Momentum tăng)</span></li>
        <li><strong>Risk Law:</strong> −18 <span class="t-en">(Low pullback risk)</span> <span class="t-vi">(Rủi ro pullback thấp)</span></li>
        <li><strong>Possession Law:</strong> +67 <span class="t-en">(Institutional control)</span> <span class="t-vi">(Kiểm soát tổ chức)</span></li>
        <li><strong>Authority Law:</strong> +84 <span class="t-en">(Institutions set terms)</span> <span class="t-vi">(Tổ chức đặt điều khoản)</span></li>
      </ul>
      <p class="t-en"><strong>Result:</strong> Phase P2 (Early Markup) — Low-risk long entry confirmed</p>
      <p class="t-vi"><strong>Kết Quả:</strong> Phase P2 (Markup Sớm) — Nhập vào lệnh long rủi ro thấp được xác nhận</p>
    </div>

    <!-- SCREEN 7: MODULES OVERVIEW -->
    <div id="screen7" class="demo-screen">
      <h2>🎯 <span class="t-en">Screen 7 — Modules Overview</span><span class="t-vi">Màn Hình 7 — Tổng Quan Mô-đun</span></h2>
      <div class="screen-image">
        <img src="https://ai-balance.org/iris-x/images/Screen7.jpeg" alt="Modules" loading="lazy" />
        <figcaption><span class="t-en">All 5 processing engines in IRIS-X system architecture</span><span class="t-vi">Tất cả 5 công cụ xử lý trong kiến trúc hệ thống IRIS-X</span></figcaption>
      </div>
      <h3 class="t-en">🔧 Five Engines Working Together</h3>
      <h3 class="t-vi">🔧 Năm Công Cụ Làm Việc Cùng Nhau</h3>
      <ol>
        <li><strong class="t-en">Order Book Engine:</strong> <span class="t-en">Reads static snapshots of liquidity</span> <span class="t-vi">Đọc ảnh chụp tĩnh của tính thanh khoản</span></li>
        <li><strong class="t-en">Tape Engine:</strong> <span class="t-en">Analyzes real-time trade flow patterns</span> <span class="t-vi">Phân tích các mô hình dòng giao dịch thực tế</span></li>
        <li><strong class="t-en">Microstructure Engine:</strong> <span class="t-en">Evaluates liquidity efficiency and price impact</span> <span class="t-vi">Đánh giá hiệu quả tính thanh khoản và tác động giá</span></li>
        <li><strong class="t-en">Balance Laws Engine:</strong> <span class="t-en">Combines 7 laws into a composite score</span> <span class="t-vi">Kết hợp 7 luật thành một điểm tổng hợp</span></li>
        <li><strong class="t-en">Phase Detection Engine:</strong> <span class="t-en">Maps balance score to market phase (P1-P6)</span> <span class="t-vi">Ánh xạ điểm cân bằng với giai đoạn thị trường (P1-P6)</span></li>
      </ol>
    </div>

    <!-- SCREEN 8: CIE REPORT -->
    <div id="screen8" class="demo-screen">
      <h2>📋 <span class="t-en">Screen 8 — CIE Report Integration</span><span class="t-vi">Màn Hình 8 — Tích Hợp Báo Cáo CIE</span></h2>
      <div class="screen-image">
        <img src="https://ai-balance.org/iris-x/images/Screen8.jpeg" alt="CIE Report" loading="lazy" />
        <figcaption><span class="t-en">Executive summary and trading recommendations</span><span class="t-vi">Tóm tắt điều hành và khuyến nghị giao dịch</span></figcaption>
      </div>
      <h3 class="t-en">✅ Final Verdict</h3>
      <h3 class="t-vi">✅ Kết Luận Cuối Cùng</h3>
      <p class="t-en">
        <strong>Signal Strength: STRONG (P2 Phase Entry)</strong><br/>
        PLS shows all hallmarks of institutional accumulation (May 19-24, 2026). With composite balance at +62
        and all seven laws confirming, entry into long position at market is recommended with tight stop-loss at $6.15.
      </p>
      <p class="t-vi">
        <strong>Độ Mạnh Tín Hiệu: MẠNH (P2 Phase Entry)</strong><br/>
        PLS cho thấy tất cả các đặc điểm của tích lũy tổ chức (19-24 tháng 5, 2026). Với điểm cân bằng tổng hợp ở +62
        và tất cả bảy luật xác nhận, được khuyến nghị vào lệnh long ở thị trường với stop-loss chặt ở $6.15.
      </p>
      <h3 class="t-en">🎓 Lessons Learned</h3>
      <h3 class="t-vi">🎓 Bài Học Rút Ra</h3>
      <ul>
        <li class="t-en">Volume alone is insufficient — need microstructure validation</li>
        <li class="t-vi">Khối lượng một mình là không đủ — cần xác thực cấu trúc vi mô</li>
        <li class="t-en">Institutional fingerprints (block trades, order book walls) matter more than retail</li>
        <li class="t-vi">Dấu vân tay tổ chức (giao dịch khối, tường sổ lệnh) quan trọng hơn bán lẻ</li>
        <li class="t-en">Balance Laws provide quantifiable entry/exit rules — no guesswork</li>
        <li class="t-vi">Balance Laws cung cấp các quy tắc nhập/xuất định lượng — không đoán mò</li>
      </ul>
    </div>
  </div>
</div>

<script>
  // Tab switching functionality
  setTimeout(() => {
    const tabsContainer = document.getElementById('demo-tabs-container');
    if (!tabsContainer) return;

    const tableOfContents = ${JSON.stringify(tableOfContents)};

    tableOfContents.forEach((item, index) => {
      const btn = document.createElement('button');
      btn.className = 'demo-tab-btn' + (index === 0 ? ' active' : '');
      btn.textContent = item.label;
      btn.onclick = () => switchTab(item.id);
      tabsContainer.appendChild(btn);
    });
  }, 100);

  window.switchTab = function(screenId) {
    // Hide all screens
    document.querySelectorAll('.demo-screen').forEach(s => s.classList.remove('active'));
    // Show selected screen
    document.getElementById(screenId)?.classList.add('active');

    // Update active button
    document.querySelectorAll('.demo-tab-btn').forEach((btn, idx) => {
      const screens = ['screen1','screen2','screen3','screen4','screen5','screen6','screen7','screen8'];
      btn.classList.toggle('active', screens[idx] === screenId);
    });
  };
</script>
`;
