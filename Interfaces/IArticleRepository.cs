using System;
using System.Collections.Generic;
using System.Text;

namespace DALInterfaces
{
    public interface IArticleRepository
    {
        public void GetArticle();
        public void AddArticle();
        public void RemoveArticle();
        public void UpdateArticle();
    }
}
