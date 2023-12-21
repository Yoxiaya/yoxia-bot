export interface QQConfig {
    appID: string;
    token: string;
    intents: string[];
    sandbox: boolean;
}
export interface CommandType {
    name: string;
    description: string;
    function: string;
}
