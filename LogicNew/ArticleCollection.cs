using DAL;
using DALInterfaces;
using Factory;
using Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Logic
{
    public class ArticleCollection
    {
        private IArticleRepository articleRepository;
        public ArticleCollection()
        {
            
        }

        public ArticleModel GetArticle(int id)
        {
            var article = articleRepository.GetArticle(id);
            return article;
        }

        public IEnumerable<ArticleModel> GetArticles()
        {
            IEnumerable<ArticleModel> articles = new List<ArticleModel>();
            articles = articleRepository.GetArticles();
            return articles;
        }

        public void CreateArticle(ArticleModel article)
        {
            articleRepository.AddArticle(article);
        }

        public void UpdateArticle(ArticleModel article)
        {
            articleRepository.UpdateArticle(article);
        }

        public void DeleteArticle(int id)
        {
            articleRepository.RemoveArticle(id);
        }

        //public Article ConvertToArticle(ArticleModel articlemodel)
        //{
        //    Article article1 = new Article()
        //    {
        //        Author = articlemodel.Author,
        //        Title = articlemodel.Title,
        //        ArticleId = articlemodel.ArticleId
        //    };
        //    return article1;
        //}
    }
}