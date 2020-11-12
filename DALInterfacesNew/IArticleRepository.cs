using System;
using System.Collections.Generic;
using System.Text;

namespace DALInterfaces
{
    public interface IArticleRepository
    {
        public ArticleDTO GetArticle(int Id);
        public void AddArticle(ArticleDTO article);
        public void RemoveArticle(int Id);
        public void UpdateArticle();
    }
}
