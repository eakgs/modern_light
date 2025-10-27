var builder = WebApplication.CreateBuilder(args);

// CORS (allow your Angular dev URL)
const string AllowFrontend = "_allowFrontend";
builder.Services.AddCors(options =>
{
    options.AddPolicy(AllowFrontend, policy =>
        policy.WithOrigins(
                "http://localhost:4200",      // ng serve
                "http://localhost:4000"       // ng dev:ssr (if you use this port)
            )
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials()              // remove if you won't use cookies/auth
    );
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(AllowFrontend);

app.MapControllers();

app.Run();
