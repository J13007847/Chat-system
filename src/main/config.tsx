export const initialMessages = [
  {
    type: "system",
    content: {
      text: "智能助理进入对话，为您服务",
    },
  },
  {
    type: "text",
    content: { text: "主人好，我是智能助理，你的贴心小助手~" },
    user: {
      avatar:
        "	https://img1.baidu.com/it/u=1394839373,2163428572&fm=253&fmt=auto&app=138&f=JPEG?w=374&h=374",
    },
  },
  {
    type: "card",
    content: {
      picUrl:
        "https://gw.alicdn.com/tfs/TB1HURhcBCw3KVjSZR0XXbcUpXa-750-364.png",
    },
  },
];
export const defaultQuickReplies = [
  {
    icon: "message",
    name: "联系人工服务",
    isNew: true,
    isHighlight: true,
  },
  {
    name: "缴费",
    isNew: true,
  },
  {
    name: "没有网络",
    isHighlight: true,
  },
];
