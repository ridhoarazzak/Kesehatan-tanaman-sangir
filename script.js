window.onload = () => {
  const map = L.map('map').setView([-1.5785, 101.3123], 12);

  // Basemap
  const esri = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Tiles © Esri'
    }
  ).addTo(map);

  // Tile dari Google Earth Engine
  const geeTileUrl = "https://earthengine.googleapis.com/v1/projects/ee-mrgridhoarazzak/maps/cdfcbfbb5c4c1019e5be2c1dda11cf68-45623c2fd3b42f7e9d3d0ea8ed5d0a1b/tiles/{z}/{x}/{y}";

  const geeLayer = L.tileLayer(geeTileUrl, {
    attribution: "Google Earth Engine",
    opacity: 0.5
  }).addTo(map);

  // Legenda sederhana
  L.control({ position: 'bottomright' }).onAdd = () => {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = `
      <strong>Legenda</strong><br>
      <i style="background:#1f78b4"></i> Area Konservasi DAS
    `;
    return div;
  }.addTo(map);
};
