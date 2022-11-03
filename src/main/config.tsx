export const adminAvatar =
  "https://img0.baidu.com/it/u=3400779666,996797193&fm=253&fmt=auto&app=138&f=JPEG?w=518&h=500";
export const navBar = {
  logo: adminAvatar,
  title: "摸摸猫爪咨询中心",
  position: "left",
};
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
      avatar: adminAvatar,
    },
  },
  {
    type: "card",
    content: {
      code: "knowledge",
      data: {
        text: "内容（支持富文本）",
      },
    },
    meta: {
      evaluable: true, // 是否展示点赞点踩按钮
    },
  },
];
export const quickReplies = [
  {
    icon: "message",
    name: "联系人工服务",
    isNew: true,
    isHighlight: true,
  },
  {
    name: "吸猫多少钱",
    isNew: true,
  },
  {
    name: "有哪些猫可以选择",
    type: "url",
    url: "https://www.taobao.com/",
  },
];
export const toolbar = [
  {
    type: "image",
    icon: "image",
    title: "相册",
  },
  {
    type: "speech",
    icon: "mic",
    title: "语音输入",
  },
];
export const sidebar = [
  {
    title: "公告",
    code: "richtext",
    data: {
      text: '<p>这里是富文本内容，支持<a href="https://chatui.io/sdk/getting-started">链接</a>，可展示图片<img src="https://gw.alicdn.com/tfs/TB17TaySSzqK1RjSZFHXXb3CpXa-80-80.svg" /></p>',
    },
  },
];
