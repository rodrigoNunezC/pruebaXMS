using PruebaXMS.BE;
using PruebaXMS.BLL.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PruebaXMS.BLL.BusinessImplemtacion
{
    public class PaisBLL
    {
        public List<Pais> All()
        {
            try
            {
                return new PaisRepository().All();

            }
            catch (Exception ex)
            {

                throw new ArgumentException(ex.Message);
            }
        }
    }
}
