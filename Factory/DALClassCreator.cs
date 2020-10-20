using DAL;
using System;

namespace Factory
{
    public static class DALClassCreator
    {
        public static ArticleRepository CreateArticleRepository()
        {
            var articleRepository = new ArticleRepository();
            return articleRepository;
        }
    }
}
