<div id="downloads"></div>

<script>
  // Fetch files from JSON
  fetch('files.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('downloads');
      data.files.forEach(file => {
        const link = `https://drive.google.com/uc?export=download&id=${file.id}`;
        container.innerHTML += `
          <div class="file-card">
            <h3>${file.name}</h3>
            <p>${file.description}</p>
            <a href="${link}" class="download-btn">Download</a>
          </div>
        `;
      });
    });
</script>