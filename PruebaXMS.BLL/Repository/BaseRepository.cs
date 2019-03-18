using PruebaXMS.CommonElement.RepositoryBase;
using PruebaXMS.DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PruebaXMS.BLL.Repository
{
    public abstract class BaseRepository<T, EFT, IDT> : IRepository<T, EFT, IDT> where EFT : class
    {

        protected PruebaXMSEntities dbContext { get; set; }


        public BaseRepository(PruebaXMSEntities _dbContext)
        {
            dbContext = _dbContext;
        }

     
        public virtual List<T> All()
        {
            var entities = new List<T>();

            dbContext.Set<EFT>().ToList().ForEach(c => entities.Add(MapFromDataSourceToEntity(c)));
            return entities;
        }

        public virtual void Delete(T entity)
        {
            var entityEF = MapFromEntityToDataSource(entity);
            dbContext.Set<EFT>().Attach(entityEF);
            dbContext.Set<EFT>().Remove(entityEF);
            dbContext.SaveChangesAsync();
        }


        public virtual T GetById(IDT id)
        {
            var entity = dbContext.Set<EFT>().Find(id);

            if (entity == null)
            {
                throw new Exception("No existe la entidad con id: " + id.ToString());
            }

            return MapFromDataSourceToEntity(entity);
        }

        public virtual void Insert(ref T entity)
        {
            var entityEF = MapFromEntityToDataSource(entity);
            var result = dbContext.Set<EFT>().Add(entityEF);
            dbContext.SaveChanges();
        }

        public abstract T MapFromDataSourceToEntity(EFT source);

        public abstract EFT MapFromEntityToDataSource(T entity);

        public virtual void Update(T entity)
        {
            var entityEF = MapFromEntityToDataSource(entity);
            dbContext.Entry(entityEF).State = EntityState.Modified;
            dbContext.SaveChanges();
        }

     
    }
}
