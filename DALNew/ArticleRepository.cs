using DALInterfaces;
using Microsoft.EntityFrameworkCore;
using System;
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
        public ArticleDTO GetArticle(int Id)
        {
            return _context.Articles.SingleOrDefault(dto => dto.ArticleId == Id);
        }

        public void AddArticle(ArticleDTO article)
        {
            _context.Articles.Add(article);
            _context.SaveChanges();
        }

        public void RemoveArticle(int Id)
        {
            var article = _context.Articles.Find(Id);

            if (article == null) return;

            _context.Articles.Remove(article);
            _context.SaveChanges();
        }

        public void UpdateArticle(ArticleDTO updatedArticle)
        {
            var article = _context.Articles.Attach(updatedArticle);
            article.State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}
