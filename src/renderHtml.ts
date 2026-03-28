/*export function renderHtml(content: string) {
	return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>D1</title>
        <link rel="stylesheet" type="text/css" href="https://static.integrations.cloudflare.com/styles.css">
      </head>
    
      <body>
        <header>
          <img
            src="https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/30e0d3f6-6076-40f8-7abb-8a7676f83c00/public"
          />
          <h1>🎉 Successfully connected d1-template to D1</h1>
        </header>
        <main>
          <p>Your D1 Database contains the following data:</p>
          <pre><code><span style="color: #0E838F">&gt; </span>SELECT * FROM comments LIMIT 3;<br>${content}</code></pre>
          <small class="blue">
            <a target="_blank" href="https://developers.cloudflare.com/d1/tutorials/build-a-comments-api/">Build a comments API with Workers and D1</a>
          </small>
        </main>
      </body>
    </html>
`;
}*/

export function renderHtml(content: string) {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Worker Page</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
          color: #fff;
          background: url('../assets/background.png') no-repeat center center fixed;
          background-size: cover;
        }

        .container {
          text-align: center;
          padding: 20px;
        }

        .background {
          display: none;
        }

        .footer {
          padding: 15px;
          font-size: 14px;
          text-align: center;
          color: #ccc;
        }

        .buttons {
          display: flex;
          justify-content: space-around;
          padding: 20px;
        }

        .buttons img {
          width: 40%;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <div class="header" style="text-align:center; padding:10px;">
        <img src="../assets/header.png" alt="Header" style="max-width:100%; height:auto;" />
      </div>
      
      <div class="container">
        <img src="../assets/background.png" class="background" alt="Background" />
      </div>

      <div class="buttons">
        <img src="../assets/noBtn.png" id="noBtn" alt="No Button" />
        <img src="../assets/yesBtn.png" id="yesBtn" alt="Yes Button" />
      </div>

      <div class="footer">
        <img src="../assets/footer.png" style="width:100%; max-width:600px;" alt="Footer" />
      </div>

      <script>
        document.getElementById('noBtn').addEventListener('click', () => {
          alert('You clicked NO');
        });

        document.getElementById('yesBtn').addEventListener('click', () => {
          alert('You clicked YES');
        });
      </script>
    </body>
    </html>
`;
}

