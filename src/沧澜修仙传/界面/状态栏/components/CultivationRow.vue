<template>
  <div class="row cultivation-row">
    <div class="row-label">
      <i class="fa fa-star"></i>
    </div>
    <div class="row-content">
      <!-- 修为等阶 -->
      <div class="stat-block stat-cultivation">
        <span class="stat-icon"><i class="fa fa-bolt"></i></span>
        <span class="stat-label">修为</span>
        <span class="stat-value realm-value">{{ store.data.主角.等阶 }}</span>
      </div>
      <div class="stat-divider"></div>
      <!-- 资质 -->
      <div class="stat-block stat-aptitude">
        <span class="stat-icon"><i class="fa fa-gem"></i></span>
        <span class="stat-label">资质</span>
        <span class="stat-value" :class="aptitudeClass">{{ store.data.主角.资质 }}</span>
      </div>
      <div class="stat-divider"></div>
      <!-- 灵根徽章 -->
      <div class="stat-block stat-spirit">
        <span class="stat-icon"><i class="fa fa-leaf"></i></span>
        <span class="stat-label">灵根</span>
        <span class="stat-value spirit-badge">{{ store.data.主角.灵根 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();

const aptitudeClass = computed(() => {
  const val = store.data.主角.资质;
  if (val === '冠位') return 'aptitude-supreme';
  if (val === '上位') return 'aptitude-high';
  if (val === '中位') return 'aptitude-mid';
  return 'aptitude-unknown';
});
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
  color: var(--c-primary);
  font-size: 14px;
  text-align: center;
  flex-shrink: 0;
}

.row-content {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  flex-wrap: wrap;
}

.stat-block {
  display: flex;
  align-items: center;
  gap: 5px;
}

.stat-icon {
  color: var(--c-text-muted);
  font-size: 11px;
  width: 16px;
  text-align: center;
}

.stat-label {
  color: var(--c-text-muted);
  font-size: 11px;
  white-space: nowrap;
}

.stat-value {
  font-weight: 600;
  font-size: 13px;
}

.realm-value {
  color: var(--c-primary);
  font-family: var(--font-display);
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 16px;
  background: var(--c-border);
  margin: 0 2px;
}

.aptitude-supreme { color: var(--c-primary); }
.aptitude-high { color: #7ec8e3; }
.aptitude-mid { color: var(--c-text); }
.aptitude-unknown { color: var(--c-text-muted); }

.spirit-badge {
  padding: 1px 8px;
  border-radius: 3px;
  background: var(--c-bg-card);
  border: 1px solid var(--c-jade);
  color: var(--c-jade-light);
  font-size: 12px;
}
</style>
