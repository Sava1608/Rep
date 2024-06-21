export interface IVideoResult{
    id: number;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    iso_639_1: string;
    iso_3166_1: string;
}
export interface IVideo{
    id:number;
    results:[IVideoResult];
}