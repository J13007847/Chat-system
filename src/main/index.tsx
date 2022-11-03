import React from "react";
import Chat, { Bubble, useMessages } from "@chatui/core";
import type { MessageProps } from "@chatui/core";
import "@chatui/core/dist/index.css";
import {
  adminAvatar,
  navBar,
  initialMessages,
  quickReplies,
  toolbar,
} from "./config";
export default function ChartMain() {
  const { messages, appendMsg, setTyping } = useMessages(initialMessages);
  function handleSend(type: string, val: string) {
    if (type === "text" && val.trim()) {
      appendMsg({
        type: "text",
        content: { text: val },
        user: {
          avatar:
            "	https://img0.baidu.com/it/u=2037393522,862246957&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
        },
        position: "right",
      });

      setTyping(true);

      setTimeout(() => {
        appendMsg({
          type: "text",
          content: { text: "亲，您遇到什么问题啦？请简要描述您的问题~" },
          user: {
            avatar:
              "	https://img1.baidu.com/it/u=1394839373,2163428572&fm=253&fmt=auto&app=138&f=JPEG?w=374&h=374",
          },
        });
      }, 1000);
    }
  }

  function renderMessageContent(msg: MessageProps) {
    const { content } = msg;
    if (content.picUrl) {
      return (
        <Bubble type="image">
          <img src={content.picUrl} alt="" />
        </Bubble>
      );
    }
    return <Bubble content={content.text} />;
  }
  const onQuickReplyClick = ({ name }: { name: string }) => {
    handleSend("text", name);
  };

  return (
    <Chat
      navbar={navBar}
      messages={messages}
      loadMoreText="加载更多"
      toolbar={toolbar}
      renderMessageContent={renderMessageContent}
      quickReplies={quickReplies}
      onQuickReplyClick={onQuickReplyClick}
      onSend={handleSend}
    />
  );
}
