using Logic;
using System;

namespace ViewFactory
{
    public static class ViewClassCreator
    {
        public static ArticleCollection CreateArticleCollection()
        {
            var articleCollection = new ArticleCollection();
            return articleCollection;
        }
    }
}
