using DALInterfaces;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL
{
    public class ArticleRepository : IArticleRepository
    {
        private readonly AppDbContext _context;
        public ArticleRepository(AppDbContext context)
        {
            _context = context;
        }

        public ArticleRepository()
        {

        }

        public ArticleModel GetArticle(int id)
        {
            return _context.Articles.SingleOrDefault(article => article.ArticleId == id);
        }

        public IEnumerable<ArticleModel> GetArticles()
        {
            return _context.Articles;
        }

        public void AddArticle(ArticleModel article)
        {
            _context.Articles.Add(article);
            _context.SaveChanges();
        }

        public void RemoveArticle(int id)
        {
            var article = _context.Articles.Find(id);

            if (article == null) return;

            _context.Articles.Remove(article);
            _context.SaveChanges();
        }

        public void UpdateArticle(ArticleModel updatedArticle)
        {
            var article = _context.Articles.Attach(updatedArticle);
            article.State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}
