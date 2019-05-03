interface CloneParams {
    url: string;
    name: string;
    dest?: string;
    branch?: string;
}
declare function clone(params: CloneParams): Promise<{}>;
export default clone;
