import Express from 'express';

export const getAllPosts = async (req,res) => {

    res.status(202).send('All Posts from controller');
};

export const getSinglePost = async (req, res) => {
    const postId = req.params.id;
    const postAuthor = req.params.author;
    const post = req.body;
    res.status('200').send('Post id : ' + postId + ' //   Post  Content :' + post.toString());
}