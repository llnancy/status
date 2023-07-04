# uptime-status

一个基于 [UptimeRobot API](https://uptimerobot.com/api/) 的在线状态面板，修改自 [uptime-status](https://github.com/yb/uptime-status) 。

## 事先准备

- 您需要先到 [UptimeRobot](https://uptimerobot.com/ "UptimeRobot") 添加站点监控，并在 `My Settings` 页面获取 `API Key`。
- 您需要拥有一个网站空间，常见的 `Nginx` / `PHP` 等空间即可，甚至是阿里云的 `OSS` 等纯静态空间也行。

## 如何使用

- `git clone` 本项目
- 修改 `public/config.js` 文件：
   1. `SiteName`: 要显示的网站名称。
   2. `ApiKeys`: 从 `UptimeRobot` 获取的 `API Key`，支持 `Monitor-Specific API Keys` 和 `Read-Only API Key`。
   3. `CountDays`: 要显示的日志天数，建议 `60` 或 `90`，显示效果比较好。
   4. `ShowLink`: 是否显示站点链接。
   5. `Navi`: 导航栏的菜单列表。
- 安装依赖：
  
  ```sh
  npm install
  ```
- 本地预览：

  ```sh
  npm run start
  ```

- 打包部署：

  ```sh
  npm run build
  ```

- 将 `build` 目录下的所有文件上传到网站空间。
