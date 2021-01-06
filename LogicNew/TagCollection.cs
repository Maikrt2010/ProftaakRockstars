using System.Collections;
using System.Collections.Generic;
using DALInterfaces;
using Models;

namespace Logic
{
    public class TagCollection
    {
        private ITagRepository tagRepository;
        public TagCollection()
        {
            ITagRepository tagRepository;
        }

        public TagModel GetTag(int id)
        {
            var tag = tagRepository.GetTag(id);
            return tag;
        }

        public IEnumerable<TagModel> GetTags()
        {
            IEnumerable<TagModel> tags = new List<TagModel>();
            tags = tagRepository.GetTags();
            return tags;
        }

        public void CreateTag(TagModel tag)
        {
            tagRepository.AddTag(tag);
        }

        public void UpdateTag(TagModel tag)
        {
            tagRepository.UpdateTag(tag);
        }

        public void DeleteTag(int id)
        {
            tagRepository.RemoveTag(id);
        }
    }
}