using DALInterfaces;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
namespace DAL
{
    public class TagRepository : ITagRepository
    {
        private readonly AppDbContext _context;
        public TagRepository(AppDbContext context)
        {
            _context = context;
        }
        public TagRepository()
        {

        }

        public TagModel GetTag(int Id)
        {
            return _context.Tags.SingleOrDefault(tag => tag.TagId == Id);
        }

        public IEnumerable<TagModel> GetTags()
        {
            return _context.Tags;
        }

        public void AddTag(TagModel tag)
        {
            _context.Tags.Add(tag);
            _context.SaveChanges();
        }

        public void RemoveTag(int Id)
        {
            var tag = _context.Tags.Find(Id);

            if (tag == null) return;

            _context.Tags.Remove(tag);
            _context.SaveChanges();
        }

        public void UpdateTag(TagModel updatedtag)
        {
            var tag = _context.Tags.Attach(updatedtag);
            tag.State = EntityState.Modified;
            _context.SaveChanges();
        } 
    }
}