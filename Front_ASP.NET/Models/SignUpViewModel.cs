using DAL;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Front_ASP.NET.Models
{
    public class SignUpViewModel : User
    {

        [Required]
        [DataType(DataType.EmailAddress, ErrorMessage = "Email is niet ingevuld")]
        public override string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
        public override string PasswordHash { get; set; }

        [Required(ErrorMessage = "Confirm Password is required")]
        [StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
        [Compare("PasswordHash")]
        public string ConfirmPassword { get; set; }

        public string Role { get; set; }

        public IEnumerable<SelectListItem> RoleList { get; set; }

    }
}
