# 二次元风格个人简历网站

这是一个使用 HTML、CSS 和 JavaScript（Vue3）构建的二次元风格个人简历网站模板。网站采用蓝白配色，具有现代化的设计和动画效果。

## 特点

- 二次元风格设计
- 响应式布局，适配各种设备
- 使用 Vue3 管理数据，便于修改内容
- 平滑的滚动和渐入动画效果
- 蓝白主色调，清新简约
- 包含个人信息、技能、教育经历、工作经历、项目展示和兴趣爱好等模块

## 使用方法

1. 克隆或下载此仓库
2. 修改 `js/main.js` 文件中的个人信息数据
3. 替换 `img` 文件夹中的图片：
   - `avatar.png` - 个人头像
   - `project1.jpg`、`project2.jpg`、`project3.jpg` - 项目展示图片
4. 如需修改样式，编辑 `css/style.css` 文件
5. 通过浏览器打开 `index.html` 文件查看效果

## 文件结构

```
kira-resume/
│
├── index.html          # 主HTML文件
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # JavaScript文件，包含Vue应用和数据
└── img/
    ├── avatar.png      # 个人头像
    ├── project1.jpg    # 项目图片1
    ├── project2.jpg    # 项目图片2
    └── project3.jpg    # 项目图片3
```

## 自定义内容

要自定义简历内容，请编辑 `js/main.js` 文件中的数据部分：

- `profile` - 个人基本信息
- `skills` - 技能列表及熟练度
- `education` - 教育经历
- `experience` - 工作经历
- `projects` - 项目经历
- `hobbies` - 兴趣爱好
- `socialLinks` - 社交媒体链接

## 注意事项

1. 请确保已连接互联网，因为模板使用了 CDN 引入 Vue3 和字体图标
2. 如需离线使用，请下载相应的库文件并修改引用路径
3. 图片建议使用合适尺寸，以保证最佳显示效果
4. 项目图片建议使用 16:9 或 4:3 的比例

## 许可

此模板使用 MIT 许可证。
