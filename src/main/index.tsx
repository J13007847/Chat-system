import React, { useEffect } from "react";
import {
  initialMessages,
  navBar,
  quickReplies,
  sidebar,
  toolbar,
} from "./config";
export default function ChartMain() {
  const globalWindow: any = window;
  useEffect(() => {
    const wrappeDom = document.getElementById("wrapper");
    const bot = new globalWindow.ChatSDK({
      root: wrappeDom,
      config: {
        loadMoreText: "点击加载更多",
        navbar: navBar,
        messages: initialMessages,
        quickReplies: quickReplies,
        sidebar: sidebar,
        toolbar: toolbar,
      },
      requests: {
        // 配置接口
        history: function () {
          return {
            url: "/api/history",
          };
        },
        evaluate(data: any) {
          return {
            url: "/api/evaluate",
            data: {
              messageId: data.msgId,
              evaluateType: data.type,
            },
          };
        },
        onToolbarClick: function (item: any, ctx: any) {
          // item 即为上面 toolbar 中被点击的那一项，可通过 item.type 区分
          // ctx 为上下文，可用 ctx.appendMessage 渲染消息等
        },
      },
      handlers: {
        /* ... */
      },
    });

    bot.run();
  }, []);

  // 注意 wrapper 的高度
  return <div style={{ height: "100%" }} id="wrapper" />;
}
