/* LWS Freeze Risk Dashboard — i18n dictionary (EN + KR)
 *
 * Every visible string in index.html comes from here. Access via I18N[lang][key].
 * KR terminology sourced from:
 *   - LWS_Knowledge_Base/kb/15-glossary.md
 *   - LWS_Knowledge_Base/kb/06-season-2-frozen.md ("KR ↔ EN terminology" table)
 *
 * Add a new string by adding a key to BOTH en{} and ko{}. Never add English
 * fallback in the DOM — the whole tool must speak Korean if the user toggles.
 */

window.I18N = {
  en: {
    // brand / header
    brand: "R5TOOLS.IO",
    brandSub: "LWS Suite",
    title: "Freeze Risk Dashboard",
    subtitle: "Season 2 (Polar Storm) — live per-member freeze-risk board",
    langToggle: "한국어",

    // alert banner
    alertCalm: "All members safe",
    alertWarnPre: "",
    alertWarnPost: " members in the danger zone (-10 to +10 °C)",
    alertCriticalPre: "",
    alertCriticalPost: " members will freeze in under 5 minutes",
    alertFrozenPre: "",
    alertFrozenPost: " members currently FROZEN — no rally, teleport, or relocation",

    // toolbar
    toolLoadDemo: "Load demo data",
    toolImportCsv: "Import roster CSV",
    toolExportPng: "Export PNG (Discord)",
    toolExportCsv: "Export CSV",
    toolExportJson: "Export JSON",
    toolSortBy: "Sort by",
    toolFilterBy: "Filter",
    sortStatus: "Status (worst first)",
    sortCoal: "Coal hours (lowest first)",
    sortRank: "Rank (R5 first)",
    sortName: "Name",
    filterAll: "All",
    filterFrozen: "Frozen only",
    filterAtRisk: "At risk (imminent + danger)",
    filterSafe: "Safe only",

    // grid columns
    colName: "Member",
    colRank: "Rank",
    colCoord: "Coord",
    colTemp: "Base Temp",
    colCountdown: "Freeze in",
    colCoal: "Coal hrs",
    colFurnace: "Furnace",
    colStatus: "Status",
    colActions: "Actions",

    // status badges
    statusSafe: "Safe",
    statusDanger: "Danger",
    statusImminent: "Imminent",
    statusFrozen: "Frozen",

    // furnace modes
    modeOff: "OFF",
    modeNormal: "NORMAL",
    modeOverdrive: "OVERDRIVE",

    // row actions
    actSeeMap: "See map",
    actSeeHeat: "See heat overlay",
    actEdit: "Edit",

    // empty state
    emptyTitle: "No roster loaded",
    emptyBody: "Import your alliance's roster CSV or click Load demo data to see the dashboard populate.",

    // countdown / units
    unitMin: "min",
    unitHr: "hr",
    unitSec: "sec",
    freezeNow: "NOW",
    coalDepleted: "depleted",

    // KB attribution notes shown in tooltips
    kbFreezeThreshold: "Frozen state = base temp < -20 °C for 5 continuous minutes (KB: Season 2)",
    kbOverdriveBurn: "Overdrive burns ~4× Normal coal rate (KB: Season 2, High-Heat Furnace)",

    // season-aware freeze-mechanics panel
    mechThreshold: "Freeze threshold",
    weekLabel: "Wk",
    noBlizzardsScheduled: "No blizzards on the schedule",
    noFreezeTitle: "No freeze mechanics this season",
    noFreezeBody: "This dashboard is Season-2-specific (Polar Storm). Switch back to Season 2 via the warzone selector to use it.",

    // ---- Per-season titles / subtitles (swapped by applySeasonHeader) ----
    titleS1: "Virus-Stack Risk Dashboard",
    subtitleS1: "Season 1 (Crimson Plague) — per-member RA Virus Stack meter",
    titleS4: "Blood Night Power-Drain Risk Dashboard",
    subtitleS4: "Season 4 (Evernight Isle) — 3×/day power-drain windows",
    titleS3: "Freeze Risk Dashboard",
    subtitleS3: "Season 3 (Golden Kingdom) — no per-member environmental risk",
    titleS5: "Freeze Risk Dashboard",
    subtitleS5: "Season 5 (Wild West) — no per-member environmental risk",
    titleS6: "Freeze Risk Dashboard",
    subtitleS6: "Season 6 (Shadow Rainforest) — no per-member environmental risk",

    // ---- Per-season inactive-copy for #noFreezeNotice ----
    noFreezeBody_s3: "Season 3 (Golden Kingdom) has no per-member environmental countdown. Sandworm Crisis is a warzone-scoped 14-day event (W1–2), and Curse Resistance is a rally-time modifier — not a per-base timer. See the Curse Immunity Tracker sibling tool instead.",
    noFreezeBody_s5: "Season 5 (Wild West) has no per-member environmental countdown. War days are Wed/Sat only, with R5-set Alliance Safe Time immunity (7–15 h) and a full Sunday Truce Day. See the Safe Time Scheduler sibling tool instead.",
    noFreezeBody_s6: "Season 6 (Shadow Rainforest) has no per-member environmental countdown. Risk shifts to permanent City Destruction (attacker +50% IP, defender -100%) and Tuesday-only Altar windows (max 3 held). See the Altar Conquest Planner + Beneath the Ruins Scheduler sibling tools instead.",

    // ---- S1 virus-stack variant ----
    s1MechLabel: "SEASON 1 · CRIMSON PLAGUE",
    s1StackCap: "Virus Stack cap: 100 (Doomed at 100 — no rally / teleport / relocate)",
    s1DoomsdayCycle: "Doomsday cycle: 7-day rotation",
    s1CorruptorNote: "Corruptor infects on hit — Virus Resistance does not block it",
    s1BandSafe: "SAFE (stack 0–40)",
    s1BandDanger: "DANGER (stack 41–70)",
    s1BandImminent: "IMMINENT (stack 71–99)",
    s1BandDoomed: "DOOMED (stack 100)",
    s1ColVirusRes: "Virus Resistance",
    s1ColDoomedIn: "Doomed in",
    s1ColAntivirus: "Antivirus stock hrs",
    s1StubBanner: "S1 STUB · Per-member Virus-Stack compute is coming. This sprint surfaces the key S1 numbers; roster CSVs need a virus_stack column before the grid will populate.",

    // ---- S4 Blood Night variant ----
    s4MechLabel: "SEASON 4 · EVERNIGHT ISLE",
    s4BloodNightHead: "Blood Night · 3× daily · 30 min · 18,000 power/min drain",
    s4Window1: "02:30",
    s4Window2: "10:30",
    s4Window3: "18:30",
    s4WindowNext: "NEXT",
    s4TimeToNext: "Time to next Blood Night",
    s4Stage1: "Stage 1 · Baseline (W1)",
    s4Stage2: "Stage 2 · Oniwagon (W2+)",
    s4Stage3: "Stage 3 · Hunting Oni (W3+)",
    s4Stage4: "Stage 4 · Towards the Light (W8)",
    s4BandSafe: "SAFE (buffer ≥ 30 min)",
    s4BandDanger: "DANGER (15–29 min)",
    s4BandImminent: "IMMINENT (5–14 min)",
    s4BandDrained: "DRAINED (< 5 min)",
    s4ColPowerReserve: "Power Reserve",
    s4ColBloodNightIn: "Blood Night in",
    s4ColDrainBuffer: "Drain buffer min",
    s4StubBanner: "S4 STUB · Per-member Blood Night power-drain compute is coming. This sprint surfaces the 3 daily windows + weekly stage; roster CSVs need a power_reserve column before the grid will populate.",

    // footer
    footerCred: "Powered by the LWS Knowledge Base",
    footerRelatedHead: "Related tools:",
    footerRelHive: "Hive Planner",
    footerRelHeat: "Heat Simulator",
    footerRelCoal: "Coal Burn Calculator",
    footerRelAccess: "Access Codes",
    footerRelDoomsday: "Doomsday Cycle Planner",
    footerRelBlood: "Blood Night Scheduler",
    footerRelCurse: "Curse Immunity Tracker",
    footerRelSafeTime: "Safe Time Scheduler",
    footerRelAltar: "Altar Conquest Planner",
  },

  ko: {
    // brand / header
    brand: "R5TOOLS.IO",
    brandSub: "LWS 스위트",
    title: "동결 위험 대시보드",
    subtitle: "시즌 2 (폴라 스톰) — 멤버별 실시간 동결 위험 보드",
    langToggle: "EN",

    // alert banner
    alertCalm: "전 멤버 안전",
    alertWarnPre: "",
    alertWarnPost: "명이 위험 구간 (-10 ~ +10 °C)에 있습니다",
    alertCriticalPre: "",
    alertCriticalPost: "명이 5분 이내에 얼음 상태에 진입합니다",
    alertFrozenPre: "",
    alertFrozenPost: "명이 현재 냉동 상태 — 집결/순간이동/재배치 불가",

    // toolbar
    toolLoadDemo: "데모 데이터 로드",
    toolImportCsv: "명부 CSV 가져오기",
    toolExportPng: "PNG 내보내기 (디스코드)",
    toolExportCsv: "CSV 내보내기",
    toolExportJson: "JSON 내보내기",
    toolSortBy: "정렬",
    toolFilterBy: "필터",
    sortStatus: "상태 (위험 먼저)",
    sortCoal: "석탄 시간 (적은 순)",
    sortRank: "등급 (R5 먼저)",
    sortName: "이름",
    filterAll: "전체",
    filterFrozen: "냉동만",
    filterAtRisk: "위험 (임박 + 위험)",
    filterSafe: "안전만",

    // grid columns
    colName: "멤버",
    colRank: "등급",
    colCoord: "좌표",
    colTemp: "기지 온도",
    colCountdown: "동결까지",
    colCoal: "석탄 시간",
    colFurnace: "화로",
    colStatus: "상태",
    colActions: "동작",

    // status badges (drawn from kb/06-season-2-frozen.md "KR ↔ EN terminology")
    statusSafe: "안전",
    statusDanger: "위험",
    statusImminent: "임박",
    statusFrozen: "냉동",   // KB 06-season-2-frozen: 얼음 상태 / 냉동

    // furnace modes (KB 06-season-2-frozen: 오버드라이브 / 과부하)
    modeOff: "꺼짐",
    modeNormal: "정상",
    modeOverdrive: "과부하",

    // row actions
    actSeeMap: "지도 보기",
    actSeeHeat: "열지도 보기",   // KB glossary: 열지도 = Thermal map
    actEdit: "편집",

    // empty state
    emptyTitle: "명부가 로드되지 않았습니다",
    emptyBody: "연맹 명부 CSV를 가져오거나 데모 데이터를 로드하여 대시보드를 확인하세요.",

    // countdown / units
    unitMin: "분",
    unitHr: "시간",
    unitSec: "초",
    freezeNow: "지금",
    coalDepleted: "고갈",

    // KB attribution notes shown in tooltips
    kbFreezeThreshold: "냉동 상태 = 기지 온도 < -20 °C 5분 연속 (KB: 시즌 2)",
    kbOverdriveBurn: "과부하는 정상 대비 약 4배 석탄 소모 (KB: 시즌 2, 고열 화로)",

    // season-aware freeze-mechanics panel
    mechThreshold: "동결 임계값",
    weekLabel: "주차",
    noBlizzardsScheduled: "예정된 블리자드 없음",
    noFreezeTitle: "이번 시즌은 동결 메커니즘이 없습니다",
    noFreezeBody: "이 대시보드는 시즌 2 (폴라 스톰) 전용입니다. 워존 선택기를 통해 시즌 2로 전환하세요.",

    // ---- Per-season titles / subtitles ----
    titleS1: "바이러스 스택 위험 대시보드",
    subtitleS1: "시즌 1 (크림슨 플레이그) — 멤버별 RA 바이러스 스택 미터",
    titleS4: "블러드 나이트 파워 드레인 위험 대시보드",
    subtitleS4: "시즌 4 (에버나이트 아일) — 하루 3회 파워 드레인 구간",
    titleS3: "동결 위험 대시보드",
    subtitleS3: "시즌 3 (골든 킹덤) — 멤버별 환경 위험 없음",
    titleS5: "동결 위험 대시보드",
    subtitleS5: "시즌 5 (와일드 웨스트) — 멤버별 환경 위험 없음",
    titleS6: "동결 위험 대시보드",
    subtitleS6: "시즌 6 (섀도우 레인포레스트) — 멤버별 환경 위험 없음",

    // ---- Per-season inactive-copy ----
    noFreezeBody_s3: "시즌 3 (골든 킹덤)에는 멤버별 환경 카운트다운이 없습니다. 샌드웜 크라이시스는 워존 단위 14일 이벤트(1–2주차)이며, 저주 저항은 집결 시점 모디파이어로 기지별 타이머가 아닙니다. 대신 저주 면역 트래커 도구를 사용하세요.",
    noFreezeBody_s5: "시즌 5 (와일드 웨스트)에는 멤버별 환경 카운트다운이 없습니다. 전쟁일은 수/토요일뿐이며, R5가 설정하는 연맹 안전 시간(7–15시간)과 일요일 완전 휴전일이 있습니다. 대신 안전 시간 스케줄러 도구를 사용하세요.",
    noFreezeBody_s6: "시즌 6 (섀도우 레인포레스트)에는 멤버별 환경 카운트다운이 없습니다. 위험은 영구 도시 파괴(공격자 +50% IP, 방어자 -100%)와 화요일 전용 제단(최대 3개 보유)으로 이동합니다. 대신 제단 정복 플래너 + 폐허 아래 스케줄러 도구를 사용하세요.",

    // ---- S1 virus-stack variant ----
    s1MechLabel: "시즌 1 · 크림슨 플레이그",
    s1StackCap: "바이러스 스택 최대치: 100 (100 도달 시 파멸 — 집결/순간이동/재배치 불가)",
    s1DoomsdayCycle: "둠스데이 주기: 7일 순환",
    s1CorruptorNote: "커럽터는 피격 시 감염 — 바이러스 저항으로 차단 불가",
    s1BandSafe: "안전 (스택 0–40)",
    s1BandDanger: "위험 (스택 41–70)",
    s1BandImminent: "임박 (스택 71–99)",
    s1BandDoomed: "파멸 (스택 100)",
    s1ColVirusRes: "바이러스 저항",
    s1ColDoomedIn: "파멸까지",
    s1ColAntivirus: "백신 재고 시간",
    s1StubBanner: "시즌 1 스텁 · 멤버별 바이러스 스택 계산은 준비 중입니다. 이번 스프린트는 시즌 1 핵심 수치만 표시하며, 그리드 표시에는 명부 CSV에 virus_stack 컬럼이 필요합니다.",

    // ---- S4 Blood Night variant ----
    s4MechLabel: "시즌 4 · 에버나이트 아일",
    s4BloodNightHead: "블러드 나이트 · 하루 3회 · 30분 · 분당 18,000 파워 드레인",
    s4Window1: "02:30",
    s4Window2: "10:30",
    s4Window3: "18:30",
    s4WindowNext: "다음",
    s4TimeToNext: "다음 블러드 나이트까지",
    s4Stage1: "1단계 · 기본 (1주차)",
    s4Stage2: "2단계 · 오니와곤 (2주차+)",
    s4Stage3: "3단계 · 오니 사냥 (3주차+)",
    s4Stage4: "4단계 · 빛을 향해 (8주차)",
    s4BandSafe: "안전 (버퍼 ≥ 30분)",
    s4BandDanger: "위험 (15–29분)",
    s4BandImminent: "임박 (5–14분)",
    s4BandDrained: "고갈 (5분 미만)",
    s4ColPowerReserve: "파워 예비량",
    s4ColBloodNightIn: "블러드 나이트까지",
    s4ColDrainBuffer: "드레인 버퍼 분",
    s4StubBanner: "시즌 4 스텁 · 멤버별 블러드 나이트 파워 드레인 계산은 준비 중입니다. 이번 스프린트는 하루 3회 구간과 주간 단계만 표시하며, 그리드 표시에는 명부 CSV에 power_reserve 컬럼이 필요합니다.",

    // footer
    footerCred: "LWS 지식 베이스 기반",
    footerRelatedHead: "관련 도구:",
    footerRelHive: "하이브 플래너",
    footerRelHeat: "히트 시뮬레이터",
    footerRelCoal: "석탄 소모 계산기",
    footerRelAccess: "액세스 코드",
    footerRelDoomsday: "둠스데이 주기 플래너",
    footerRelBlood: "블러드 나이트 스케줄러",
    footerRelCurse: "저주 면역 트래커",
    footerRelSafeTime: "안전 시간 스케줄러",
    footerRelAltar: "제단 정복 플래너",
  },
};

/* Language auto-detect + toggle helpers.
 * Same pattern as LWS_Access_Codes/unlock.html — Korean if browser is ko-*
 * otherwise English. Toggle pill in the top-right flips at any time. */

window.i18nDetectLang = function () {
  var l = (navigator.language || "en").toLowerCase();
  return l.startsWith("ko") ? "ko" : "en";
};

window.i18nApply = function (lang) {
  document.documentElement.lang = lang;
  var dict = window.I18N[lang] || window.I18N.en;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-title");
    if (dict[key] !== undefined) el.title = dict[key];
  });
};
