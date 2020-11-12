using System;
using System.Collections.Generic;
using System.Text;
using DALInterfaces;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<ArticleDTO> Articles { get; set; }
    }
}
