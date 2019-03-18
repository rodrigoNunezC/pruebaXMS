using PruebaXMS.BE;
using System;
using System.Collections.Generic;
using PruebaXMS.DAL;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Pais = PruebaXMS.BE.Pais;
using PaisEF = PruebaXMS.DAL.Pais;

namespace PruebaXMS.BLL.Repository
{
   public class PaisRepository
    {

        public Pais MapFromDataSourceToEntity(PaisEF source)
        {
            var pais = new Pais();
            pais.Id = source.Id;
            pais.PaisId = source.PaisId;
            pais.Nombre = source.Nombre;

            return pais;

        }

        public List<Pais> All()
        {
            List<Pais> listPais = null;

            using (var ctx = new  PruebaXMSEntities())
            {
                listPais = ctx.Pais.ToList().Select(c => MapFromDataSourceToEntity(c)).ToList();
            }

            return listPais;
        }
    }


   

}
