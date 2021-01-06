using System;
using System.Collections.Generic;
using Models;

namespace Logic.Interfaces
{
    public interface ITagCollection
    {
        TagModel GetTag(int id);
        IEnumerable<TagModel> GetTags();
        void CreateTag(TagModel tag);
        void UpdateTag(TagModel tag);
        void DeleteTag(int id);
    }
}
