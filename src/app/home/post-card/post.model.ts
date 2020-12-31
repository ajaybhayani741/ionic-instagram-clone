export interface PostComment {
    user: string;
    text: string;
    avatar: string;
    likes: number;
    liked: boolean;
    createdAt: number;
    tags: Array<string>;
    replies: PostComment[];
}

export interface Post {
    id: number;
    username: string;
    avatar: string;
    imageUrl: string;
    location: string;
    likes: number;
    liked: boolean;
    saved: boolean;
    caption: string;
    comments: PostComment[];
    createdAt: number;
}

export const DummyPost: Post = {
    id: 1,
    username: 'vimal',
    avatar: 'https://picsum.photos/60/60',
    imageUrl: 'https://picsum.photos/600',
    caption: 'lorem ipsum, lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    location: 'Surat',
    liked: true,
    saved: true,
    likes: 100,
    createdAt: new Date().valueOf(),
    comments: [
        {
            user: 'test',
            avatar: 'https://picsum.photos/60/60',
            text: 'Test comment',
            likes: 5,
            liked: false,
            createdAt: new Date().valueOf(),
            tags: [],
            replies: []
        }
    ]
};