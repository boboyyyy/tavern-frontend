<script setup lang="ts">
import { ref } from 'vue';

interface Quest {
  名称: string;
  等级: string;
  发布者: string;
  地点: string;
  截止时间: string;
  状态: string;
}

const props = defineProps<{
  tasks: Record<string, Quest>;
}>();

const expandedQuest = ref<string | null>(null);

function toggleQuest(key: string) {
  expandedQuest.value = expandedQuest.value === key ? null : key;
}

function statusColor(status: string): string {
  switch (status) {
    case '可接': return 'var(--c-info)';
    case '已接': return 'var(--c-accent)';
    case '进行中': return 'var(--c-success)';
    case '已完成': return 'var(--c-text-muted)';
    case '已失败': return 'var(--c-danger)';
    default: return 'var(--c-text-muted)';
  }
}

function levelColor(level: string): string {
  switch (level) {
    case '天级': return '#ef4444';
    case '地级': return '#f59e0b';
    case '玄级': return '#8b5cf6';
    case '灵级': return '#3b82f6';
    case '凡级': return '#6b7280';
    default: return 'var(--c-text-muted)';
  }
}
</script>

<template>
  <div v-if="Object.keys(tasks).length === 0" class="empty-state">
    <i class="fas fa-inbox" style="font-size: 20px; display: block; margin-bottom: 6px;"></i>
    暂无活跃任务
  </div>
  <div v-for="(quest, key) in tasks" :key="key" class="quest-item" @click="toggleQuest(key)">
    <div class="between">
      <span>
        <span :style="{ color: levelColor(quest.等级), fontWeight: 600, marginRight: '6px' }">[{{ quest.等级 }}]</span>
        <span>{{ quest.名称 }}</span>
      </span>
      <span :style="{ color: statusColor(quest.状态), fontSize: '11px' }">{{ quest.状态 }}</span>
    </div>
    <div v-if="expandedQuest === key" style="margin-top: 6px; font-size: 12px; color: var(--c-text-muted);">
      <div><i class="fas fa-user-tie" style="width: 16px; margin-right: 4px;"></i>{{ quest.发布者 }}</div>
      <div><i class="fas fa-map-pin" style="width: 16px; margin-right: 4px;"></i>{{ quest.地点 }}</div>
      <div><i class="fas fa-hourglass" style="width: 16px; margin-right: 4px;"></i>{{ quest.截止时间 || '无期限' }}</div>
    </div>
  </div>
</template>
