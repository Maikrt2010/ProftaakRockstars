using System;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class ArticleModel
    {
        [Key]
        public int ArticleId { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
    }
}
