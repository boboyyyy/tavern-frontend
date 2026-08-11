<script setup lang="ts">
interface NpcData {
  好感度?: number;
  当前位置?: string;
  当前想法?: string;
}

const props = defineProps<{
  npcData: Record<string, NpcData | undefined>;
}>();

function favorColor(value: number): string {
  if (value >= 70) return 'var(--c-success)';
  if (value >= 40) return 'var(--c-accent)';
  if (value >= 20) return 'var(--c-info)';
  return 'var(--c-danger)';
}

function favorLabel(value: number): string {
  if (value >= 80) return '深厚';
  if (value >= 60) return '友好';
  if (value >= 40) return '普通';
  if (value >= 20) return '冷淡';
  return '疏远';
}

const npcIcons: Record<string, string> = {
  '慕清寒': 'fa-snowflake',
  '江映月': 'fa-sun',
  '夜凝霜': 'fa-moon',
  '殷九歌': 'fa-crown',
};
</script>

<template>
  <div v-if="Object.keys(npcData).length === 0" class="empty-state">
    暂无角色数据
  </div>
  <div v-for="(data, name) in npcData" :key="name" class="npc-card">
    <div class="between">
      <span style="font-weight: 600;">
        <i :class="'fas ' + (npcIcons[name] || 'fa-user')" style="margin-right: 6px; color: var(--c-primary);"></i>
        {{ name }}
      </span>
      <span style="font-size: 12px; color: var(--c-text-muted);">
        <i class="fas fa-map-pin" style="margin-right: 3px;"></i>{{ data?.当前位置 || '未知' }}
      </span>
    </div>
    <!-- 好感度条 -->
    <div class="between" style="margin-top: 4px;">
      <span style="font-size: 11px; color: var(--c-text-muted);">好感度</span>
      <span style="font-size: 12px; font-weight: 600;" :style="{ color: favorColor(data?.好感度 ?? 0) }">
        {{ data?.好感度 ?? 0 }} · {{ favorLabel(data?.好感度 ?? 0) }}
      </span>
    </div>
    <div class="favor-bar">
      <div class="favor-fill" :style="{
        width: (data?.好感度 ?? 0) + '%',
        background: favorColor(data?.好感度 ?? 0)
      }"></div>
    </div>
    <!-- 当前想法 -->
    <div v-if="data?.当前想法" style="margin-top: 6px; font-size: 12px; color: var(--c-text-muted); font-style: italic;">
      <i class="fas fa-quote-left" style="font-size: 10px; margin-right: 3px; opacity: 0.5;"></i>
      {{ data.当前想法 }}
    </div>
  </div>
</template>
