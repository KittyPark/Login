using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignupController : ControllerBase
    {
        

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] User users)
        {
            using (var db = new MyDbContext()) // DbContext 인스턴스 생성
            {
            // 이미 등록된 사용자인지 확인
            var result = await db.users.FirstOrDefaultAsync(u => u.ID == users.ID);
            if (result != null)
            {
                return BadRequest("Username already exists.");
            }

            // 새로운 사용자 등록
            db.users.Add(users);
            await db.SaveChangesAsync();
            return Ok();
        }
        }
    }
}
