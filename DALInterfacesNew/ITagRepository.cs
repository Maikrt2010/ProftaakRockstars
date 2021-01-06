using System.Collections.Generic;
using Models;

namespace DALInterfaces
{
    public interface ITagRepository
    {
        TagModel GetTag(int Id);
        IEnumerable<TagModel> GetTags();
        void AddTag(TagModel tag);
        void RemoveTag(int Id);
        void UpdateTag(TagModel tag);
    }
}