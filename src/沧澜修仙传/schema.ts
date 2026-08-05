export const Schema = z.object({
  世界: z.object({
    当前时间: z.string().prefault('灾元1500年孢粉月9日'),
    当前地点: z.string().prefault('玄清宗山门外广场'),
    危机程度: z.string().prefault('无'),
    动向: z.record(z.string(), z.object({
      类型: z.string().prefault(''),
      地点: z.string().prefault(''),
      描述: z.string().prefault(''),
    })).prefault({}),
  }).prefault({}),

  主角: z.object({
    等阶: z.string().prefault('凡人'),
    资质: z.string().prefault('未知'),
    灵根: z.string().prefault('未知'),
    势力: z.string().prefault('无'),
    生命: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(100),
    魔力: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(100),
    理智: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(100),
    经验: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    状态: z.string().prefault('无异常'),
    天赋: z.record(z.string(), z.object({
      描述: z.string().prefault(''),
    })).prefault({}),
    技能: z.record(z.string(), z.object({
      类型: z.string().prefault(''),
      等级: z.string().prefault(''),
      熟练度: z.coerce.number().prefault(0),
      描述: z.string().prefault(''),
    })).prefault({}),
    物品: z.record(z.string(), z.object({
      描述: z.string().prefault(''),
      数量: z.coerce.number().prefault(1),
    })).prefault({}).transform(data => _.pickBy(data, ({ 数量 }) => 数量 > 0)),
  }).prefault({}),

  蒋乐: z.object({
    堕落值: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(40),
    好感度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(50),
    生命: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(100),
    魔力: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(100),
    理智: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(100),
    心理描写: z.string().prefault(''),
  }).prefault({}),

  委托: z.record(z.string(), z.object({
    难度: z.string().prefault(''),
    目标: z.string().prefault(''),
    奖励: z.string().prefault(''),
    引言: z.string().prefault(''),
  })).prefault({}).transform(data => _.fromPairs(_.takeRight(_.toPairs(data), 3))),

  剧情提示: z.array(z.string()).prefault([]),
});
