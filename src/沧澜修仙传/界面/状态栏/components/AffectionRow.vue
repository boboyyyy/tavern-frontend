<template>
  <div class="row affection-row">
    <div class="row-label">
      <i class="fa fa-heart"></i>
    </div>
    <div class="row-content">
      <!-- 好感度进度条 -->
      <div class="bar-group bar-affection">
        <div class="bar-header">
          <span class="bar-label">好感度</span>
          <span class="bar-value" :class="affectionColorClass">{{ store.data.蒋乐.好感度 }}</span>
          <span class="bar-tag" :class="affectionColorClass">{{ affectionStage }}</span>
        </div>
        <div class="bar-track">
          <div
            class="bar-fill bar-fill-affection"
            :style="{ width: store.data.蒋乐.好感度 + '%' }"
          ></div>
        </div>
      </div>
      <!-- 堕落值进度条 -->
      <div class="bar-group bar-corruption">
        <div class="bar-header">
          <span class="bar-label">堕落值</span>
          <span class="bar-value" :class="corruptionColorClass">{{ store.data.蒋乐.堕落值 }}</span>
          <span class="bar-tag" :class="corruptionColorClass">{{ corruptionStage }}</span>
        </div>
        <div class="bar-track">
          <div class="bar-stage-mark" style="left: 30%;" title="第二阶·人格分裂">▾</div>
          <div class="bar-stage-mark" style="left: 70%;" title="第三阶·融合堕落">▾</div>
          <div
            class="bar-fill bar-fill-corruption"
            :style="{ width: store.data.蒋乐.堕落值 + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();

const affectionStage = computed(() => {
  const v = store.data.蒋乐.好感度;
  if (v >= 80) return '依恋';
  if (v >= 60) return '亲近';
  if (v >= 30) return '平常';
  return '疏离';
});

const affectionColorClass = computed(() => {
  const v = store.data.蒋乐.好感度;
  if (v >= 80) return 'tier-gold';
  if (v >= 60) return 'tier-pink';
  if (v >= 30) return 'tier-orange';
  return 'tier-red';
});

const corruptionStage = computed(() => {
  const v = store.data.蒋乐.堕落值;
  if (v >= 70) return '第三阶·融合';
  if (v >= 30) return '第二阶·分裂';
  return '第一阶·淫纹';
});

const corruptionColorClass = computed(() => {
  const v = store.data.蒋乐.堕落值;
  if (v >= 70) return 'tier-purple';
  if (v >= 30) return 'tier-orange';
  return 'tier-red';
});
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--c-border);
}

.row-label {
  width: 24px;
  color: var(--c-affection);
  font-size: 14px;
  text-align: center;
  flex-shrink: 0;
  padding-top: 2px;
}

.row-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.bar-group {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.bar-header {
  display: flex;
  align-items: center;
  gap: 6px;
}

.bar-label {
  color: var(--c-text-muted);
  font-size: 11px;
}

.bar-value {
  font-weight: 700;
  font-size: 14px;
  font-family: var(--font-display);
}

.bar-tag {
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 3px;
  background: var(--c-bg-card);
  margin-left: auto;
}

/* 好感度颜色梯度 */
.tier-gold { color: var(--c-primary); }
.tier-pink { color: var(--c-affection); }
.tier-orange { color: #e8a050; }
.tier-red { color: var(--c-danger); }
.tier-purple { color: var(--c-mind); }

.bar-track {
  position: relative;
  height: 10px;
  border-radius: 5px;
  background: var(--c-bg-deep);
  border: 1px solid var(--c-border);
  overflow: visible;
}

.bar-fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 4px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.bar-fill-affection {
  background: linear-gradient(90deg, #c0392b, #e8a050 30%, #e891b4 60%, #d4a853);
}

.bar-fill-corruption {
  background: linear-gradient(90deg, #5a1a2a, #8b1a2b 30%, #6b1a5a 70%, #2a0a3a);
}

.bar-stage-mark {
  position: absolute;
  top: -5px;
  font-size: 9px;
  color: var(--c-text-muted);
  transform: translateX(-50%);
  z-index: 1;
  cursor: default;
}
</style>
