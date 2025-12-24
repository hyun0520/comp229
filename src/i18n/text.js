export const text = {
  /*about page and nav bar*/
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      service: "Service"
    },
    home: {
      title: "WELCOME",
      intro: "As a student, I'm working toward becoming a skilled full-stack web developer.",
      contact: "ABOUT"
    },
    about: {
    title: "About Me",
    nameLabel: "Name:",
    name: "Chung-hyun Lee",
    ageLabel: "Age:",
    age: "May 20, 1999",
    bloodLabel: "Blood type:",
    blood: "O RH+",
    strengthLabel: "Strength:",
    strength: "I have completed my military service, which has strengthened my discipline and sense of responsibility. I am a dedicated and reliable individual who is ready to contribute to any team with a strong work ethic and a positive attitude.",
    resume: "RESUME"
    },
    contact: {
    title: "CONTACT",
    address: "Gyeonggi-do, Republic of Korea",
    form: "Contact Form"
    },
    projects: {
      title: "Projects",
      cards: [
        {
          title: "Portfolio Project",
          role: "Role: developer",
          tech: "Tech Stack: React.js, React Router, JavaScript(ES6+), JSX, vite CSS3, Context API, Responsive",
          conclusion: "This is a responsive personal portfolio website built with React and Vite, featuring bilingual support (English/Korean) and dynamic resume download functionality. The site emphasizes a clean UI, structured project data presentation, and a smooth user experience through global state management and optimized styling.",
          demo: "https://chunghyunleeportfolio.netlify.app/",
          github: "https://github.com/hyun0520/comp229"
        },
        {
          title: "FlickBuzz Project",
          role: "Role: developer",
          tech: "Tech Stack: Node.js, Express.js, JavaScript, MongoDB, Mongoose, JWT, bcrypt, MVC Architecture, REST API",
          conclusion: "This project is a movie review web application developed as a team project using React and Node.js. The backend is built with Express.js, where I implemented core security features such as JWT-based login and user authentication, role validation, and password hashing using bcrypt. Using MongoDB and Mongoose, the system structurally manages movie, user, and review data. The backend follows an MVC architecture, separating controllers, models, and routes to improve scalability and maintainability. The application provides stable client–server communication through a well-designed REST API, resulting in a fully functional full-stack web application.",
          demo: "https://your-flickbuzz-link.com",
          github: "https://github.com/JalenNM/COMP229-S25-Group2Coders"
        },
        {
          title: "Morae-al Publication",
          role: "Role: developer",
          tech: "Tech Stack: React.js, React Router, JavaScript(ES6), Node.js, Vite, CSS3(Responsive)",
          conclusion: "This website displays book data from BooksData, showing the five newest books on the Home page and the full list on the Details page. Book details open in a popup with tabbed sections (introduction, author, table of contents). The project includes purchase link integration, responsive design, and a React Router-based page structure for a smooth publishing-style user experience.",
          demo: "https://moraeal.netlify.app/",
          github: "https://github.com/hyun0520/moraeal"
        },
        {
          title: "Check My Assets Project",
          role: "Role: developer",
          tech: "Tech Stack: React.js, React Router, JavaScript (ES6+), CSS3 (Responsive), Recharts, Axios, Node.js, Express.js, RESTful API, JWT Authentication, MongoDB, Mongoose, External Stock/Crypto/FX APIs, Vite, Git, GitHub, Netlify, Render",
          conclusion: "Check My Assets is a personal asset management web application designed to integrate and manage Korean stocks, U.S. stocks, and cryptocurrencies within a single dashboard by directly implementing a React-based frontend and a Node.js + Express-based RESTful API server, where the backend provides CRUD APIs for portfolio assets and secures user-specific data through JWT authentication, while the frontend periodically fetches real-time market data via REST APIs and visualizes portfolio value, profit/loss, and returns in an intuitive and responsive interface.",
          demo: "https://moraeal.netlify.app/",
          github: "https://github.com/hyun0520/moraeal"
        }
      ]
    }
  },

  ko: {
    nav: {
      home: "홈",
      about: "소개",
      projects: "프로젝트",
      contact: "문의",
      service: "서비스"
    },
    home: {
      title: "환영합니다",
      intro: "저는 숙련된 풀스택 웹 개발자가 되기 위해 학습 중인 학생입니다.",
      contact: "ABOUT"
    },
    about: {
    title: "About Me",
    nameLabel: "이름:",
    name: "이충현",
    ageLabel: "생년월일:",
    age: "1999년 5월 20일",
    bloodLabel: "혈액형:",
    blood: "O형 RH+",
    strengthLabel: "강점:",
    strength: "군 복무를 성실히 마치며 책임감과 성실함을 기를 수 있었습니다. 맡은 일에 최선을 다하며, 어떤 팀에서도 긍정적인 태도와 강한 업무 윤리로 기여할 준비가 되어 있습니다.",
    resume: "이력서"
    },
    contact: {
    title: "CONTACT",
    address: "경기도 고양시 일산동구 노루목로 79",
    form: "Contact Form"
    },
    projects: {
      title: "Projects",
      cards: [
        {
          title: "포트폴리오 프로젝트",
          role: "역할: 개발자",
          tech: "기술스택: React.js, React Router, JavaScript(ES6+), JSX, vite CSS3, Context API, Responsive",
          conclusion: "React와 Vite 기반으로, 다국어 지원과 동적 Resume 다운로드 기능을 포함한 반응형 개인 포트폴리오 사이트를 개발했습니다. Projects 카드 데이터의 구조화, Context 기반 글로벌 상태관리, 스타일 최적화를 통해 사용자 경험을 중점적으로 설계한 웹 애플리케이션입니다.",
          demo: "https://chunghyunleeportfolio.netlify.app/",
          github: "https://github.com/hyun0520/comp229"
        },
        {
          title: "FlickBuzz 프로젝트",
          role: "역할: 개발자",
          tech: "기술스택: Node.js, Express.js, JavaScript, MongoDB, Mongoose, JWT, bcrypt, MVC Architecture, REST API",
          conclusion: " React와 Node.js 기반으로 팀 프로젝트로 제작한 영화 리뷰 웹사이트입니다. 서버는 Express.js로 구축하였으며, JWT 기반 로그인/회원 인증, 유저 권한 검증, 비밀번호 암호화(bcrypt) 등 보안 기능을 직접 구현했습니다. MongoDB와 Mongoose를 활용해 영화·유저·리뷰 정보를 구조적으로 관리하고, MVC 패턴을 따라 컨트롤러/모델/라우터를 분리하여 확장성과 유지보수성을 높였습니다. REST API 설계를 통해 클라이언트와 안정적으로 데이터 통신이 가능하도록 구성된 풀스택 웹 애플리케이션입니다.",
          demo: "https://your-flickbuzz-link.com",
          github: "https://github.com/JalenNM/COMP229-S25-Group2Coders"
        },
        {
          title: "도서출판 모래알",
          role: "역할: 개발자",
          tech: "기술스택: React.js, React Router, JavaScript(ES6), Node.js, Vite, CSS3(Responsive)",
          conclusion: "이 웹사이트는 BooksData를 기반으로 도서를 렌더링하며, 홈에서는 최신 도서 5권만 보여주고 Details에서는 전체 도서를 확인할 수 있습니다. 도서는 팝업(BookPopup) 방식으로 상세 정보(책 소개/저자 소개/목차)를 탭 UI로 제공합니다. 구매 버튼 연동, 반응형 디자인 적용, React Router 기반 페이지 구성으로 출판 사이트에 최적화된 사용자 경험을 구현했습니다.",
          demo: "https://moraeal.netlify.app/",
          github: "https://github.com/hyun0520/moraeal"
        },
        {
          title: "체크마이에셋 주식 확인 프로그램",
          role: "역할: 개발자",
          tech: "기술스택: React.js, React Router, JavaScript (ES6+), CSS3 (Responsive), Recharts, Axios, Node.js, Express.js, RESTful API, JWT Authentication, MongoDB, Mongoose, External Stock/Crypto/FX APIs, Vite, Git, GitHub, Netlify, Render",
          conclusion: "Check My Assets는 개인 투자자를 위한 자산 관리 웹 애플리케이션으로 React 기반 프론트엔드와 Node.js + Express 기반 RESTful API 서버를 직접 구현하여 한국 주식, 미국 주식, 가상화폐 자산을 하나의 대시보드에서 통합 관리할 수 있도록 설계되었으며, 백엔드에서는 포트폴리오 자산에 대한 CRUD API를 설계하고 JWT 인증을 통해 사용자별 데이터를 안전하게 관리했고, 프론트엔드에서는 REST API를 통해 실시간 시세 데이터를 주기적으로 갱신하며 평가금액·손익·수익률을 직관적으로 시각화했습니다.",
          demo: "https://checkmyasset.netlify.app/",
          github: "https://github.com/hyun0520/Stock"
        }
      ]
    }
  },




};
