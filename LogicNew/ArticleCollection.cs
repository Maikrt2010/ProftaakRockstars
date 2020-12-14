using DAL;
using DALInterfaces;
using Factory;
using Models;
using System;
using System.Collections.Generic;
using System.Text;
using ViewIntersfaces;

namespace Logic
{
    public class ArticleCollection :IArticle
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

        public void AddArticle(ArticleModel article)
        {
            articleRepository.AddArticle(article);
        }

        public void UpdateArticle(ArticleModel article)
        {
            articleRepository.UpdateArticle(article);
        }

        public void RemoveArticle(int id)
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