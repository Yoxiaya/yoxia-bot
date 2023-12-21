import { createOpenAPI, createWebsocket } from "qq-guild-bot";
import type { GetWsParam } from "qq-guild-bot";
import { CommandType } from "../types/mainType.ts";
import qqConfig from "../../config/qq.ts";
import chalk from "chalk";

class Bot {
    public client: any;
    private ws: any;
    private command: CommandType[];
    constructor(command: CommandType[]) {
        this.command = command;
    }

    public run = () => {
        this.client = createOpenAPI(qqConfig);
        this.ws = createWebsocket(qqConfig as GetWsParam);
        this.ready();
        this.publicGuideMessage();
    };
    private ready = () => {
        this.ws.on("READY", (data: any) => {
            console.log(chalk.green("----小小优夏,启动!----"));
        });
    };
    private publicGuideMessage = () => {
        this.ws.on("PUBLIC_GUILD_MESSAGES", (data: any) => {
            this.command.forEach((command: CommandType) => {
                if (data.msg.content.replace(/<@!.*>\s/, "") === command.name)
                    if ((this as any)[command.function]) {
                        (this as any)[command.function](data);
                    }
            });
            console.log("[PUBLIC_GUILD_MESSAGES] 事件接收 :", data);
        });
    };
}
export default Bot;
