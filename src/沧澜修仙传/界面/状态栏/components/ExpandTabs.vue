<template>
  <div class="expand-section">
    <button class="expand-toggle" type="button" @click="expanded = !expanded">
      <i class="fa" :class="expanded ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
      <span>{{ expanded ? '收起' : '展开更多' }}</span>
    </button>

    <div v-if="expanded" class="tabs-area">
      <div class="tab-nav">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          class="tab-btn"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          <i :class="tab.icon"></i>
          {{ tab.label }}
        </button>
      </div>

      <div class="tab-content">
        <!-- 功法 -->
        <div v-if="activeTab === 'skills'" class="tab-pane">
          <div v-if="skillEntries.length === 0" class="empty-notice">尚未习得任何功法技能</div>
          <div v-for="(skill, name) in store.data.主角.技能" :key="name" class="entry-card">
            <div class="entry-header">
              <span class="entry-name">{{ name }}</span>
              <span class="entry-type">{{ skill.类型 }}</span>
              <span class="entry-level">{{ skill.等级 }}</span>
            </div>
            <div class="entry-body">
              <span class="entry-desc">{{ skill.描述 }}</span>
              <span class="entry-proficiency">熟练度: {{ skill.熟练度 }}</span>
            </div>
          </div>
        </div>

        <!-- 物品 -->
        <div v-if="activeTab === 'items'" class="tab-pane">
          <div v-if="itemEntries.length === 0" class="empty-notice">背包空空如也</div>
          <div v-for="(item, name) in store.data.主角.物品" :key="name" class="entry-card entry-item">
            <div class="entry-header">
              <span class="entry-name">{{ name }}</span>
              <span class="entry-count">×{{ item.数量 }}</span>
            </div>
            <div class="entry-body">
              <span class="entry-desc">{{ item.描述 }}</span>
            </div>
          </div>
        </div>

        <!-- 委托 -->
        <div v-if="activeTab === 'quests'" class="tab-pane">
          <div v-if="questEntries.length === 0" class="empty-notice">暂无委托任务</div>
          <div v-for="(quest, name) in store.data.委托" :key="name" class="entry-card entry-quest">
            <div class="entry-header">
              <span class="entry-name">{{ name }}</span>
              <span class="entry-difficulty" :class="'diff-' + quest.难度">{{ quest.难度 }}</span>
            </div>
            <div class="entry-body">
              <div class="quest-goal"><i class="fa fa-bullseye"></i> {{ quest.目标 }}</div>
              <div class="quest-reward"><i class="fa fa-coins"></i> {{ quest.奖励 }}</div>
              <div class="quest-intro" v-if="quest.引言">"{{ quest.引言 }}"</div>
            </div>
          </div>
        </div>

        <!-- 动向 -->
        <div v-if="activeTab === 'events'" class="tab-pane">
          <div v-if="eventEntries.length === 0" class="empty-notice">天下太平，未有大事</div>
          <div v-for="(event, name) in store.data.世界.动向" :key="name" class="entry-card entry-event">
            <div class="entry-header">
              <span class="entry-name"><i class="fa fa-globe"></i> {{ name }}</span>
              <span class="entry-location"><i class="fa fa-location-dot"></i> {{ event.地点 }}</span>
            </div>
            <div class="entry-body">
              <span class="entry-desc">{{ event.描述 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();
const expanded = ref(false);
const activeTab = ref('skills');

const tabs = [
  { id: 'skills', label: '功法', icon: 'fa fa-book' },
  { id: 'items', label: '物品', icon: 'fa fa-box' },
  { id: 'quests', label: '委托', icon: 'fa fa-scroll' },
  { id: 'events', label: '动向', icon: 'fa fa-newspaper' },
];

const skillEntries = computed(() => Object.keys(store.data.主角.技能));
const itemEntries = computed(() => Object.keys(store.data.主角.物品));
const questEntries = computed(() => Object.keys(store.data.委托));
const eventEntries = computed(() => Object.keys(store.data.世界.动向));
</script>

<style lang="scss" scoped>
.expand-section {
  border-top: 1px solid var(--c-border);
}

.expand-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  padding: 6px;
  background: transparent;
  border: none;
  color: var(--c-text-muted);
  font-size: 11px;
  font-family: var(--font-body);
  cursor: pointer;
  transition: color 0.2s;
}

.expand-toggle:hover {
  color: var(--c-text);
}

.tabs-area {
  border-top: 1px solid var(--c-border);
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 600px; }
}

.tab-nav {
  display: flex;
  border-bottom: 1px solid var(--c-border);
}

.tab-btn {
  flex: 1;
  padding: 7px 4px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--c-text-muted);
  font-size: 11px;
  font-family: var(--font-body);
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.tab-btn:hover {
  color: var(--c-text);
  background: var(--c-bg-card);
}

.tab-btn.active {
  color: var(--c-primary);
  border-bottom-color: var(--c-primary);
}

.tab-content {
  padding: 8px;
  max-height: 280px;
  overflow-y: auto;
}

.tab-pane {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.empty-notice {
  text-align: center;
  color: var(--c-text-muted);
  font-size: 12px;
  padding: 14px 0;
  font-style: italic;
}

.entry-card {
  background: var(--c-bg-card);
  border: 1px solid var(--c-border);
  border-radius: 4px;
  padding: 8px 10px;
}

.entry-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.entry-name {
  font-weight: 600;
  font-size: 12px;
  color: var(--c-text);
}

.entry-type,
.entry-level,
.entry-count,
.entry-location {
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 3px;
  background: var(--c-bg-deep);
  color: var(--c-text-muted);
}

.entry-difficulty {
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 3px;
  margin-left: auto;
}

.diff-简单 { background: #1a3a1a; color: var(--c-jade-light); }
.diff-普通 { background: #2a2a1a; color: var(--c-primary); }
.diff-困难 { background: #3a1a1a; color: var(--c-danger); }
.diff-致命 { background: #2a0a1a; color: #c0392b; }

.entry-body {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.entry-desc {
  font-size: 11px;
  color: var(--c-text-muted);
  flex: 1;
}

.entry-proficiency {
  font-size: 10px;
  color: var(--c-primary);
}

.entry-item .entry-header {
  justify-content: space-between;
}

.quest-goal,
.quest-reward {
  font-size: 11px;
  color: var(--c-text);
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}

.quest-goal i { color: var(--c-danger); font-size: 9px; }
.quest-reward i { color: var(--c-primary); font-size: 9px; }

.quest-intro {
  font-size: 11px;
  color: var(--c-text-muted);
  font-style: italic;
  width: 100%;
}

.entry-event .entry-header {
  justify-content: space-between;
}
</style>
