const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
    // Current Date
const currentDate = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    <style>
  @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");

  @font-face {
    font-family: "neo-sans";
    src:
      url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),
      url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),
      url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");

    font-style: normal;
    font-weight: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
    font-family: "neo-sans", sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    /* Responsive gradient background */
    background: linear-gradient(
      135deg,
      #0f172a,
      #1e3a8a,
      #2563eb,
      #38bdf8
    );

    background-size: 300% 300%;
    animation: gradientMove 10s ease infinite;
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  /* Card */
  .card {
    width: 100%;
    max-width: 500px;

    padding: 40px 30px;

    border-radius: 24px;

    background: rgba(255, 255, 255, 0.12);

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    border: 1px solid rgba(255, 255, 255, 0.2);

    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);

    text-align: center;

    color: white;

    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-8px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 16px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.95;
    margin-bottom: 10px;
  }

  .date {
    margin-top: 20px;
    font-size: 0.95rem;
    font-weight: 600;
    opacity: 0.85;
  }

  /* Mobile responsiveness */
  @media (max-width: 600px) {
    .card {
      padding: 28px 20px;
      border-radius: 18px;
    }

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.95rem;
    }

    .date {
      font-size: 0.85rem;
    }
  }
</style>
  </head>
  <body>
    <div class="card">
    <h1>🚀 Hello from Render!</h1>
    <p>Your Express app is running successfully.</p>
    <p>Beautiful, responsive, and animated UI.</p>

    <div class="date">
      📅 ${currentDate}
    </div>
  </div>
  </body>
</html>
`
