# Web Front-end Portfolio (2025)

VS Code 에디터를 테마로 한
Next.js + TypeScript + Tailwind 기반 개인 포트폴리오 프로젝트입니다.  
퍼블리싱과 프론트엔드 작업물을 정리하고, 실제 서비스 가능한 기능(이메일 전송, VS Code 테마 등)을 포함합니다.

---

## 🚀 주요 기능

- **메인 페이지**: 전체 프로젝트와 소개 정보 표시
- **프로젝트 페이지**: `src/data/projects.ts` 기반 프로젝트 목록 및 상세 소개
- **About 페이지**: 자기소개 및 경력 정리
- **Contact 페이지**: Nodemailer + Gmail SMTP를 이용한 실제 메일 전송 기능
- **UI 컴포넌트**: Sidebar, TabsBar, Titlebar 등 재사용 가능한 구조화된 컴포넌트

---

## 🛠 기술 스택

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Mail Service**: Nodemailer (SMTP with Gmail)
- **Deployment**: Netlify / Vercel

---

## 📂 프로젝트 구조

```
src/
 ├─ app/               # 라우트 페이지
 │   ├─ about/         # 자기소개
 │   ├─ contact/       # 연락처 (이메일 전송)
 │   ├─ projects/      # 프로젝트 리스트
 │   ├─ api/           # API 핸들러
 │   └─ layout.tsx     # 전체 레이아웃
 │
 ├─ components/        # 공통 UI 컴포넌트
 │   ├─ UI/
 │   ├─ Sidebar.tsx
 │   ├─ TabsBar.tsx
 │   └─ Titlebar.tsx
 │
 ├─ data/              # 정적 데이터
 │   ├─ navData.ts
 │   └─ projects.ts    # 프로젝트 배열 정의 (UI 자동 반영)
 │
 └─ service/           # 서비스 로직
     ├─ contact.ts
     └─ email.ts       # Nodemailer를 활용한 이메일 전송
```

---

## ⚡ 실행 방법

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev

# 빌드
yarn build
```

### 📧 환경 변수 설정

`.env.local` 파일을 프로젝트 루트에 생성하고 아래와 같이 입력합니다.

```env
AUTH_USER=your_gmail_address@gmail.com
AUTH_PASS=your_app_password
```

- `AUTH_USER`: Gmail 주소
- `AUTH_PASS`: 구글 앱 비밀번호(App Password) (2단계 인증 시 필요)

---

---

## 📌 참고

- **Contact 페이지**: 실제 이메일 전송 가능 (SMTP 기반).
- **프로젝트 관리**: `src/data/projects.ts`에서 항목 추가/수정 시 UI에 자동 반영됨.
- 일부 만료된 프로젝트는 배포는 중단되었으나, README와 캡처로 확인할 수 있습니다.
