export const project8 = {
  name: 'ssthing',
  pointcolor: 'before:bg-[#373737]',
  title: '우주를 테마로 한 회사 소개 사이트',
  subtext:
    '우주를 테마로 한 회사 소개 홈페이지입니다.\n디자인 시안을 Figma로 확인하며 제시한 기한 내에 최대한 클라이언트가 요구한 기능을 작업하려고 했습니다.',
  data: '2023.10 - 약 3일',
  team: '2인 (프론트엔드 2명)',
  tag: ['팀', '반응형', '퍼블리싱'],
  depoloyurl: 'https://ssting.io/',
  tools: [
    {
      title: 'React',
      detail:
        'React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.',
    },
    {
      title: 'TypeScript',
      detail:
        'TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.',
    },
    {
      title: 'Styled Components',
      detail:
        'Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다.',
    },
  ],
  featinfo: [
    '우주를 컨셉으로한 홈페이지로 이미지 요소가 많음',
    '네비게이션 메뉴 클릭 시 메인 화면에서 특정 위치로 부드럽게 이동',
    'localStorage를 활용해 서브 페이지에서도 네비게이션 메뉴 클릭 시 메인 화면의 특정 위치로 이동',
  ],
  parts: [
    {
      title: '헤더, 네비게이션 메뉴 작업',
      detail:
        '각 메뉴 클릭 시 해당 섹션으로 부드럽게 이동 되도록 구현하였습니다.\n\n더불어, 서브 페이지에서도 해당 메뉴 클릭 시 메인 페이지에서 해당 위치로 자동 이동 되도록 localStorage에 위치를 저장하는 기능을 추가했습니다. 이를 통해 사용자 경험을 향상시켰습니다.\n\n또한, 불필요한 저장을 막기 위해 setTimeout 메서드를 활용해 특정 위치에 도달한 후 지정된 시간이 지나면 자동으로 해당 위치 정보를 삭제하도록 조치했습니다.',
    },
    {
      title: '이미지 최적화 작업',
      detail:
        '이미지 요소가 많은 웹 사이트로 이미지 확장자를 webp로 변경하고, 용량 감소를 진행했습니다.\n이를 통해 초기 로딩 속도는 물론 사용자 경험을 향상시켰습니다.',
    },
    {
      title: '웹 표준 / 접근성 고려 및 퍼블리싱',
      detail:
        '디자인된 웹 페이지를 마크업하여 웹 표준을 준수하고 웹 접근성을 고려하여 프로젝트를 진행했습니다.\n\n각 섹션을 팀원과 협업해 PC 부터 Mobile까지 고려한 반응형 웹으로 개발했습니다.\n\n또한 디자이너가 요구한 디자인 시안을 정확히 이해하고, 섬세한 배경 위치 조절을 통해 완성도 높은 디자인을 구현했습니다.',
    },
  ],
  trouble: [
    {
      title: '서브 페이지에서 nav메뉴 클릭 시 메인 화면 특정 영역으로 이동 해야하는 점',
      detail:
        'nav 메뉴는 메인, 서브 페이지 공통으로 사용하고 있었습니다.\n서브 페이지에서 메인 화면의 특정 영역으로 이동하기 위해서는 데이터를 저장 후 전달해야 했지만 간단한 프로젝트로 상태 라이브러리를 사용하고 있지 않았습니다.\n\nlocalStrage를 활용해 특정 영역의 id값을 저장하고 이동되도록 했습니다. 이후 localStrage에 저장된 값을 setTimeout 메서드를 활용해 특정 영역 도착 후 삭제 되도록 작업해 불필요한 저장 공간 사용을 막았습니다.',
    },
    {
      title: '이미지 요소가 많아 초기 로딩 속도가 느렸던 이슈',
      detail:
        '이미지 요소가 많아 초기 로딩 속도가 느렸습니다.\n\n이를 개선하기 위해 변경하기 어려운 요소는 디자이너에게 요청하고, 이미지는 확장자를 webp로 변환 및 용량 감소를 통해 초기 로딩 속도를 개선할 수 있었습니다.\n\n비록 마무리된 프로젝트지만 img 태그에 loading="lazy"속성을 추가해 뷰포트에 보이지 않는 이미지 요소의 로딩 속도를 지연하는 방법도 사용했을 것 같습니다.',
    },
  ],
};
