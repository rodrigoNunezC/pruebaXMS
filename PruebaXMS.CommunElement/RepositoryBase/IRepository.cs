using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PruebaXMS.CommonElement.RepositoryBase
{
    public interface IRepository<T, EFT, IDT>
    {
        T GetById(IDT id);
        T MapFromDataSourceToEntity(EFT source);
        EFT MapFromEntityToDataSource(T entity);

    }
}
