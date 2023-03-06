using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace API.Models
{
    public class MyDbContext : DbContext
    {

        public DbSet<User> users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("server=adminkitty.iptime.org;database=test;user=kitty;password=??");
        }
    }
}

