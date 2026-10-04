# 今夜调酒：Figma 设计系统 v1

## 设计方向

**家庭吧台备料台 + 调酒票据**

核心命题：让用户先看到一个熟悉的调酒工具，再从工具进入今晚的任务；首页不是酒单，而是“开始调酒”的实体入口。

### 物理场景

夜间家庭厨房或小型吧台。手机放在操作台边，用户一只手拿手机，另一只手准备材料。界面像一块深色备料垫，上面放着摇杯、材料标签和几张待处理的小票。

### 反目标

- 不再使用 16-bit 赛博酒馆、霓虹像素框和游戏控制台语法。
- 不使用首页大图酒单、密集卡片墙或先要求用户理解分类的入口。
- 不使用玻璃拟态、强渐变、发光边缘和仅靠颜色表达状态。

## 画板

- 移动端主画板：`390 × 844`
- 小屏验收画板：`320 × 720`
- 桌面响应画板：`1440 × 1024`
- 所有页面使用同一顶部安全区与底部操作区标注。

## 色彩 Token

| Token | 色值 | 用途 |
|---|---|---|
| `ink-900` | `#111615` | 页面主背景、深色台面 |
| `ink-800` | `#1C2522` | 面板和票据阴影 |
| `bottle-700` | `#245247` | 摇杯、材料区和次级面板 |
| `steel-300` | `#B8C2BE` | 金属边缘、次级分隔 |
| `ticket-100` | `#F1EBDD` | 票据底色和高优先级内容面 |
| `ink-100` | `#F7F4ED` | 深色背景上的主文字 |
| `citrus-500` | `#F2B544` | 主行动、当前步骤、重点数字 |
| `vermilion-500` | `#D9573F` | 错误、警示、强反馈 |
| `herb-500` | `#7EAD76` | 完成、已选、可用材料 |
| `muted-500` | `#8D9A95` | 说明、次级信息 |

色彩策略：深色工作台承载操作，票据面承载阅读；柑橘黄只承担主行动和当前状态，朱红只承担风险与强反馈。

## 字体与排版

- 中文 UI：`Noto Sans SC` / `Microsoft YaHei` 回退。
- 数字、容量、步骤编号：`IBM Plex Mono` / `Consolas` 回退。
- 标题使用紧凑的无衬线字，不使用复古衬线或像素字体。
- 页面标题：28–32px，行高 1.12。
- 区块标题：16–18px，字重 700。
- 正文：14px，行高 1.55。
- 标签和状态：11–12px，字重 700，适度增加字距。

## 首页首屏

1. 首屏不设置独立顶部品牌栏或声音按钮，让用户直接进入核心动作。
2. 中央：占首屏高度约 52–58% 的大摇杯插画/物件图，置于深色备料垫上。
3. 摇杯下方：一句低认知负担的提示——「今晚想从哪里开始？」
4. 底部：四张可展开的调酒票据，默认隐藏，点击摇杯后显示：
   - 随机抽一杯
   - 按材料匹配
   - 浏览酒单
   - 我的收藏
5. 点击摇杯后：票据从摇杯下方或两侧展开，摇杯产生一次短促的倾斜反馈；入口仍保持可返回。

## 组件清单

- `ShakerHero / idle`
- `ShakerHero / pressed`
- `TicketEntry / collapsed`
- `TicketEntry / expanded`
- `IngredientChip / default`
- `IngredientChip / selected`
- `RecipeStep / upcoming`
- `RecipeStep / current`
- `RecipeStep / completed`
- `PrimaryAction / idle / pressed / disabled`
- `BottomActionBar / safe-area`
- `EmptyState / collection`
- `Toast / success / warning`

所有可点击控件最小触控尺寸为 48px；票据可点击区域不只覆盖文字。

## 关键页面顺序

1. `Home / Shaker idle`
2. `Home / Shaker opened`
3. `Feature picker`
4. `Random drink / reveal`
5. `Ingredient match / selection`
6. `Drink library / search`
7. `Favorites / empty + populated`
8. `Recipe detail / serving switcher`
9. `Recipe steps / current + completed`

## 响应式规则

- 390px：摇杯保持视觉中心，四张票据两列排列。
- 320px：票据改为单列，摇杯缩小但不低于首屏高度的 42%。
- 桌面：应用保持居中的手机式工作台；摇杯和票据之间增加横向备料空间，不把桌面版变成密集后台。
- 顶部系统 inset 只在原生容器计算一次，网页不重复叠加。

## 无障碍基线

- 所有状态同时使用文字、图标和结构变化表达。
- `citrus-500` 在 `ink-900` 上作为重点色，正文不依赖黄色小字。
- 票据标题、按钮和步骤名称全部可被屏幕阅读器读取。
- 摇杯提供明确的 accessible name：`打开调酒功能`。
- 支持 `prefers-reduced-motion`：取消摇杯倾斜和票据滑入，只保留状态切换。

## Figma 图层命名

```text
Page / Home
  ├── Safe Area / Top
  ├── Brand Header
  ├── Shaker Hero
  ├── Prompt / Tonight Start
  ├── Ticket Entries
  └── Safe Area / Bottom

Page / Recipe
  ├── Recipe Header
  ├── Drink Visual
  ├── Serving Switcher
  ├── Ingredient List
  ├── Flavor Notes
  └── Step Timeline
```
