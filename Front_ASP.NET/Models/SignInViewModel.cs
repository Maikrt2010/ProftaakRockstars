using DAL;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Front_ASP.NET.Models
{
    public class SignInViewModel : User
    {

        [Required(ErrorMessage = "Email moet ingevuld worden!")]
        [DataType(DataType.EmailAddress)]
        public override string Email { get; set; }

        [Required(ErrorMessage = "Wachtwoord moet ingevuld worden!")]
        [DataType(DataType.Password)]
        public override string PasswordHash { get; set; }

    }
}
