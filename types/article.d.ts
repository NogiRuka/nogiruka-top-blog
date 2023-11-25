interface Article {
    id: number;
    title: string;
    description: string;
    content: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favoritesCount: number;
    favorited: boolean;
    author: {
        username: string;
        bio: string;
        image: string;
        following: boolean;
    };
    favorites: {
    }
}

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type ArticleOption = Optional<Article, 'author' | 'title'>;


