using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PruebaXMS.BE;
using PruebaXMS.DAL;
using Usuario = PruebaXMS.BE.Usuario;
using UsuarioEF = PruebaXMS.DAL.Usuario;

namespace PruebaXMS.BLL.Repository
{
    public class UsuarioRepository : BaseRepository<Usuario, UsuarioEF, Guid>
    {
        public UsuarioRepository(PruebaXMSEntities _dbContext) : base(_dbContext)
        {
        }

        public override List<Usuario> All()
        {
            return base.All();
        }

        public override void Delete(Usuario entity)
        {
            base.Delete(entity);
        }

        public override Usuario GetById(Guid id)
        {
            return base.GetById(id);
        }

        public override void Insert(ref Usuario entity)
        {
            base.Insert(ref entity);
        }

        public override Usuario MapFromDataSourceToEntity(UsuarioEF source)
        {
            var usuario = new Usuario();
            var paisRepository = new PaisRepository();

            usuario.Id = source.Id;
            usuario.ApellidoMaterno = source.ApellidoMaterno;
            usuario.ApellidoPaterno = source.ApellidoPaterno;
            usuario.Pais = paisRepository.MapFromDataSourceToEntity(source.Pais);
            usuario.Password = source.Password;
            usuario.Username = source.Username;
            usuario.Nombres = source.Nombres;

            return usuario;

        }

        public override UsuarioEF MapFromEntityToDataSource(Usuario entity)
        {

            var usuarioEF = new UsuarioEF();

            usuarioEF.Id = entity.Id == Guid.Empty ? entity.Id = Guid.NewGuid() : entity.Id;
            usuarioEF.Nombres = entity.Nombres;
            usuarioEF.PaisId = entity.Pais.PaisId;
            usuarioEF.Password = entity.Password;
            usuarioEF.Username = entity.Username;
            usuarioEF.ApellidoMaterno = entity.ApellidoMaterno;
            usuarioEF.ApellidoPaterno = entity.ApellidoPaterno;

            return usuarioEF;
        }

        public override void Update(Usuario entity)
        {
            base.Update(entity);
        }
    }
}
