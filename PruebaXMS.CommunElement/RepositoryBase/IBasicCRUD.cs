using System;
using System.Collections.Generic;
using System.Text;

namespace PruebaXMS.CommonElement.RepositoryBase 
{
    public interface IBasicCRUD<T, IDT>
    {
        void Insert(ref T entity);
        void Delete(T entity);
        List<T> All();
        void Update(T entity);
    }
}
