<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDataStore } from './store';
import QuestList from './components/QuestList.vue';
import NpcPanel from './components/NpcPanel.vue';

const store = useDataStore();
const activeTab = ref<'主角' | '角色'>('主角');

const systemInfo = computed(() => [
  { label: '日期', value: store.data?.系统?.日期 || '待定', icon: 'fa-calendar' },
  { label: '时间', value: store.data?.系统?.时间段 || '清晨', icon: 'fa-clock' },
  { label: '位置', value: `${store.data?.系统?.当前位置 || '太虚剑宗'} · ${store.data?.系统?.当前场景 || '弟子居所'}`, icon: 'fa-location-dot' },
]);

const playerStats = computed(() => [
  { label: '修为', value: store.data?.主角?.修为 || '筑基圆满', icon: 'fa-bolt' },
  { label: '灵石', value: String(store.data?.主角?.灵石 ?? 100), icon: 'fa-coins' },
  { label: '贡献点', value: String(store.data?.主角?.宗门贡献点 ?? 0), icon: 'fa-star' },
]);

const questCount = computed(() => Object.keys(store.data?.任务列表 ?? {}).length);
</script>

<template>
  <div class="app-container">
    <!-- 系统信息 -->
    <div class="card">
      <div class="row" v-for="item in systemInfo" :key="item.label" style="margin-bottom: 4px;">
        <i :class="'fas ' + item.icon" style="color: var(--c-text-muted); width: 16px; text-align: center;"></i>
        <span class="stat-label">{{ item.label }}</span>
        <span class="stat-value">{{ item.value }}</span>
      </div>
    </div>

    <!-- 主角面板 -->
    <div v-if="activeTab === '主角'" class="card">
      <div class="between" v-for="stat in playerStats" :key="stat.label" style="padding: 4px 0;">
        <span>
          <i :class="'fas ' + stat.icon" style="color: var(--c-accent); width: 16px; text-align: center; margin-right: 6px;"></i>
          <span class="stat-label">{{ stat.label }}</span>
        </span>
        <span class="stat-value">{{ stat.value }}</span>
      </div>
    </div>

    <!-- 任务列表 -->
    <div class="card">
      <div class="between" style="margin-bottom: 4px;">
        <span>
          <i class="fas fa-scroll" style="color: var(--c-accent); margin-right: 6px;"></i>
          <span style="font-weight: 600;">活跃任务</span>
        </span>
        <span class="stat-label">{{ questCount }} 个任务</span>
      </div>
      <QuestList :tasks="store.data?.任务列表 ?? {}" />
    </div>

    <!-- 角色面板 -->
    <div v-if="activeTab === '角色'" class="card">
      <NpcPanel :npc-data="{
        慕清寒: store.data?.慕清寒,
        江映月: store.data?.江映月,
        夜凝霜: store.data?.夜凝霜,
        殷九歌: store.data?.殷九歌
      }" />
    </div>

    <!-- 切换按钮 -->
    <div class="btn-group">
      <button
        class="btn-tab"
        :class="{ active: activeTab === '主角' }"
        @click="activeTab = '主角'"
      >
        <i class="fas fa-user" style="margin-right: 4px;"></i>主角
      </button>
      <button
        class="btn-tab"
        :class="{ active: activeTab === '角色' }"
        @click="activeTab = '角色'"
      >
        <i class="fas fa-users" style="margin-right: 4px;"></i>角色
      </button>
    </div>
  </div>
</template>
