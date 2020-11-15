export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export  const posts:Array<PostsType> = [
    {id: 1, message: 'hi, how are you?', likesCount: 12},
    {id: 2, message: 'Hello world', likesCount: 26},
    {id: 2, message: 'Hello world', likesCount: 26},
]
