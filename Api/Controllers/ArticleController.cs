using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        List<ArticleModel> articles = new List<ArticleModel>
        {
            new ArticleModel {Author = "Leo", Article = "YESS", Id = 1, Title = "TesT"},
            new ArticleModel {Author = "Leo", Article = "hopelijk", Id = 2, Title = "TesT1"},
            new ArticleModel {Author = "Leo", Article = "werkt t", Id = 3, Title = "TesT2"}
        };

        // GET: api/article
        [HttpGet]
        public IEnumerable<ArticleModel> GetAllArticles()
        {
            return articles;
        }

        // GET api/article/5
        [HttpGet("{id}")]
        public IActionResult GetArticle(int id)
        {
            var article = articles.FirstOrDefault((a) => a.Id == id);
            if (article == null)
            {
                return NotFound();
            }
            return Ok(article);
        }

        // POST api/article
        [HttpPost]
        public IActionResult PostNewArticle(ArticleModel article)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            articles.Add(article);

            return Ok();
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}