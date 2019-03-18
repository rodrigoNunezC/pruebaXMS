using PruebaXMS.BE;
using PruebaXMS.BLL.Repository;
using PruebaXMS.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Usuario = PruebaXMS.BE.Usuario;

namespace PruebaXMS.BLL.BusinessImplemtacion
{
   public class UsuarioBLL 
    {
      
        public void Create(ref Usuario entity)
        {
            try
            {
                using (var ctx = new PruebaXMSEntities())
                {
                    var asociadoRepository = new UsuarioRepository(ctx);

                    entity.Password = Encriptar(entity.Password);

                    asociadoRepository.Insert(ref entity);
                }
            }
            catch (Exception ex)
            {
                throw ex;

            }

        }


        private string Encriptar( string _cadenaAencriptar)
        {
            string result = string.Empty;
            byte[] encryted = System.Text.Encoding.Unicode.GetBytes(_cadenaAencriptar);
            result = Convert.ToBase64String(encryted);
            return result;
        }


        //private string DesEncriptar( string _cadenaAdesencriptar)
        //{
        //    string result = string.Empty;
        //    byte[] decryted = Convert.FromBase64String(_cadenaAdesencriptar);
        //    //result = System.Text.Encoding.Unicode.GetString(decryted, 0, decryted.ToArray().Length);
        //    result = System.Text.Encoding.Unicode.GetString(decryted);
        //    return result;
        //}

        public void Update(ref Usuario entity)
        {
            try
            {
                using (var ctx = new PruebaXMSEntities())
                {
                    var asociadoRepository = new UsuarioRepository(ctx);
                    asociadoRepository.Update(entity);
                }

            }
            catch (Exception ex)
            {
                throw ex;

            }

        }

        public void Delete(ref Usuario entity)
        {
            try
            {
                using (var ctx = new PruebaXMSEntities())
                {
                    var asociadoRepository = new UsuarioRepository(ctx);
                    asociadoRepository.Delete(entity);
                }

            }
            catch (Exception ex)
            {
                throw ex;

            }

        }

        public List<Usuario> All()
        {
            try
            {
                using (var ctx = new PruebaXMSEntities())
                {
                    return new UsuarioRepository(ctx).All();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }



    }
}
