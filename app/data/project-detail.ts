export interface ProjectProblem {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectDetail {
  title: string;
  subtitle: string;
  tech: string[];
  role: string;
  year: number;
  architecture: string;
  images: string[];
  overview: string;
  problems: ProjectProblem[];
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "fortune-cafe": {
    title: "운세다방 (구 타로프렌즈)",
    subtitle: "운세·타로·사주 전화 상담 플랫폼 유지보수",
    tech: ["Vue", "JavaScript", "Node.js", "REST API", "MySQL"],
    role: "유저 페이지, 선생님 페이지, 관리자 페이지 유지보수 및 API 연동",
    year: 2023,
    images: ["/images/taro/1.png", "/images/taro/2.png", "/images/taro/3.png"],
    architecture: "/images/taro/architecture.JPG",
    overview:
      "운세, 타로, 사주 상담을 전화로 진행할 수 있는 플랫폼입니다. 사용자는 선생님과 전화 상담을 진행하고, 상담 시간에 따라 분당 200원씩 금액이 차감되는 구조입니다.",

    problems: [
      {
        title: "UI와 실제 데이터 연동 불일치",

        problem:
          "일부 유저 페이지, 선생님 페이지, 관리자 페이지는 UI만 구현되어 있었고 실제 데이터베이스와 연결되지 않아 운영 데이터가 정상적으로 표시되지 않는 문제가 있었습니다.",

        solution:
          "API 응답 구조와 화면 데이터를 매핑하여 필요한 데이터를 연결했습니다. 또한 데이터가 없거나 응답이 지연되는 상황에서도 화면이 깨지지 않도록 조건부 렌더링 및 예외 처리를 추가했습니다.",
      },

      {
        title: "상담 후기 및 상담 내역 표시 오류",

        problem:
          "상담 후기와 상담 내역 데이터가 사용자 화면 흐름과 맞지 않거나 일부 데이터가 정상적으로 노출되지 않는 문제가 발생했습니다.",

        solution:
          "후기 및 상담 내역 API의 응답 데이터를 확인하고, 사용자 유형에 따라 필요한 정보가 올바르게 렌더링되도록 화면 로직을 수정했습니다.",
      },

      {
        title: "관리자 페이지 선생님 승인 기능 오류",

        problem:
          "타로 및 사주 상담 선생님이 승인 요청 후, 관리자 페이지에서 승인 버튼을 눌러도 상담 권한이 정상적으로 부여되지 않는 문제가 있었습니다.",

        solution:
          "선생님 승인 관련 API와 백엔드 권한 처리 로직을 확인하고, 권한 상태값이 정상적으로 반영되도록 수정했습니다.",
      },

      {
        title: "상담 종료 후 포인트 차감 미반영",

        problem:
          "전화 상담 종료 후 상담 시간에 따라 포인트가 차감되어야 했지만, 일부 상황에서 포인트 차감이 정상적으로 처리되지 않는 문제가 발생했습니다.",

        solution:
          "외부 연동사(MTONET)와 협업하여 상담 시간 및 차감 포인트 데이터를 확인했고, DB에 저장되는 포인트 처리 흐름을 검증하여 정상적으로 차감되도록 수정했습니다.",
      },

      {
        title: "인기 선생님 추천 로직 오류",

        problem:
          "상담 횟수와 상담 가능 상태를 기준으로 인기 선생님이 노출되어야 했지만, 실제로는 무작위로 노출되는 문제가 있었습니다.",

        solution:
          "인기 선생님 필터링에 사용되는 상담 횟수 및 선생님 연결 상태 관련 백엔드 로직을 확인했고, 누락된 데이터 연결을 수정하여 조건에 맞는 선생님이 정상적으로 노출되도록 개선했습니다.",
      },
    ],
  },

  "golf-reservation": {
    title: "스크린골프 예약 플랫폼",
    subtitle: "스크린골프장 Room 예약 시스템",

    tech: ["Vue", "JavaScript", "REST API", "CSS"],

    role: "프론트엔드 전반 담당",
    year: 2023,
    images: [
      "/images/golf/1.png",
      "/images/golf/2.png",
      "/images/golf/3.png",
      "/images/golf/4.jpg",
    ],
    architecture: "/images/golf/architecture.JPG",

    overview:
      "스크린골프장의 Room을 날짜와 시간에 맞춰 예약할 수 있는 플랫폼입니다.",

    problems: [
      {
        title: "예약된 Room 중복 예약 방지 처리",

        problem:
          "예약 화면에서 이미 예약된 시간과 Room에 대해 중복 예약이 가능했던 문제가 있었습니다. 예약 가능 여부에 대한 예외 처리가 부족해 사용자가 예약 불가능한 Room에도 접근할 수 있었습니다.",

        solution:
          "curl을 활용해 예약 API 응답 데이터를 직접 확인하고, 예약 상태값을 기준으로 이미 예약된 시간 및 Room은 선택할 수 없도록 비활성화 처리했습니다.",
      },

      {
        title: "대회 개설 정보 일부 미노출",

        problem:
          "대회 개설 후 사용자 화면에 표시되어야 하는 일부 정보가 정상적으로 노출되지 않는 문제가 발생했습니다.",

        solution:
          "curl을 사용해 GET API 응답 데이터를 확인하고, 누락된 데이터 필드를 분석했습니다. 이후 백엔드 개발자와 협업하여 필요한 데이터를 추가로 전달받아 정상적으로 렌더링되도록 수정했습니다.",
      },

      {
        title: "대회 참가 조건 검증 오류",

        problem:
          "대회 참가 시 나이 제한 조건이 존재했지만, 조건과 일치하지 않는 사용자도 참가 신청이 가능한 문제가 있었습니다.",

        solution:
          "참가 조건 검증 로직을 분석한 결과, 특정 나이대 범위 처리 방식에서 비교 오류가 발생하고 있었습니다. 연령 범위 조건에 맞는 사용자만 참가할 수 있도록 검증 로직을 수정했습니다.",
      },

      {
        title: "대회 코스 홀 수 유효성 검증 누락",

        problem:
          "대회 개설 시 홀(Hole) 개수는 9홀 또는 18홀만 허용되어야 했지만, 별도의 유효성 검증이 없어 8홀과 같은 비정상적인 값으로도 대회 생성이 가능한 문제가 있었습니다.",

        solution:
          "프론트엔드 입력 검증 로직을 추가하여 9홀 또는 18홀 이외의 값이 입력될 경우 Alert 메시지를 표시하고 대회 생성이 진행되지 않도록 처리했습니다.",
      },
    ],
  },

  ticketing: {
    title: "콘서트 티켓 예매 플랫폼",

    subtitle: "Next.js 기반 콘서트 티켓 예매 개인 프로젝트",

    tech: ["Next.js", "TypeScript", "Zustand", "PostgreSQL"],

    role: "기획, UI 구현, 예매 플로우 개발",
    year: 2025,
    images: [
      "/images/concert/1.png",
      "/images/concert/2.png",
      "/images/concert/3.png",
    ],
    architecture: "",

    overview:
      "콘서트 예매 과정을 날짜 선택, 회차 선택, 좌석 선택 흐름으로 구현한 프로젝트입니다.",

    problems: [
      {
        title: "좌석 선택 상태 관리",

        problem:
          "날짜, 회차, 좌석, 가격 등 예매 단계가 많아지면서 컴포넌트 간 상태 전달이 복잡해지고 상태 동기화 문제가 발생했습니다.",

        solution:
          "Zustand를 도입해 예매 관련 상태를 전역으로 관리하였고, 단계별 데이터를 하나의 store에서 처리하도록 구조를 개선했습니다.",
      },
      {
        title: "SVG 공연장 구역별 가격 설정",

        problem:
          "SVG 업로드 후 좌석 단위로 가격을 처리하고 있어 공연장 구역(VIP, R석 등) 기준 가격 정책과 충돌하는 문제가 발생했습니다.",

        solution:
          "기존 좌석 단위 가격 로직을 제거하고, SVG 구역 정보를 기준으로 가격을 매핑하는 방식으로 리팩토링하여 구역별 가격 설정이 가능하도록 구현했습니다.",
      },
      {
        title: "공연장 좌석 배치 처리",

        problem:
          "공연장마다 좌석 구조가 달라 빈 공간이 필요한 배치에서도 좌석이 자동으로 왼쪽부터 정렬되는 문제가 있었습니다.",

        solution:
          "좌석 데이터 생성 시 빈 공간 데이터도 함께 포함하여 전달하고, 렌더링 단계에서도 동일하게 처리해 실제 공연장 형태와 동일한 좌석 배치가 가능하도록 구현했습니다.",
      },
    ],
  },
  "the-bakers-atelier": {
    title: "The Bakers Atelier",

    subtitle: "유럽풍 제과·제빵 레시피 웹 프로젝트",

    tech: ["HTML", "CSS", "JavaScript", "AJAX", "Spoonacular API"],

    role: "기획, UI 디자인, 애니메이션 및 API 연동 구현",
    year: 2024,
    images: [
      "/images/cake/1.png",
      "/images/cake/2.png",
      "/images/cake/3.png",
      "/images/cake/4.PNG",
    ],
    architecture: "",

    overview:
      "유럽풍 베이지 & 초콜릿 테마를 기반으로 제작한 제과·제빵 레시피 웹 프로젝트입니다. SVG 케이크와 촛불 애니메이션을 활용한 인트로 화면, Spoonacular API 기반 레시피 조회, 파티클 및 연기 효과 등 감성적인 UI/UX를 구현했습니다.",

    problems: [
      {
        title: "외부 레시피 API와 로컬 데이터 병합",

        problem:
          "Spoonacular API에서 가져온 외부 레시피 데이터와 직접 작성한 로컬 레시피 데이터를 하나의 리스트에서 함께 관리해야 했습니다.",

        solution:
          "AJAX 기반 비동기 요청으로 외부 데이터를 fetch한 뒤, 로컬 레시피 배열과 concat하여 통합 리스트를 생성했습니다. 이후 공통 렌더링 구조를 적용해 동일한 UI에서 출력되도록 구현했습니다.",
      },

      {
        title: "파티클 및 분위기 연출",

        problem:
          "단순한 정적 화면보다 유럽풍 디저트 분위기를 강조할 수 있는 감성적인 인터랙션이 필요했습니다.",

        solution:
          "JavaScript로 황금빛 파티클 요소를 동적으로 생성하고, 랜덤한 위치·크기·딜레이 값을 적용해 자연스럽게 떠오르는 애니메이션 효과를 구현했습니다. 또한 radial-gradient와 drop-shadow를 활용해 초콜릿 톤의 분위기를 강조했습니다.",
      },

      {
        title: "Papago API 번역 기능 구현 실패",

        problem:
          "Spoonacular API의 영문 레시피 데이터를 Papago API를 통해 한국어로 자동 번역하려 했지만, GitHub Pages 기반 정적 환경에서는 API Key 노출 및 CORS 문제가 발생했습니다.",

        solution:
          "Papago API의 서버 사이드 제한 사항을 분석하고, 정적 환경에서는 직접 호출이 어렵다는 점을 확인했습니다. 이후 Node.js 기반 프록시 서버 또는 Google Apps Script를 활용한 우회 방식을 개선 방향으로 정리했습니다.",
      },
    ],
  },

  "dementia-analysis": {
    title: "치매 환자 수 vs 요양시설 정원 분석",

    subtitle: "공공데이터 기반 지역별 요양시설 수요·공급 분석 프로젝트",

    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Folium"],

    role: "데이터 전처리, 분석 및 시각화 구현",
    year: 2025,
    images: [
      "/images/dementia/1.png",
      "/images/dementia/2.png",
      "/images/dementia/3.png",
    ],
    architecture: "",
    overview:
      "공공데이터를 활용하여 지역별 노인 인구, 추정 치매 환자 수, 요양시설 정원을 비교 분석한 프로젝트입니다. 데이터 전처리 및 병합, 지도 시각화와 그래프 분석을 통해 지역별 요양시설 수요-공급 불균형을 분석했습니다.",

    problems: [
      {
        title: "행정구역 데이터 불일치",

        problem:
          "시설 데이터와 치매 데이터의 행정구역 명칭이 서로 달라 동일 지역임에도 데이터가 정상적으로 매핑되지 않는 문제가 발생했습니다.",

        solution:
          "전라북도 → 전북특별자치도, 강원도 → 강원특별자치도 등 행정구역 명칭을 통일하는 전처리 로직을 추가하여 지역 기준 데이터가 정상적으로 병합되도록 수정했습니다.",
      },

      {
        title: "기관코드 타입 불일치로 인한 병합 오류",

        problem:
          "facility 데이터와 resident 데이터 병합 과정에서 기관코드의 자료형이 object와 int64로 서로 달라 merge 오류가 발생했습니다.",

        solution:
          "병합 전 기관코드를 문자열 타입으로 통일하고 불필요한 공백 및 결측값을 정리하여 장기요양기관코드 기준으로 안정적으로 병합할 수 있도록 처리했습니다.",
      },

      {
        title: "지역별 요양시설 수요·공급 분석",

        problem:
          "단순히 치매 환자 수만 비교하는 것으로는 실제 시설 부족 여부를 판단하기 어려웠습니다.",

        solution:
          "총정원, 총현원, 수용률, 부족인원 등의 지표를 계산하여 지역별 수요-공급 상태를 정량적으로 분석했습니다. 이후 부족 지역과 적정 지역을 시각적으로 비교할 수 있도록 그래프 및 지도 형태로 시각화했습니다.",
      },

      {
        title: "전국 단위 시각화 및 한글 깨짐 문제",

        problem:
          "Matplotlib 시각화 과정에서 한글 폰트가 깨지고 일부 그래프가 서울 지역 중심으로만 출력되는 문제가 있었습니다.",

        solution:
          "Malgun Gothic 및 Nanum Gothic 폰트를 적용하여 한글 깨짐 문제를 해결했고, 전국 데이터를 기준으로 집계 로직을 수정하여 모든 지역 데이터가 시각화되도록 개선했습니다.",
      },
    ],
  },
  "kitchen-fresh": {
    title: "KitchenFresh",

    subtitle: "OCR 기반 스마트 식재료 관리 Windows 애플리케이션",

    tech: [
      "C#",
      "WinForms",
      "Supabase",
      "Google Vision API",
      "AForge",
      "Food Safety API",
    ],

    role: "기획, UI 개발, OCR 연동, 레시피 추천 기능 구현",

    year: 2024,

    images: [
      "/images/kitchenfresh/1.png",
      "/images/kitchenfresh/2.png",
      "/images/kitchenfresh/3.png",
    ],
    architecture: "/images/kitchenfresh/architecture.JPG",

    overview:
      "냉장고 속 식재료를 효율적으로 관리할 수 있도록 개발한 Windows WinForms 기반 애플리케이션입니다. 카메라 또는 이미지 업로드를 통해 식품 포장지의 유통기한을 OCR로 자동 인식하고, 임박한 식재료에 대한 알림과 레시피 추천 기능을 제공합니다.",

    problems: [
      {
        title: "OCR 인식률 저하 문제",

        problem:
          "초기에는 Tesseract OCR을 사용해 식품 포장지의 유통기한을 인식했지만, 다양한 포장 디자인과 인쇄 상태로 인해 인식률이 낮고 오인식이 자주 발생했습니다.",

        solution:
          "Google Cloud Vision API로 OCR 엔진을 교체하여 한국어와 영어가 혼합된 식품 포장지에서도 높은 인식률을 확보했습니다. 이를 통해 유통기한 자동 등록 정확도를 크게 향상시켰습니다.",
      },

      {
        title: "다양한 날짜 형식 파싱 문제",

        problem:
          "국내 식품과 해외 식품은 유통기한 표기 방식이 달라 단일 날짜 파싱 로직으로는 정상적인 인식이 어려웠습니다.",

        solution:
          "정규식을 활용하여 YY.MM.DD, YYYY-MM-DD, DD.MM.YYYY 등 다양한 날짜 형식을 지원하도록 개선하고, 외국 식품 모드를 추가하여 국가별 날짜 형식에 대응했습니다.",
      },

      {
        title: "유통기한 임박 식재료 관리",

        problem:
          "사용자가 식재료의 유통기한을 직접 확인해야 했기 때문에 임박 식재료를 놓치거나 폐기하는 경우가 많았습니다.",

        solution:
          "앱 실행 시 모든 식재료의 유통기한을 자동 검사하도록 구현하고, 만료 및 1~3일 이내 만료 예정 식재료를 별도 알림 화면으로 표시하여 사용자가 즉시 확인할 수 있도록 개선했습니다.",
      },

      {
        title: "유통기한 임박 재료 활용도 부족",

        problem:
          "사용자는 어떤 재료가 곧 만료되는지 확인할 수 있어도 해당 재료를 활용한 요리를 찾는 과정이 번거로웠습니다.",

        solution:
          "식품의약안전처 레시피 DB와 연동하여 임박 식재료를 기반으로 레시피를 자동 검색하고, 조리 순서와 칼로리 정보까지 함께 제공하도록 구현했습니다.",
      },

      {
        title: "조리순서 번호 중복 출력",

        problem:
          "레시피 API 응답 데이터에 이미 번호가 포함되어 있었지만 화면 렌더링 시 번호를 다시 추가하여 '2. 2. 내용'과 같은 중복 문제가 발생했습니다.",

        solution:
          "정규식을 활용해 기존 번호를 제거한 후 순서를 재정렬하여 사용자에게 자연스러운 조리 과정을 제공하도록 수정했습니다.",
      },

      {
        title: "API 사용량 제한 관리",

        problem:
          "Google Vision API는 무료 사용량 제한이 존재하여 과도한 OCR 요청이 발생할 경우 비용이 발생할 수 있었습니다.",

        solution:
          "일별 OCR 사용량을 별도 테이블에 저장하고 하루 최대 20건으로 제한하여 무료 사용량 범위 내에서 안정적으로 운영할 수 있도록 구현했습니다.",
      },
    ],
  },
  "baby-monitor": {
    title: "AI 아기 수면 안전 모니터링",

    subtitle: "컴퓨터 비전 및 오디오 AI 기반 실시간 위험 감지 시스템",

    tech: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "YAMNet"],

    role: "기획, AI 모델 연동, 위험 감지 로직 구현",

    year: 2025,

    images: [
      "/images/baby-monitor/1.png",
      "/images/baby-monitor/2.png",
      "/images/baby-monitor/3.png",
    ],
    architecture: "",

    overview:
      "웹캠과 마이크를 활용하여 아기의 수면 중 위험 상황을 실시간으로 감지하는 AI 모니터링 시스템입니다. MediaPipe를 이용한 자세 및 얼굴 인식, OpenCV 기반 움직임 분석, YAMNet 오디오 AI 모델을 활용한 울음소리 감지를 통해 부모가 즉시 위험 상황을 인지할 수 있도록 구현했습니다.",

    problems: [
      {
        title: "엎드림 자세 감지",

        problem:
          "아기가 엎드려 자는 경우 질식 위험이 높아지지만 단순 영상만으로는 자동 판단이 어려웠습니다.",

        solution:
          "MediaPipe Pose를 활용하여 코와 어깨의 가시성 및 z축 좌표 변화를 분석했습니다. 이를 통해 엎드린 자세의 특징을 추출하여 위험 상황을 자동 감지할 수 있도록 구현했습니다.",
      },

      {
        title: "얼굴 가려짐 감지",

        problem:
          "이불이나 베개에 의해 얼굴이 가려지는 경우 질식 위험이 발생할 수 있지만 부모가 항상 모니터링하기는 어려웠습니다.",

        solution:
          "MediaPipe Face Detection을 이용해 얼굴 감지 여부를 지속적으로 확인하고, 3초 이상 얼굴이 인식되지 않을 경우 위험 상황으로 판단하여 경고를 표시하도록 구현했습니다.",
      },

      {
        title: "움직임 없음 감지",

        problem:
          "장시간 움직임이 없는 경우 건강 이상 상황일 수 있지만 단순 프레임 비교만으로는 오탐지가 자주 발생했습니다.",

        solution:
          "OpenCV 프레임 차분 기법을 적용하고 민감도 임계값을 조정하여 미세 움직임은 허용하면서도 20초 이상 움직임이 없는 경우에만 경고가 발생하도록 개선했습니다.",
      },

      {
        title: "낙상 위험 감지",

        problem:
          "침대나 놀이 매트에서 아기가 화면 밖으로 갑자기 사라지는 경우 낙상 가능성을 판단해야 했습니다.",

        solution:
          "기존에 감지되던 Pose Landmark가 갑자기 사라지는 상황을 추적하고, 일정 시간 이상 감지가 중단될 경우 낙상 위험 이벤트로 판단하도록 구현했습니다.",
      },

      {
        title: "아기 울음소리 분류",

        problem:
          "일반 생활 소음과 실제 아기 울음소리를 구분해야 했으며 단순 음량 기준으로는 정확도가 낮았습니다.",

        solution:
          "Google의 YAMNet 모델을 활용하여 521개 사운드 클래스를 분류하고, Baby Cry 클래스의 확률값을 기반으로 울음소리를 감지하도록 구현했습니다.",
      },

      {
        title: "멀티모달 위험 감지 통합",

        problem:
          "영상 기반 위험 감지와 오디오 기반 위험 감지를 각각 처리하다 보니 시스템 구조가 복잡해지고 상태 관리가 어려웠습니다.",

        solution:
          "영상 분석 스레드와 오디오 분석 스레드를 분리하고, 위험 이벤트를 중앙 상태 관리 객체로 통합하여 여러 위험 상황을 동시에 감지하고 화면에 표시할 수 있도록 구조를 개선했습니다.",
      },
    ],
  },
  "allergysafe-baby": {
    title: "AllergySafe Baby",

    subtitle: "아기 수유·이유식 기록 및 알림 관리 REST API 서버",

    tech: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Supabase",
      "Swagger",
      "Web Push",
    ],

    role: "백엔드 설계, 데이터 모델링, API 개발",

    year: 2025,

    images: [
      "/images/allergysafe/1.png",
      "/images/allergysafe/2.png",
      "/images/allergysafe/3.png",
    ],
    architecture: "/images/allergysafe/architecture.JPG",
    overview:
      "아기의 수유 및 이유식 기록을 관리하고, 보호자가 설정한 주기에 따라 알림을 제공하는 NestJS 기반 REST API 서버입니다. JWT 인증, Prisma ORM, PostgreSQL(Supabase), Web Push 알림, Cron 스케줄러를 활용하여 백엔드 전반을 설계 및 구현했습니다.",

    problems: [
      {
        title: "아기 개월수 자동 계산",

        problem:
          "이유식 가이드와 성장 단계 기능을 제공하기 위해서는 생년월일 기준의 현재 개월수를 실시간으로 계산해야 했습니다.",

        solution:
          "Baby 엔티티의 birthDate를 기준으로 현재 날짜와의 차이를 계산하여 ageMonths 값을 동적으로 생성하고 API 응답에 포함하도록 구현했습니다.",
      },

      {
        title: "수유 및 이유식 통계 집계",

        problem:
          "단순 기록 조회만으로는 보호자가 하루 섭취 현황을 파악하기 어려웠습니다.",

        solution:
          "Prisma Aggregate 기능을 활용하여 하루 수유 횟수, 총 수유량, 이유식 섭취량 및 메뉴 목록을 집계하는 통계 API를 구현했습니다.",
      },

      {
        title: "JWT 기반 인증 시스템 구축",

        problem:
          "사용자별 아기 정보와 기록 데이터를 안전하게 분리하기 위한 인증 체계가 필요했습니다.",

        solution:
          "Passport JWT 전략을 적용하여 로그인 시 Access Token을 발급하고, 인증된 사용자만 자신의 아기 정보와 기록을 조회할 수 있도록 권한 검증 로직을 구현했습니다.",
      },

      {
        title: "주기형 및 고정시간 알림 지원",

        problem:
          "사용자마다 원하는 알림 방식이 달라 단순 시간 기반 알림만으로는 다양한 요구사항을 충족하기 어려웠습니다.",

        solution:
          "interval 모드와 fixed 모드를 분리하여 마지막 수유 시각 기준 반복 알림과 특정 시간 알림을 모두 지원하도록 설계했습니다.",
      },

      {
        title: "푸시 알림 중복 발송 문제",

        problem:
          "Cron 스케줄러가 매분 실행되기 때문에 동일한 이벤트에 대해 알림이 반복 발송될 가능성이 있었습니다.",

        solution:
          "NotificationLog 테이블을 활용하여 최근 발송 이력을 저장하고, 동일 조건의 알림은 10분 이내 중복 발송되지 않도록 검증 로직을 추가했습니다.",
      },

      {
        title: "브라우저 푸시 알림 연동",

        problem:
          "웹 서비스 특성상 앱 설치 없이도 보호자에게 실시간 알림을 전달할 방법이 필요했습니다.",

        solution:
          "Web Push와 VAPID 키 기반 인증을 적용하여 브라우저 푸시 알림 기능을 구현했습니다. 사용자의 구독 정보를 저장하고, 조건 충족 시 모든 등록 기기로 알림을 발송하도록 개발했습니다.",
      },

      {
        title: "API 문서화 및 협업 효율 개선",

        problem:
          "프론트엔드와 협업 시 API 명세가 정리되어 있지 않아 테스트와 연동 과정이 비효율적이었습니다.",

        solution:
          "Swagger를 적용하여 API 스펙, 요청·응답 예시, 인증 방식을 자동 문서화하고 프론트엔드 개발자가 쉽게 테스트할 수 있는 환경을 제공했습니다.",
      },
    ],
  },
};

export type ProjectId = keyof typeof PROJECT_DETAILS;
