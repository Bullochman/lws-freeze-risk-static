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

    // footer
    footerCred: "Powered by the LWS Knowledge Base",
    footerRelatedHead: "Related tools:",
    footerRelHive: "Hive Planner",
    footerRelHeat: "Heat Simulator",
    footerRelCoal: "Coal Burn Calculator",
    footerRelAccess: "Access Codes",
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

    // footer
    footerCred: "LWS 지식 베이스 기반",
    footerRelatedHead: "관련 도구:",
    footerRelHive: "하이브 플래너",
    footerRelHeat: "히트 시뮬레이터",
    footerRelCoal: "석탄 소모 계산기",
    footerRelAccess: "액세스 코드",
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
