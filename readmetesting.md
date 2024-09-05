<!-- Main Container -->
<div align="center">
  <!-- Profile Picture -->
  <img src="https://your-profile-picture-url-here" alt="Profile Picture" width="200" style="border-radius: 50%;">

  <!-- Short Bio -->
  <h2>Student | Self-Taught Web Developer | Aspiring Cybersecurity Enthusiast</h2>

  <!-- Social Icons -->
  <div style="display: flex; justify-content: center; gap: 10px; margin-top: 15px;">
    <a href="mailto:youremail@gmail.com">
      <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" width="30">
    </a>
    <a href="https://github.com/garcia-danny">
      <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" width="30">
    </a>
    <a href="https://www.linkedin.com/in/your-linkedin-id">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" width="30">
    </a>
  </div>
</div>

<!-- Weather and Date Section -->
<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
  <!-- Date (Top-Right Corner) -->
  <div style="position: absolute; top: 0; right: 0; margin: 10px;">
    <p>{{date}}</p>
  </div>

  <!-- Weather Information -->
  <div align="center" style="margin-top: 30px;">
    <h3>Weather Update 🌤</h3>
    <p>Current Temperature: {{temperature}}°F</p>
    <p>Condition: {{weather}}</p>
  </div>
</div>

<p align="center">Weather data is updated hourly based on real-time information.</p>
