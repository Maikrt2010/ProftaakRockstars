using DALInterfaces;
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

        }

        public void UpdateArticle()
        {

        }
    }
}
