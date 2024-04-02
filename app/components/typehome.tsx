import { Mask, useMaskStore } from "../store/mask";
import { useAppConfig, useChatStore } from "../store";
import { useLocation, useNavigate } from "react-router-dom";
import { Path, SlotID } from "../constant";
export function Typehome() {
  const chatStore = useChatStore();
  const navigate = useNavigate();
  const startChat = (mask?: Mask) => {
    console.log("dianji");
    setTimeout(() => {
      chatStore.newSession({
        avatar: "1f4d1",
        name: "简历写手",
        context: [
          {
            id: "cv-0",
            role: "user",
            content:
              "我需要你写一份通用简历，每当我输入一个职业、项目名称时，你需要完成以下任务：\ntask1: 列出这个人的基本资料，如姓名、出生年月、学历、面试职位、工作年限、意向城市等。一行列一个资料。\ntask2: 详细介绍这个职业的技能介绍，至少列出10条\ntask3: 详细列出这个职业对应的工作经历，列出2条\ntask4: 详细列出这个职业对应的工作项目，列出2条。项目按照项目背景、项目细节、项目难点、优化和改进、我的价值几个方面来描述，多展示职业关键字。也可以体现我在项目管理、工作推进方面的一些能力。\ntask5: 详细列出个人评价，100字左右\n你把以上任务结果按照以下Markdown格式输出：\n\n```\n### 基本信息\n<task1 result>\n\n### 掌握技能\n<task2 result>\n\n### 工作经历\n<task3 result>\n\n### 项目经历\n<task4 result>\n\n### 关于我\n<task5 result>\n\n```",
            date: "",
          },
          {
            id: "cv-1",
            role: "assistant",
            content: "好的，请问您需要我为哪个职业编写通用简历呢？",
            date: "",
          },
        ],
        modelConfig: {
          model: "gpt-3.5-turbo",
          temperature: 0.5,
          top_p: 1,
          max_tokens: 2000,
          presence_penalty: 0,
          frequency_penalty: 0,
          sendMemory: true,
          historyMessageCount: 4,
          compressMessageLengthThreshold: 1000,
          enableInjectSystemPrompts: true,
          template: "{{input}}",
        },
        lang: "cn",
        builtin: true,
        createdAt: 1688899480536,
        id: 100008,
      });
      navigate(Path.Chat);
    }, 10);
  };
  return (
    <div
      onClick={() => {
        startChat();
      }}
    >
      123123123
    </div>
  );
}
