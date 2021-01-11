using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Front_ASP.NET.Models;
using Microsoft.AspNetCore.Mvc;

namespace Front_ASP.NET.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult SignUp()
        {
            return View();
        }


        [HttpPost]
        public IActionResult SignUp(SignUpViewModel signUpViewModel)
        {
            return View(signUpViewModel);
        }

        public IActionResult Signin()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SignIn(SignInViewModel signInViewModel)
        {
            return View(signInViewModel);
        }

    }
}