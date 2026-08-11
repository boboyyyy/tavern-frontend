export const Schema = z.object({
  系统: z.object({
    日期: z.string().prefault(''),
    时间段: z.string().prefault('清晨'),
    当前位置: z.string().prefault('太虚剑宗'),
    当前场景: z.string().prefault('弟子居所'),
    任务阶段: z.enum(['浏览', '执行', '结算']).prefault('浏览'),
  }).prefault({}),
  主角: z.object({
    修为: z.string().prefault('筑基圆满'),
    宗门贡献点: z.coerce.number().prefault(0),
    灵石: z.coerce.number().prefault(100),
  }).prefault({}),
  任务列表: z.record(z.object({
    名称: z.string(),
    等级: z.string(),
    发布者: z.string(),
    地点: z.string(),
    截止时间: z.string(),
    状态: z.string(),
  })).prefault({}),
  慕清寒: z.object({
    好感度: z.coerce.number().prefault(50),
    当前位置: z.string().prefault('冰剑峰'),
    当前想法: z.string().prefault(''),
  }).prefault({}),
  江映月: z.object({
    好感度: z.coerce.number().prefault(50),
    当前位置: z.string().prefault('冰剑峰'),
    当前想法: z.string().prefault(''),
  }).prefault({}),
  夜凝霜: z.object({
    好感度: z.coerce.number().prefault(30),
    当前位置: z.string().prefault('冰剑峰'),
    当前想法: z.string().prefault(''),
  }).prefault({}),
  殷九歌: z.object({
    好感度: z.coerce.number().prefault(60),
    当前位置: z.string().prefault('幽玄魔宫'),
    当前想法: z.string().prefault(''),
  }).prefault({}),
});
export type Schema = z.output<typeof Schema>;
