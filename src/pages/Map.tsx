// MapComponent.tsx

import { createEffect } from 'solid-js';
import maplibregl from 'maplibre-gl';

const Map = () => {
  createEffect(() => {
    // 地図の初期化
    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json', // マップのスタイル定義
      center: [139.7765214, 35.7123457],
      zoom: 15,
      pitch: 0
    });
  });

  return (
    <div id="map" style="height: 100vh;">
      <div style={{"background-color": "white", height: "100px", width: "100px", position: 'absolute', bottom: "0px"}}>
        何かしらの操作パネル
      </div>
    </div> // マップを描画する<div>要素
  );
};

export default Map;