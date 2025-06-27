window.onload = () => {
  const map = L.map('map').setView([-1.5785, 101.3123], 12);

  // Basemap
  const esri = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Tiles © Esri'
    }
  ).addTo(map);

  // Tile Earth Engine terbaru
  const geeTileUrl = "https://earthengine.googleapis.com/v1/projects/ee-mrgridhoarazzak/maps/cdfcbfbb5c4c1019e5be2c1dda11cf68-49fb83b3770b37f5f6bf83f05d8208dc/tiles/{z}/{x}/{y}";

  const geeLayer = L.tileLayer(geeTileUrl, {
    attribution: "Google Earth Engine",
    opacity: 0.5
  }).addTo(map);

  // Legenda sederhana
  L.control({ position: 'bottomright' }).onAdd = () => {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = `
      <strong>Legenda</strong><br>
      <i style="background:#1f78b4;width:18px;height:18px;display:inline-block;margin-right:8px;"></i> Area Kesehatan Tanaman
    `;
    return div;
  }.addTo(map);
};
