using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ViewIntersfaces;
using Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/article")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class ArticleController : ControllerBase
    {
        private readonly IArticle _articleCollection;

        public ArticleController(IArticle articleCollection)
        {
            _articleCollection = articleCollection;
        }

        //List<ArticleModel> articles = new List<ArticleModel>
        //{
        //    new ArticleModel {Author = "Leo", Article = "YESS", Id = 1, Title = "TesT"},
        //    new ArticleModel {Author = "Leo", Article = "hopelijk", Id = 2, Title = "TesT1"},
        //    new ArticleModel {Author = "Leo", Article = "werkt t", Id = 3, Title = "TesT2"}
        //};

        // GET: api/article
        [HttpGet]
        [EnableCors("AllowOrigin")]
        public IEnumerable<ArticleModel> GetAllArticles()
        {
            return _articleCollection.GetArticles();
        }

        // GET api/article/5
        [HttpGet("{id}")]
        [EnableCors("AllowOrigin")]
        public IActionResult GetArticle(int id)
        {
            var article = _articleCollection.GetArticle(id);
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

            _articleCollection.AddArticle(article);

            return Ok();
        }

        // PUT api/<ValuesController>/5
        [HttpPut]
        public IActionResult Update(ArticleModel article)
        {
            _articleCollection.UpdateArticle(article);
            return Ok();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete]
        public void Delete(int id)
        {
        }
    }
}