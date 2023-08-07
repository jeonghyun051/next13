This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## build

```bash
배포판이 .next 폴더에 생김
npm run build

.next 있는 파일이 서비스 시작됨
npm run start
```

## Routing

http://www.naver.com/dashboard/analytics/

domain : www.naver.com  
segment : dashboard, analytics  
path : dashboard/analytics

## josn server

```bash
npx json-server --port 9999 --watch db.json
npm i -g json-server

# 실행
json-server ./db.json --port 9999
```

## next js

next js에서는 컴포넌트를 기본적으로 서버 컴포넌트라고 인식을 한다.
서버 컴포넌트인 곳에서 useState, useEffect를 사용하면 에러가 발생한다.
그럴 경우에는 파일의 최상단에 'use client'를 선언하면 된다.

서버 컴포넌트에서는 async await 를 사용하여 최초 로딩시에 state 변경 없이 데이터를 할당할수 있다.

자바스크립트 실행을 막아도 서버쪽에서 동적으로 생성한 정적인 내용을 클라이언트에 전달하기 때문에 작동한다.
