# 国科信门户专题服务

独立的 Vite + React 演示项目，包含三个已打通的门户页面：

- 新型高端智库
- 科技信息交流
- 科技专题服务

项目从原有后台仓库隔离创建，不会覆盖或改写原项目页面。当前业务数据均为界面与交互演示数据，不代表真实统计结论。

## 本地运行

```bash
pnpm install
pnpm dev
```

默认访问 `http://127.0.0.1:5173/`。可通过公共页头在三个页面间切换，也可直接访问：

- `/?page=think-tank#top`
- `/?page=information-exchange#ie-top`
- `/?page=technology-topic-service&module=panorama&sub=chain&industry=合成生物#tp-top`

## 构建验证

```bash
pnpm build
pnpm preview
```
