using PruebaXMS.BE;
using PruebaXMS.BLL.BusinessImplemtacion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace PruebaXMS.API.Controllers
{
    [RoutePrefix("usuario")]
    public class UsuarioController : ApiController
    {
        [HttpPost]
        [Route("create")]
        public void Create(Usuario entity)
        {
            new UsuarioBLL().Create(ref entity);
        }

        [HttpPost]
        [Route("delete")]
        public void Delete(Usuario entity)
        {
            new UsuarioBLL().Delete(ref entity);
        }

        [HttpPost]
        [Route("update")]
        public void Update(Usuario entity)
        {
            new UsuarioBLL().Update(ref entity);
        }

        [HttpGet]
        [Route("all")]
        public List<Usuario> All()
        {
            return new UsuarioBLL().All();
        }
    }
}