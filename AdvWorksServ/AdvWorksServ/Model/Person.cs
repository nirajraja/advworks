using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace AdvWorksServ
{
    public class Person
    {
        [Key]
        public int businessEntityID { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string personType { get; set; }

        public Person()
        {

        }
    }
}
