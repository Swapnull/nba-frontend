This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Firstly, you will need to get the [keel backend](https://github.com/Swapnull/nba) running on port 8000.
You will also need to generate the keel ts client, you can do this with

```bash
 keel client -d ../nba -o .
```

where `../nba` points to the route of the backend.

You can then install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
