<template>
  <div class="row mind-row">
    <div class="row-label">
      <i class="fa fa-comment-dots"></i>
    </div>
    <div class="row-content">
      <div class="mind-text">
        <template v-if="store.data.蒋乐.心理描写">
          {{ store.data.蒋乐.心理描写 }}
        </template>
        <template v-else>
          <span class="mind-empty">蒋乐此刻心绪平静，未起波澜</span>
        </template>
      </div>
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
  align-items: flex-start;
  gap: 10px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--c-border);
}

.row-label {
  width: 24px;
  color: var(--c-mind);
  font-size: 14px;
  text-align: center;
  flex-shrink: 0;
  padding-top: 2px;
}

.row-content {
  flex: 1;
  min-width: 0;
}

.mind-text {
  font-style: italic;
  color: var(--c-text);
  font-size: 12px;
  line-height: 1.6;
  padding: 8px 12px;
  background: rgba(142, 124, 195, 0.06);
  border-left: 3px solid var(--c-mind);
  border-radius: 0 4px 4px 0;
  word-break: break-word;
}

.mind-empty {
  color: var(--c-text-muted);
  font-style: normal;
}
</style>
