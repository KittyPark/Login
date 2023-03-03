using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Linq;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] User users)
        {
            using (var db = new MyDbContext()) // DbContext 인스턴스 생성
            {
                var result = db.users.FirstOrDefault(u => u.ID == users.ID && u.PW == users.PW);
                if (result != null)
                {
                    return Ok();
                }
                else
                {
                    return Unauthorized();
                }
            }
        }
    }
}
