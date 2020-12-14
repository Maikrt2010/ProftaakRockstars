using Models;
using System;
using System.Collections.Generic;

namespace ViewIntersfaces
{
    public interface IArticle
    {
        public ArticleModel GetArticle(int Id);
        public IEnumerable<ArticleModel> GetArticles();
        public void AddArticle(ArticleModel article);
        public void RemoveArticle(int Id);
        public void UpdateArticle(ArticleModel article);
    }
}
