using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TempleWebApplication.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace TempleWebApplication.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IWebHostEnvironment _env;

    public HomeController(ILogger<HomeController> logger, IWebHostEnvironment env)
    {
        _logger = logger;
        _env = env;
    }

    public IActionResult Index()
    {
        // Path to your static HTML
        var path = Path.Combine(_env.ContentRootPath, "Views", "Home", "remixed-939a1166.html");
        if (System.IO.File.Exists(path))
        {
            return PhysicalFile(path, "text/html");
        }

        // fallback to normal view resolution (will show same error if missing)
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}