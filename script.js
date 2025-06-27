window.onload = () => {
  const map = L.map('map').setView([-1.5785, 101.3123], 12);

  // Basemap ESRI World Imagery
  const esri = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Tiles © Esri'
    }
  ).addTo(map);

  // Tile Google Earth Engine terbaru
  const geeTileUrl = "https://earthengine.googleapis.com/v1/projects/ee-mrgridhoarazzak/maps/4d4132521ceb9b8ab5bb5b8aca384bd2-5585aa1a899dd6a41b23652ba2671850/tiles/{z}/{x}/{y}";

  const geeLayer = L.tileLayer(geeTileUrl, {
    attribution: "Google Earth Engine",
    opacity: 0.7
  }).addTo(map);

  // Legenda
  L.control({ position: 'bottomright' }).onAdd = () => {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = `
      <strong>Legenda</strong><br>
      <i style="background:#1f78b4;width:18px;height:18px;display:inline-block;margin-right:8px;"></i> Kelas Lahan
    `;
    return div;
  }.addTo(map);
};
