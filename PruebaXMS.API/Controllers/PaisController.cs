using PruebaXMS.BE;
using PruebaXMS.BLL.BusinessImplemtacion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace PruebaXMS.API.Controllers
{
    [RoutePrefix("pais")]
    public class PaisController : ApiController
    {
        [HttpGet]
        [Route("all")]
        public List<Pais> All()
        {
            return new PaisBLL().All();
        }
    }
}