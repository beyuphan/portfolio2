document.addEventListener('DOMContentLoaded', () => {
    const detailContainer = document.getElementById('project-detail');
    if (!detailContainer) return;

    // 1. URL'den 'id' parametresini al
    const params = new URLSearchParams(window.location.search);
    const projeId = parseInt(params.get('id'));

    // 2. ID'ye göre doğru projeyi bul
    const proje = projeler.find(p => p.id === projeId);

    // 3. Proje bulunursa, sayfayı doldur
    if (proje) {
        document.title = proje.baslik + " | Proje Detayı"; // Sayfa başlığını güncelle

        let buttons = '';
        if (proje.githubLink) {
            buttons += `<a href="${proje.githubLink}" target="_blank" class="button github-button"><i class="fab fa-github"></i> GitHub</a>`;
        }
        if (proje.raporLink) {
            buttons += `<a href="${proje.raporLink}" target="_blank" class="button live-button"><i class="fas fa-external-link-alt"></i> Raporu Gör</a>`;
        }
        if (proje.canliLink) {
            buttons += `<a href="${proje.canliLink}" target="_blank" class="button live-button"><i class="fas fa-external-link-alt"></i> Siteyi Gör</a>`;
        }
        if (proje.videoLink) {
            buttons += `<a href="${proje.videoLink}" target="_blank" class="button youtube-button"><i class="fa-brands fa-youtube"></i> Videoyu İzle</a>`;
        }

        detailContainer.innerHTML = `
            <a href="index.html#projects" class="back-link"><i class="fas fa-arrow-left"></i> Geri Dön</a>
            <h1>${proje.baslik}</h1>
            <img src="${proje.resim}" alt="${proje.baslik}">
            <p>${proje.aciklama}</p>
            <div class="button-container">
                ${buttons}
            </div>
        `;
    } else {
        // 4. Proje bulunamazsa hata mesajı göster
        detailContainer.innerHTML = `
            <a href="index.html" class="back-link"><i class="fas fa-arrow-left"></i> Geri Dön</a>
            <h1>Proje Bulunamadı!</h1>
            <p>Aradığınız proje mevcut değil veya kaldırılmış olabilir.</p>`;
    }
});