using DAL;
using DALInterfaces;
using Models;
using System;
using System.Collections.Generic;
using System.Text;
using ViewIntersfaces;

namespace Logic
{
    public class ArticleCollection :IArticle
    {
        private IArticleRepository _articleRepository;

        public ArticleCollection(IArticleRepository articleRepository)
        {
            _articleRepository = articleRepository;
        }

        public ArticleCollection()
        {

        }

        public ArticleModel GetArticle(int id)
        {
            var article = _articleRepository.GetArticle(id);
            return article;
        }

        public IEnumerable<ArticleModel> GetArticles()
        {
            IEnumerable<ArticleModel> articles = new List<ArticleModel>();
            articles = _articleRepository.GetArticles();
            return articles;
        }

        public void AddArticle(ArticleModel article)
        {
            _articleRepository.AddArticle(article);
        }

        public void UpdateArticle(ArticleModel article)
        {
            _articleRepository.UpdateArticle(article);
        }

        public void RemoveArticle(int id)
        {
            _articleRepository.RemoveArticle(id);
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