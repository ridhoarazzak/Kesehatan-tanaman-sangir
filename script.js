window.onload = () => {
  const map = L.map('map').setView([-1.5785, 101.3123], 12);

  const esri = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Tiles © Esri'
    }
  ).addTo(map);

  // Ganti dengan Tile ID terbaru
  const geeTileUrl = "https://earthengine.googleapis.com/v1/projects/ee-mrgridhoarazzak/maps/4d4132521ceb9b8ab5bb5b8aca384bd2-26cd727f0136ed8bb44ac3f853655b78/tiles/{z}/{x}/{y}";

  const geeLayer = L.tileLayer(geeTileUrl, {
    attribution: "Google Earth Engine",
    opacity: 0.7
  }).addTo(map);

  L.control({ position: 'bottomright' }).onAdd = () => {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = `
      <strong>Legenda</strong><br>
      <i style="background:red"></i> Tidak Sehat<br>
      <i style="background:yellow"></i> Cukup<br>
      <i style="background:green"></i> Sehat
    `;
    return div;
  }.addTo(map);
};
