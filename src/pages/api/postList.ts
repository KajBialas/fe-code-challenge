import type { NextApiRequest, NextApiResponse } from 'next'
import postListMock, { PostListT } from "../../data/postsListMock";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PostListT>
) {
    res.status(200).json(postListMock)
}
