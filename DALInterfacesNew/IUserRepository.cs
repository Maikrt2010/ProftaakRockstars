using System;
using System.Collections.Generic;
using System.Text;

namespace DALInterfaces
{
    public interface IUserRepository
    {
        public void GetUser();
        public void AddUser();
        public void RemoveUser();
        public void UpdateUser();
    }
}
