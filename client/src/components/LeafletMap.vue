<template>

    <div style="height: 500px;">
        <div class="info" style="height: 15%">
            <span>Center: {{ center }}</span>
            <span>Zoom: {{ zoom }}</span>
        </div>
        <l-map
            style="height: 500px; width: 500px"
            :zoom="zoom"
            :center="center"
            @update:zoom="zoomUpdated"
            @update:center="centerUpdated"
        >
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker 
                v-for="(distillery, index) in this.distilleries"
                :key="index"
                :latLng="[distillery.lat, distillery.long]"
                v-on:click=handleClick
            >
                <l-tooltip>{{distillery.name}}</l-tooltip>
            </l-marker>
        </l-map>
    </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LTooltip} from 'vue2-leaflet';
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  props:['distilleries'],
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 7,
      center: [56.788845, -4.3396]
    };
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    },
    handleClick() {
      console.log('click');
    }
  }
}
</script>

<style>

</style>