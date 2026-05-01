const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// Current Date
const currentDate = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Beautiful Render Page</title>

  <!-- Confetti -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>

  <script>
    window.onload = () => {
      setTimeout(() => {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    };
  </script>

  <!-- Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      /* Beautiful animated gradient */
      background: linear-gradient(
        -45deg,
        #0f172a,
        #1e3a8a,
        #2563eb,
        #38bdf8
      );
      background-size: 400% 400%;
      animation: gradientBG 12s ease infinite;
      padding: 20px;
    }

    @keyframes gradientBG {
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

    .card {
      width: 100%;
      max-width: 500px;
      padding: 40px 30px;
      border-radius: 24px;

      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(12px);

      border: 1px solid rgba(255, 255, 255, 0.2);

      text-align: center;
      color: white;

      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

      animation: float 3s ease-in-out infinite;
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
      margin-bottom: 15px;
    }

    p {
      font-size: 1rem;
      opacity: 0.9;
      margin-bottom: 10px;
    }

    .date {
      margin-top: 20px;
      font-size: 0.95rem;
      font-weight: 600;
      opacity: 0.85;
    }

    @media (max-width: 600px) {
      .card {
        padding: 30px 20px;
      }

      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 0.95rem;
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
`;

app.get("/", (req, res) => {
  res.type("html").send(html);
});

const server = app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
