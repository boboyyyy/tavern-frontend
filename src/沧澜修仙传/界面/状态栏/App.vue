<template>
  <div class="canglan-panel">
    <!-- 顶栏 -->
    <div class="top-bar"></div>
    <div class="header">
      <span class="header-badge">修</span>
      <span class="header-title">沧澜修仙传</span>
    </div>

    <!-- 四行核心数据 -->
    <div class="core-rows">
      <CultivationRow />
      <LocationRow />
      <AffectionRow />
      <MindText />
    </div>

    <!-- 折叠扩展区 -->
    <ExpandTabs />
  </div>
</template>

<script setup lang="ts">
import CultivationRow from './components/CultivationRow.vue';
import LocationRow from './components/LocationRow.vue';
import AffectionRow from './components/AffectionRow.vue';
import MindText from './components/MindText.vue';
import ExpandTabs from './components/ExpandTabs.vue';
</script>

<style lang="scss" scoped>
.canglan-panel {
  width: 100%;
  max-width: 680px;
  background-color: var(--c-bg-panel);
  border: 1px solid var(--c-border);
  display: flex;
  flex-direction: column;
  font-family: var(--font-body);
  color: var(--c-text);
  font-size: 13px;
  line-height: 1.45;
  margin: 0 auto;
}

.top-bar {
  height: 3px;
  background: linear-gradient(90deg, var(--c-jade), var(--c-primary), var(--c-jade));
}

.header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--c-border);
}

.header-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background: var(--c-primary);
  color: var(--c-bg-deep);
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: bold;
}

.header-title {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 600;
  color: var(--c-primary);
  letter-spacing: 2px;
}

.core-rows {
  display: flex;
  flex-direction: column;
}
</style>
