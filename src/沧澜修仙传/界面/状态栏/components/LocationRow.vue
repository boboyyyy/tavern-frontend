<template>
  <div class="row location-row">
    <div class="row-label">
      <i class="fa fa-map-marker"></i>
    </div>
    <div class="row-content">
      <span class="location-text">
        <i class="fa fa-location-dot location-dot"></i>
        {{ store.data.世界.当前地点 }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  border-bottom: 1px solid var(--c-border);
}

.row-label {
  width: 24px;
  color: var(--c-jade-light);
  font-size: 14px;
  text-align: center;
  flex-shrink: 0;
}

.row-content {
  display: flex;
  align-items: center;
  flex: 1;
}

.location-text {
  font-family: var(--font-display);
  font-size: 13px;
  color: var(--c-text);
  display: flex;
  align-items: center;
  gap: 6px;
}

.location-dot {
  color: var(--c-jade-light);
  font-size: 10px;
  animation: pulse-location 2s ease-in-out infinite;
}

@keyframes pulse-location {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
</style>
