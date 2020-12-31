export interface Activity {
    dateTime: string;
    list: Array<{
        postImage: string;
        description: string;
        user: string;
        createdAt: number;
        type: 'follow' | 'like';
    }>;

}