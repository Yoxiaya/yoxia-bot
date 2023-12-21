import Bot from "../lib/main.ts";

class YoXia extends Bot {
    constructor() {
        super([
            {
                name: "测试",
                description: "echo",
                function: "echo",
            },
            {
                name: "头像",
                description: "echo",
                function: "echoAvatar",
            },
        ]);
    }
    echo = async (data: any) => {
        const { msg } = data;
        const message = {
            content: msg.content.replace(/<@!.*>\s/, ""),
        };
        await this.client.messageApi.postMessage(msg.channel_id, message);
    };
    echoAvatar = async (data: any) => {
        const { msg } = data;
        const message = {
            content: "客官，您的头像",
            image: msg.author.avatar,
        };
        await this.client.messageApi.postMessage(msg.channel_id, message);
    };
}

export default YoXia;
