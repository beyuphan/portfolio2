document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    projeler.forEach((proje, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        // AOS animasyonlarını dinamik olarak ayarla
        card.setAttribute('data-aos', index % 2 === 0 ? 'fade-right' : 'fade-left');
        card.setAttribute('data-aos-duration', '800');
        card.setAttribute('data-aos-delay', '300');

        let buttons = '';
        if (proje.githubLink) {
            buttons += `<a href="${proje.githubLink}" target="_blank" class="button github-button"><i class="fab fa-github"></i> GitHub</a>`;
        }
        if (proje.raporLink) {
            buttons += `<a href="${proje.raporLink}" target="_blank" class="button live-button"><i class="fas fa-external-link-alt"></i> Rapor Görüntüle</a>`;
        }
        if (proje.canliLink) {
            buttons += `<a href="${proje.canliLink}" target="_blank" class="button live-button"><i class="fas fa-external-link-alt"></i> Siteyi Görüntüle</a>`;
        }
        if (proje.videoLink) {
            buttons += `<a href="${proje.videoLink}" target="_blank" class="button youtube-button"><i class="fa-brands fa-youtube"></i> Tanıtım Videosu</a>`;
        }

        card.innerHTML = `
            <a href="proje-detay.html?id=${proje.id}" class="card-link">
                <div class="image-container">
                    <img src="${proje.resim}" alt="${proje.baslik} Ekran Görüntüsü">
                </div>
                <div class="content">
                    <h1>${proje.baslik}</h1>
                    <p>${proje.aciklama}</p>
                </div>
            </a>
            <div class="button-container">
                ${buttons}
            </div>
        `;
        projectsContainer.appendChild(card);
    });
});