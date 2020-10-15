using System;

namespace Factory
{
    public static class DALClassCreator
    {
        public static IArticleRepository CreateArticleRepository()
        {
            var articleRepository = new ArticleRepository();
            return articleRepository
        }
    }
}
