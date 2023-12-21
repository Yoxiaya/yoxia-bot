# yoxia-bot

QQ 机器人小优夏

> 拉取本项目

```bash
https://github.com/Yozorani-koi/yoxia-bot.git
```

> 安装依赖

```bash
npm install
# 或者
pnpm install
```

> 启动

```bash
yox start
```

```js
ws.on("ERROR", (data) => {
    console.log("[ERROR] 事件接收 :", data);
});
ws.on("GUILDS", (data) => {
    console.log("[GUILDS] 事件接收 :", data);
});
// 公域无法设置
ws.on("GUILD_MEMBERS", (data) => {
    console.log("[GUILD_MEMBERS] 事件接收 :", data);
});
ws.on("GUILD_MESSAGES", (data) => {
    console.log("[GUILD_MESSAGES] 事件接收 :", data);
});
ws.on("GUILD_MESSAGE_REACTIONS", (data) => {
    console.log("[GUILD_MESSAGE_REACTIONS] 事件接收 :", data);
});
ws.on("DIRECT_MESSAGE", (data) => {
    console.log("[DIRECT_MESSAGE] 事件接收 :", data);
});
ws.on("INTERACTION", (data) => {
    console.log("[INTERACTION] 事件接收 :", data);
});
ws.on("MESSAGE_AUDIT", (data) => {
    console.log("[MESSAGE_AUDIT] 事件接收 :", data);
});
ws.on("FORUMS_EVENT", (data) => {
    console.log("[FORUMS_EVENT] 事件接收 :", data);
});
ws.on("AUDIO_ACTION", (data) => {
    console.log("[AUDIO_ACTION] 事件接收 :", data);
});
ws.on("PUBLIC_GUILD_MESSAGES", (data) => {
    console.log("[PUBLIC_GUILD_MESSAGES] 事件接收 :", data);
});
```
