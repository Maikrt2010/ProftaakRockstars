using Logic;
using Models;
using NUnit.Framework;

namespace UnitTesting
{
    public class ArticleCollectionTests
    {
        private ArticleCollection articleCollection;
        [SetUp]
        public void Setup()
        {
            articleCollection = new ArticleCollection();
        }

        [Test]
        public void Test1()
        {
            ArticleModel article = new ArticleModel()
            {
                Author = "Rockstars employee",
                ArticleId = 1,
                Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                Title = "Lorem Ipsum"
            };

            articleCollection.AddArticle(article);



            Assert.Pass();
        }
    }
}