using System;
using System.Collections.Generic;
using System.Text;

namespace DALInterfaces
{
    interface IUserRepository
    {
        public void GetUser();
        public void AddUser();
        public void RemoveUser();
        public void UpdateUser();
    }
}
