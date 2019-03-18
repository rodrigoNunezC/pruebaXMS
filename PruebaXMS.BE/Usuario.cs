using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PruebaXMS.BE
{
   public class Usuario
    {
        public Guid Id { get; set; }
        public string Nombres { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public Pais Pais { get; set; }

        public Usuario()
        {
            Pais = new Pais();
        }
      

    }
}
