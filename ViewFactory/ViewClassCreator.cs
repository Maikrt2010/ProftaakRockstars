using Logic;
using System;
using ViewIntersfaces;

namespace ViewFactory
{
    public static class ViewClassCreator
    {
        public static ArticleCollection CreateArticleCollection()
        {
            var articlecollection = new ArticleCollection();
            return articlecollection;
        }

        //private static IArticle Iarticle;

        //public static IArticle Article
        //{
        //    get { return Iarticle = new ArticleCollection();
        //}
        //}
    }
}
